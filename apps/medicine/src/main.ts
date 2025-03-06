import { NestFactory } from "@nestjs/core";
import { MedicineModule } from './medicine.module';
import { graphqlUploadExpress } from "graphql-upload";


async function bootstrap() {
  const app = await NestFactory.create(MedicineModule);
  app.use(graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 10 })); // 100000000 byte = 100 MB
  await app.listen(4080);
}
bootstrap();
