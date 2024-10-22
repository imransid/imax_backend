import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";
import { Medicine } from "../entities/medicine.entity";

@ObjectType()
export class _ErrorType {
  @Field()
  message: string;

  @Field({ nullable: true })
  code?: string;
}

@ObjectType()
export class RegisterResponse {
  @Field()
  message: string;

  @Field(() => _ErrorType, { nullable: true })
  error?: _ErrorType;
}


@ObjectType()
export class MedicineResponse {

  @Field()
  message: string;

  @Field()
  medicineId?: string;

  @Field(() => _ErrorType, { nullable: true })
  error?: _ErrorType;
}


@ObjectType()
export class MedicineCreateResponse {

  @Field()
  message: string;

  @Field()
  medicine?: string;

  @Field(() => _ErrorType, { nullable: true })
  error?: _ErrorType;

}



@ObjectType()
export class LoginResponse {
  @Field(() => User)
  user: User;

  @Field()
  accessToken: string;

  @Field(() => _ErrorType, { nullable: true })
  error?: _ErrorType;
}
