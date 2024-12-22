import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicineService {
  getHello(): string {
    return 'Hello World!';
  }
}
