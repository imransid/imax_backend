import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';

// DTO for the nested medicineLocalId object
@InputType()
export class MedicineLocalIdDto {
  @Field(() => [String])
  @IsArray()
  weeklyTime: string[];

  @Field(() => String)
  @IsString()
  timeInterval: string;

  @Field(() => String)
  @IsString()
  medicineLocalId: string;
}

// DTO for the main structure
@InputType()
export class CreateMedicineWeeklyListDto {
  @Field(() => MedicineLocalIdDto)
  medicineLocalId: MedicineLocalIdDto;
}

// DTO for the entire array structure
@InputType()
export class CreateMedicineWeeklyListsDto {
  @Field(() => [CreateMedicineWeeklyListDto])
  medicines: CreateMedicineWeeklyListDto[];
}
