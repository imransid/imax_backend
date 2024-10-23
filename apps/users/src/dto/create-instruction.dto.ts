import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateMedicineInstructionDto {
  @IsString()
  @Field() // No need for nullable since it's required
  instrucTion: string;

  @IsString()
  @Field() // No need for nullable since it's required
  medicineLocalId: string;
}

@InputType()
export class CreateMedicineReminderDto {
  @IsString()
  @Field() // No need for nullable since it's required
  medicineReminderCurrentStock: string;

  @IsString()
  @Field() // No need for nullable since it's required
  medicineReminderRemindToLeft: string;

  @IsString()
  @Field() // No need for nullable since it's required
  medicineReminderTotalReq: string;

  @IsString()
  @Field() // No need for nullable since it's required
  medicineLocalId: string;
}


@InputType()
export class CreateMedicineDurationDto {
  @IsString()
  @Field() // No need for nullable since it's required
  medicineTakeEachDay: string;

  @IsString()
  @Field() // No need for nullable since it's required
  treatmentDurationEndTime: string;

  @IsString()
  @Field() // No need for nullable since it's required
  treatmentDurationStartTime: string;

  @IsString()
  @Field() // No need for nullable since it's required
  medicineLocalId: string;
}


@InputType()
export class CreateMedicineAppointmentDto {
  @IsString()
  @Field() // No need for nullable since it's required
  date: string;

  @IsString()
  @Field() // No need for nullable since it's required
  doctorName: string;

  @IsString()
  @Field() // No need for nullable since it's required
  location: string;

  @IsString()
  @Field() // No need for nullable since it's required
  medicineLocalId: string;

  @IsString()
  @Field() // No need for nullable since it's required
  setReminder: string;

  @IsString()
  @Field() // No need for nullable since it's required
  time: string;
}