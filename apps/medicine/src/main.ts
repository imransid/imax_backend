import { NestFactory } from '@nestjs/core';
import { MedicineModule } from './medicine.module';

async function bootstrap() {
  const app = await NestFactory.create(MedicineModule);
  await app.listen(3000);
}
bootstrap();
