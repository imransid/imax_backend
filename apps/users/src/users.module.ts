import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaService } from "../../../prisma/prisma.service"; //  prisma/prisma.service";
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from "@nestjs/apollo";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { usersResolvers } from "./user.resolver";
import { medicineResolvers } from "./medicine.resolver";
import { MedicineService } from "./medicine.service";
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    MedicineService,
    ConfigService,
    JwtService,
    PrismaService,
    usersResolvers,
    medicineResolvers
  ],
})
export class UsersModule {}
