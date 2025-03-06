import { ObjectType, Field,Int } from "@nestjs/graphql";

@ObjectType()
export class MedicineData {
  @Field(()=> Int)
  id: number;

  @Field()
  manufacturer: string;

  @Field()
  brandName: string;

  @Field()
  dosageFromStrength: string;

  @Field()
  indication: string;

  @Field()
  sideEffects: string;

  @Field()
  dose: string;

  @Field()
  contraindication: string;
}
