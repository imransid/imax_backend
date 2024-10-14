import { Args, Context, Mutation, Resolver, Query } from "@nestjs/graphql";
import { BadRequestException, UseFilters, UseGuards } from '@nestjs/common';
import { UsersService } from "./users.service";
import { LoginResponse, RegisterResponse } from "./types/user.type";
import { RegisterDto, LoginDto } from "./dto/user.dto";
import { Response } from "express";
import { User } from "./entities/user.entity";
import { AuthGuard } from './guards/auth.guards';


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
      let res = await this.userService.login(mobileNumber, password);

      console.log("res", res)

      return res
    } catch (error) {
      console.error("Login error:", error);
      throw new BadRequestException(error.message); // or another appropriate exception
    }
  }

  @Query(() => [User])
  @UseGuards(AuthGuard)
  async async (@Context() context: { req: Request }) {
    return await this.userService.getUsers(context.req);
  }
}
