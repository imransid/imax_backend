import { Test, TestingModule } from '@nestjs/testing';
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';

describe('MedicineController', () => {
  let medicineController: MedicineController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MedicineController],
      providers: [MedicineService],
    }).compile();

    medicineController = app.get<MedicineController>(MedicineController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(medicineController.getHello()).toBe('Hello World!');
    });
  });
});
