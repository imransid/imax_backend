import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';

// DTO for the nested medicineLocalId object
@InputType()
export class MedicineLocalId_Dto {
  @Field(() => [String])
  @IsArray()
  Days: string[];

  @Field(() => String)
  @IsString()
  eachOfDays: string;

  @Field(() => String)
  @IsString()
  medicineLocalId: string;
}

// DTO for the main structure
@InputType()
export class CreateMedicineMonthlyListDto {
  @Field(() => MedicineLocalId_Dto)
  medicineLocalId: MedicineLocalId_Dto;
}

// DTO for the entire array structure
@InputType()
export class CreateMedicineWeeklyListsDto {
  @Field(() => [CreateMedicineMonthlyListDto])
  medicines: CreateMedicineMonthlyListDto[];
}
