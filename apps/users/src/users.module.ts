import { MiddlewareConsumer, Module } from "@nestjs/common";
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
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";
import { Upload } from "./dto/user.dto";

@Module({
  imports: [
    Upload,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),

    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), "uploads"),
      serveRoot: "/uploads",
      serveStaticOptions: {
        extensions: ["jpg", "jpeg", "png", "gif"],
        index: false,
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
    medicineResolvers,
  ],
})
export class UsersModule {}
