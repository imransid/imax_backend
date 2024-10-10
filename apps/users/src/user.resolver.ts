import { Args, Context, Mutation, Resolver, Query } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { LoginResponse, RegisterResponse } from "./types/user.type";
import { RegisterDto, LoginDto } from "./dto/user.dto";
import { BadRequestException } from "@nestjs/common";
import { Response } from "express";
import { User } from "./entities/user.entity";

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

    return { user };
  }

  @Mutation(() => LoginResponse)
  async login(
    @Args('mobileNumber') mobileNumber: string,
    @Args('password') password: string,
  ): Promise<LoginResponse> {
    try {
      return await this.userService.login(mobileNumber, password);
    } catch (error) {
      console.error("Login error:", error);
      throw new BadRequestException(error.message); // or another appropriate exception
    }
  }

  @Query(() => [User])
  async getUser() {
    return await this.userService.getUsers();
  }
}
