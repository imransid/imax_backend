import { Args, Context, Mutation, Resolver, Query } from "@nestjs/graphql";
import { BadRequestException, UseFilters, UseGuards } from '@nestjs/common';
import { LoginResponse, MedicineResponse, RegisterResponse } from "./types/user.type";
import { RegisterDto, LoginDto, MedicineDto, MedicineSettingDto } from "./dto/user.dto";
import { Response } from "express";
import { MedicineDetails } from "./entities/user.entity";
import { AuthGuard } from './guards/auth.guards';
import { MedicineService } from "./medicine.service";


@Resolver("MedicineDetails")
export class medicineResolvers {
  constructor(private readonly medicineService: MedicineService) {}

  @Mutation(() => MedicineResponse)
  @UseGuards(AuthGuard)
  async medicineDetails(
    @Args("medicineInput") medicineDto: MedicineDto,
    @Context() context: { res: Response }
  ): Promise<MedicineResponse> {
    try {


        if(!medicineDto.medicineName && !medicineDto.medicineStatus && !medicineDto.doseTime && !medicineDto.takeStatus && !medicineDto.doseQuantity){
            throw new BadRequestException("Please fill the all fields");
        } 

        this.medicineService.setMedicineDetails(medicineDto, context)

        const message = "Medicine details successfully processed"; // Change this to whatever logic you implement

      return {
        message,
        error: null,
      };
    } catch (error) {
      return {
        message: "An error occurred while processing medicine details",
        error: {
          code: "MEDICINE_PROCESSING_ERROR",
          message: error.message || "Unknown error",
        },
      };
    }
  }

  @Mutation(() => MedicineResponse)
  @UseGuards(AuthGuard)
  async medicineDetailsSetting(
    @Args("medicineInputSetting") medicineSettingDto: MedicineSettingDto,
    @Context() context: { res: Response }
  ): Promise<MedicineResponse> {
    try {


        if(!medicineSettingDto.InstrucTion && !medicineSettingDto.MedicineTakeEachDay && !medicineSettingDto.medicineReminderCurrentStock && !medicineSettingDto.medicineReminderRemindToLeft && !medicineSettingDto.medicineReminderTotalReq && !medicineSettingDto.treatmentDurationEndTime && !medicineSettingDto.treatmentDurationStartTime){
            throw new BadRequestException("Please fill the all fields");
        } 

        this.medicineService.setMedicineInputSetting(medicineSettingDto, context)

        const message = "Medicine details successfully processed"; // Change this to whatever logic you implement

      return {
        message,
        error: null,
      };
    } catch (error) {
      return {
        message: "An error occurred while processing medicine details",
        error: {
          code: "MEDICINE_PROCESSING_ERROR",
          message: error.message || "Unknown error",
        },
      };
    }
  }


}