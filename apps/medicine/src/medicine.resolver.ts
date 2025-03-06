import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { BadRequestException } from "@nestjs/common";
import { MedicineData } from "./medic.entity";
import { MedicineService } from "./medicine.service";

@Resolver("MedicineDetails")
export class MedicineResolvers {
  constructor(private readonly medicineService: MedicineService) {}

  @Mutation(() => MedicineData)
  async getMedicineData(
    @Args("id") id: number // Get the id argument
  ): Promise<MedicineData> {
    try {
      // Call the service to fetch the medicine data by ID
      const medicineData = await this.medicineService.findById(id);

      if (!medicineData) {
        throw new BadRequestException("Medicine data not found");
      }

      return medicineData;
    } catch (error) {
      throw new BadRequestException(
        "An error occurred while processing medicine details"
      );
    }
  }

  @Mutation(() => [MedicineData])
  async customSeed(): Promise<MedicineData[]> {
    try {
      // Call the service to fetch the medicine data by ID
      const medicineData = await this.medicineService.customSeed();

      return medicineData;
    } catch (error) {
      throw new BadRequestException(
        "An error occurred while processing medicine details"
      );
    }
  }
}
