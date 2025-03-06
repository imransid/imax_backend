import { MiddlewareConsumer, Module } from "@nestjs/common";
import { MedicineController } from "./medicine.controller";
import { MedicineService } from "./medicine.service";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaService } from "../../../prisma/prisma.service"; //  prisma/prisma.service";
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from "@nestjs/apollo";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { MedicineResolvers } from "./medicine.resolver";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";
import { Upload } from "../../users/src/dto/user.dto";

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
  controllers: [MedicineController],
  providers: [
    MedicineService,
    ConfigService,
    JwtService,
    PrismaService,
    MedicineResolvers,
  ],
})
export class MedicineModule {}


// docker exec a614253ac07c npx prisma generate
// docker exec a614253ac07c npx prisma db push