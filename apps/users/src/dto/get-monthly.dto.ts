import { ObjectType, Field } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';

// DTO for the nested monthly medicineLocalId object
@ObjectType()
export class MedicineLocalIdMonthlyDto {
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

// DTO for the main structure (monthly)
@ObjectType() // Change to ObjectType
export class MedicineMonthlyListDto {
  @Field(() => MedicineLocalIdMonthlyDto)
  medicineLocalId: MedicineLocalIdMonthlyDto;
}

// DTO for the entire array structure (monthly)
@ObjectType() // Change to ObjectType
export class MedicineMonthlyListsDto {
  @Field(() => [MedicineMonthlyListDto])
  medicines: MedicineMonthlyListDto[];
}
