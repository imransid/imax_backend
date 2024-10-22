// src/users/dto/update-profile.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsEmail, IsMobilePhone } from 'class-validator';

@InputType() // Add this decorator
export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  fullName?: string;

  @IsOptional()
  @IsEmail()
  @Field({ nullable: true })
  email?: string;

  @IsOptional()
  @IsMobilePhone()
  @Field({ nullable: true })
  mobileNumber?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  gender?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  birthday?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  password?: string;
}
