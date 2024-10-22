import { Args, Context, Mutation, Resolver, Query } from "@nestjs/graphql";
import { BadRequestException, UseFilters, UseGuards } from '@nestjs/common';
import { LoginResponse, MedicineCreateResponse, MedicineResponse, RegisterResponse } from "./types/user.type";
import { RegisterDto, LoginDto, MedicineDto, MedicineSettingDto, AppointmentDto, PrescriptionDto } from "./dto/user.dto";
import { Response } from "express";
import { MedicineDetails } from "./entities/user.entity";
import { AuthGuard } from './guards/auth.guards';
import { MedicineService } from "./medicine.service";
import { Medicine } from "./entities/medicine.entity";
import { CreateMedicineDto } from "./dto/create-medicine.dto";

// import { FileUpload, GraphQLUpload } from 'graphql-upload';


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

       // Call the service method and get the response
    const { message, medicineId } = await this.medicineService.setMedicineDetails(medicineDto, context);

    // Return response with medicineId
    return {
      message,
      medicineId : medicineId.toString(),  // Pass the medicineId to the client
      error: null,
    };
    } catch (error) {
      return {
        message: "An error occurred while processing medicine details",
        medicineId : "",
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
        medicineId: '',
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
  // @UseGuards(AuthGuard)
  async appointment(
    @Args("appointmentInput") appointmentDto: AppointmentDto,
    @Context() context: { res: Response }
  ): Promise<MedicineResponse> {
    try {
        if(!appointmentDto.date && !appointmentDto.doctorName && !appointmentDto.location && !appointmentDto.setReminder && !appointmentDto.time ){
            throw new BadRequestException("Please fill the all fields");
        } 

        console.log("okok")

        this.medicineService.setAppointment(appointmentDto, context)

        const message = "Appointment successfully processed"; // Change this to whatever logic you implement

      return {
        message,
        medicineId: '',
        error: null,
      };
    } catch (error) {
      return {
        message: "An error occurred while processing Appointment",
        error: {
          code: "MEDICINE_PROCESSING_ERROR",
          message: error.message || "Unknown error",
        },
      };
    }
  }


  @Mutation(() => MedicineResponse)
  @UseGuards(AuthGuard)
  async prescription(
    @Args("prescriptionInput") prescriptionDto: PrescriptionDto,
    @Context() context: { res: Response }
  ): Promise<MedicineResponse> {
    try {
      //   if(!prescriptionDto.date && !prescriptionDto.doctorName && !prescriptionDto.location && !prescriptionDto.setReminder && !prescriptionDto.time ){
      //       throw new BadRequestException("Please fill the all fields");
      //   } 
      this.medicineService.fileSaveDB(prescriptionDto)

      const message = "Prescription successfully processed."; // Change this to whatever logic you implement

      return {
        message,
        medicineId: '',
        error: null,
      };
    } catch (error) {
      return {
        message: "An error occurred while processing Appointment",
        error: {
          code: "MEDICINE_PROCESSING_ERROR",
          message: error.message || "Unknown error",
        },
      };
    }
  }


  @Mutation(() => MedicineCreateResponse) // Specify the return type
  @UseGuards(AuthGuard)
  async createMedicines(
    @Args('medicines', { type: () => [CreateMedicineDto] }) medicines: CreateMedicineDto[], 
    @Context() context: { req: any } 
  ): Promise<MedicineCreateResponse> {
    const response = new MedicineCreateResponse();
    const userId = context.req.user.id; 

    try {
      const createdMedicines = await this.medicineService.createMedicines(medicines, parseInt(userId));
  
      response.message = 'Medicines created successfully';
      response.medicine = createdMedicines;
      return response; // Ensure we return the response in the success case
    } catch (error) {
      response.message = 'Failed to create medicine entries';
      response.error = {
        message: error.message || 'An unknown error occurred', // Provide a message for the error
        code: error.code ?? 'INTERNAL_SERVER_ERROR' // Optionally provide a code
      };
    }
  }

  // get medicine

  @Query(() => [Medicine]) // Return type
  @UseGuards(AuthGuard)
  async getMedicinesByUser( @Context() context: { req: any } ): Promise<Medicine[]> {
    const userId = context.req.user.id; 
    try {
      return await this.medicineService.findMedicinesByUserId(parseInt(userId));
    } catch (error) {
      throw new Error(error.message); // Handle errors as needed
    }
  }

}