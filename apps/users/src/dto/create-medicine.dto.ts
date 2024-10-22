import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsEmail, IsMobilePhone } from 'class-validator';

@InputType() 
export class CreateMedicineDto {

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  medicineLocalId: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  userId: number;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  medicineName: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  medicineStatus: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  takeStatus: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  doseQuantity: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  doseTime: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  strengthMed: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  unitMed: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  typeMed: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  medicineId: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true }) // Add Field decorator
  createdDate: string;
}
