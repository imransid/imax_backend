import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { LoginDto, RegisterDto } from "./dto/user.dto";
import { PrismaService } from "../../../prisma/prisma.service";
import { Response } from "express";

import * as bcrypt from "bcrypt";
import { TokenSender } from "./utils/sendToken";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configureService: ConfigService
  ) {}

  async register(registerDto: RegisterDto, response: Response) {
    const { fullName, email, password, mobileNumber, gender, birthday } =
      registerDto;

    const isPhoneNumberExits = await this.prisma.user.findUnique({
      where: {
        mobileNumber,
      },
    });

    if (isPhoneNumberExits) {
      throw new BadRequestException(
        "User already exits with this Phone Number!"
      );
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        fullName,
        email,
        password: hashPassword,
        mobileNumber,
        gender,
        birthday,
      },
    });

    
    return {
      message: 'User registered successfully',
    };
  }

  async login(
   mobileNumber : string,   password : string,
  ) {

    const user = await this.prisma.user.findUnique({
      where: {
        mobileNumber,
      },
    });

    if(user && await this.comparePassword(password, user.password)){
      const tokeSender = new TokenSender(this.configureService, this.jwtService);
      return tokeSender.sendToken(user);

    }else{
      return {
        user: null,
        accessToken: null,
        error: {
          message: 'Invalid email or password.',
        },
      };
    }
  }


  async comparePassword(password: string, hashed : string) : Promise<boolean> {
    return await bcrypt.compare(password, hashed)
  }

  async getUsers(req : any) {
    return this.prisma.user.findMany();
  }


  async updateProfile(userId: string, updateProfileDto: UpdateProfileDto): Promise<User> {
    const { password, ...updateData } = updateProfileDto;

    // If password is provided, hash it
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      Object.assign(updateData, { password: hashedPassword }); // Add hashed password to updateData
    }


    const user = await this.prisma.user.update({
      where: { id: parseInt(userId, 10) },
      data: updateData,
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }



  


}
