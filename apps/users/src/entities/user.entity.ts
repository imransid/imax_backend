import { ObjectType, Field, Directive } from "@nestjs/graphql";

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
  gender: string;

  @Field()
  birthday: string;
}
