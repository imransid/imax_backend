import { ObjectType, Field } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';

// DTO for the nested monthly medicineLocalId object
@ObjectType()
export class MedicineLocalIdWeeklyDto {
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

// DTO for the main structure (monthly)
@ObjectType() // Change to ObjectType
export class MedicineWeeklyListDto {
  @Field(() => MedicineLocalIdWeeklyDto)
  medicineLocalId: MedicineLocalIdWeeklyDto;
}

// DTO for the entire array structure (monthly)
@ObjectType() // Change to ObjectType
export class MedicineWeeklyListsDto {
  @Field(() => [MedicineWeeklyListDto])
  medicines: MedicineWeeklyListDto[];
}
