import { Controller, Get } from '@nestjs/common';
import { MedicineService } from './medicine.service';

@Controller()
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @Get()
  getHello(): string {
    return this.medicineService.getHello();
  }
}
