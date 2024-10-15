import { ObjectType, Field, Directive } from "@nestjs/graphql";
import { pathFinderMiddleware } from "middleware/pathFinderMiddleware";

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field()
  id: number;

  @Field()
  fullName: string;

  @Field()
  mobileNumber: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  gender: string;

  @Field() // Specify the scalar type for birthday
  birthday: string;

  @Field(() => [MedicineDetails], { nullable: true })
  medicines?: MedicineDetails[];
}

@ObjectType()
@Directive('@key(fields: "id")')
export class MedicineDetails {
  @Field()
  id: number;

  @Field(() => User)
  user: User;

  @Field()
  userID: number; // Foreign key to associate with User

  @Field()
  medicineName: string;

  @Field()
  medicineStatus: string;

  @Field()
  takeStatus: string;

  @Field()
  birthday: string;

  @Field()
  doseQuantity: string;

  @Field()
  doseTime: string;

  @Field(() => [MedicineDetailsExtraSetting], { nullable: true })
  MedicineDetailsExtraSetting?: MedicineDetailsExtraSetting[];
}

@ObjectType()
@Directive('@key(fields: "id")')
export class MedicineDetailsExtraSetting {
  @Field()
  id: number;

  @Field(() => MedicineDetails)
  MedicineDetails: MedicineDetails;

  @Field()
  medicineDetailsId: number; // Foreign key to associate with User

  @Field()
  InstrucTion: string;

  @Field()
  MedicineTakeEachDay: string;

  @Field()
  treatmentDurationStartTime: string;

  @Field()
  treatmentDurationEndTime: string;

  @Field()
  medicineReminderTotalReq: string;

  @Field()
  medicineReminderCurrentStock: string;

  @Field()
  medicineReminderRemindToLeft: string;

  @Field(() => [Appointment], { nullable: true })
  appointment?: Appointment[];

  @Field(() => [Prescription], { nullable: true })
  prescription?: Prescription[];
}

@ObjectType()
@Directive('@key(fields: "id")')
export class Appointment {
  @Field()
  id: number;

  @Field()
  date: string;

  @Field()
  time: string;

  @Field()
  doctorName: string;

  @Field()
  location: string;

  @Field()
  setReminder: string;

  @Field()
  MedicineDetailsExtraSettingID?: MedicineDetailsExtraSetting;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class Prescription {
  @Field()
  id: number;

  @Field({
    description: "Logo Image",
    middleware: [pathFinderMiddleware],
    nullable: true,
  })
  filePath: string;

  @Field()
  MedicineDetailsExtraSettingID?: MedicineDetailsExtraSetting;
}
