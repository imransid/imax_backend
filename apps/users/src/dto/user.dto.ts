import { InputType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: "Name is required" })
  @IsString({ message: "Name must need to be one string." })
  fullName: string;

  @Field()
  @IsNotEmpty({ message: "Email is required" })
  @IsEmail({}, { message: "Email." })
  email: string;

  @Field()
  @IsNotEmpty({
    message: "Mobile Number is required.",
  })
  mobileNumber: string;

  @Field()
  @IsNotEmpty({
    message: "Password is required.",
  })
  @MinLength(8, { message: "Password must be 8 characters. " })
  password: string;

  @Field()
  @IsNotEmpty({
    message: "Gender is required.",
  })
  @IsEmail({}, { message: "Gender is invalid. " })
  gender: string;

  @Field()
  @IsNotEmpty({
    message: "Birthday is required.",
  })
  @IsEmail({}, { message: "Birthday is invalid. " })
  birthday: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({
    message: "Mobile Number is required.",
  })
  mobileNumber: string;

  @Field()
  @IsNotEmpty({
    message: "Password is required.",
  })
  @MinLength(8, { message: "Password must be 8 characters. " })
  password: string;
}
