import { InputType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Scalar } from "@nestjs/graphql";
import { GraphQLUpload } from "graphql-upload";

@Scalar("Upload")
export class Upload {
  description = "Upload files";

  parseValue(value) {
    return GraphQLUpload.parseValue(value);
  }

  serialize(value) {
    return GraphQLUpload.serialize(value);
  }

  parseLiteral(ast) {
    return GraphQLUpload.parseLiteral(ast, ast.value);
  }
}

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

@InputType()
export class MedicineDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  medicineName: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  medicineStatus: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  takeStatus: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  doseQuantity: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  doseTime: string;
}

@InputType()
export class MedicineSettingDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  InstrucTion: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  MedicineTakeEachDay: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  treatmentDurationStartTime: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  treatmentDurationEndTime: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  medicineReminderTotalReq: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  medicineReminderCurrentStock: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  medicineReminderRemindToLeft: string;
}

@InputType()
export class AppointmentDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  date: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  time: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  doctorName: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  location: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  setReminder: string;
}

@InputType()
export class PrescriptionDto {
  @Field(() => Upload, { description: "Input for the slider image files." })
  filePath: Upload;
}
