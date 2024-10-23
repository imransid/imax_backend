import { ObjectType, Field } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';


@ObjectType() // Change to ObjectType
export class InstructionDto {
    @Field(() => String)
    @IsString()
    instrucTion: string;

    @Field(() => String)
    @IsString()
    medicineLocalId: string;
}


@ObjectType() // Change to ObjectType
export class DurationDto {
    @Field(() => String)
    @IsString()
    medicineLocalId: string;

    @Field(() => String)
    @IsString()
    medicineTakeEachDay: string;

    @Field(() => String)
    @IsString()
    treatmentDurationEndTime: string;

    @Field(() => String)
    @IsString()
    treatmentDurationStartTime: string;
}

@ObjectType() // Change to ObjectType
export class GetAppointmentDto {
    @Field(() => String)
    @IsString()
    location: string;

    @Field(() => String)
    @IsString()
    medicineLocalId: string;

    @Field(() => String)
    @IsString()
    date: string;

    @Field(() => String)
    @IsString()
    doctorName: string;

    @Field(() => String)
    @IsString()
    setReminder: string;

    @Field(() => String)
    @IsString()
    time: string;
}





@ObjectType() // Change to ObjectType
export class ReminderDto {
    @Field(() => String)
    @IsString()
    medicineReminderTotalReq: string;

    @Field(() => String)
    @IsString()
    medicineReminderRemindToLeft: string;

    @Field(() => String)
    @IsString()
    medicineReminderCurrentStock: string;

    @Field(() => String)
    @IsString()
    medicineLocalId: string;
}