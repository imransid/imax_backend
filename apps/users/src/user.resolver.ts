import { Args, Context, Mutation, Resolver, Query } from "@nestjs/graphql";
import { BadRequestException, UseFilters, UseGuards } from '@nestjs/common';
import { UsersService } from "./users.service";
import { LoginResponse, RegisterResponse } from "./types/user.type";
import { RegisterDto, LoginDto } from "./dto/user.dto";
import { Response } from "express";
import { User } from "./entities/user.entity";
import { AuthGuard } from './guards/auth.guards';
import { UpdateProfileDto } from "./dto/update-profile.dto";


@Resolver("User")
export class usersResolvers {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args("registerInput") registerDto: RegisterDto,
    @Context() context: { res: Response }
  ): Promise<RegisterResponse> {
    if (!registerDto.fullName || !registerDto.email || !registerDto.password) {
      throw new BadRequestException("Please fill the all fields");
    }

    const user = await this.userService.register(registerDto, context.res);
    return  user ;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Args('mobileNumber') mobileNumber: string,
    @Args('password') password: string,
  ): Promise<LoginResponse> {
    try {

      let res = await this.userService.login(mobileNumber, password);
      return res
    } catch (error) {
      console.error("Login error:", error);
      throw new BadRequestException(error.message); // or another appropriate exception
    }
  }


  @Mutation(() => User)
  @UseGuards(AuthGuard)  // Protect this mutation
  async updateProfile(
    @Args("updateProfileInput") updateProfileDto: UpdateProfileDto,
    @Context() context: { req: any }
  ): Promise<User> {
    const userId = context.req.user.id;
    return this.userService.updateProfile(userId, updateProfileDto);
  }


  @Query(() => [User])
  @UseGuards(AuthGuard)
   async getUser (@Context() context: { req: Request }) {
    return await this.userService.getUsers(context.req);
  }
}
