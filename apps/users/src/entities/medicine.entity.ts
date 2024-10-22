// medicine.entity.ts
import { ObjectType, Field, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Medicine {
  @Field() // This field will be exposed in the GraphQL schema
  id: number;

  @Field() // Expose medicineLocalId
  medicineLocalId: string;

  @Field() // Expose medicineName
  medicineName: string;

  @Field() // Expose medicineStatus
  medicineStatus: string;

  @Field() // Expose takeStatus
  takeStatus: string;

  @Field() // Expose doseQuantity
  doseQuantity: string;

  @Field() // Expose doseTime
  doseTime: string;

  @Field() // Expose strengthMed
  strengthMed: string;

  @Field() // Expose unitMed
  unitMed: string;

  @Field() // Expose typeMed
  typeMed: string;

  @Field() // Expose medicineId
  medicineId: string;

  @Field() // Expose createdDate
  createdDate: string;
}
