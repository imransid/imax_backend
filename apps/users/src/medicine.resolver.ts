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
import { CreateMedicineWeeklyListDto } from "./dto/create-weekly.dto";
import { CreateMedicineMonthlyListDto } from "./dto/create-monthly.dto";
import { CreateMedicineAppointmentDto, CreateMedicineDurationDto, CreateMedicineInstructionDto, CreateMedicineReminderDto } from "./dto/create-instruction.dto";
import { MedicineMonthlyListDto } from "./dto/get-monthly.dto";
import { MedicineWeeklyListDto } from "./dto/get-Weekly.dto";
import { DurationDto, GetAppointmentDto, InstructionDto, ReminderDto } from "./dto/get-other.dto";

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



  @Mutation(() => MedicineCreateResponse) // Specify the return type
   @UseGuards(AuthGuard)
  async createWeeklyMedicines(
    @Args('medicines', { type: () => [CreateMedicineWeeklyListDto] }) medicines: CreateMedicineWeeklyListDto[], 
    @Context() context: { req: any } 
  ): Promise<MedicineCreateResponse> {
    const response = new MedicineCreateResponse();
    const userId =  context.req.user.id; 
    try {
      const createdMedicines = await this.medicineService.createMedicinesWeekly(medicines, parseInt(userId));
  
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

    // get Weekly medicine

    @Query(() => [MedicineWeeklyListDto]) // Return type
    @UseGuards(AuthGuard)
    async getWeeklyMedicinesByUser( @Context() context: { req: any } ): Promise<MedicineWeeklyListDto[]> {
      const userId = context.req.user.id; 
      try {
        return await this.medicineService.findMedicinesWeeklyByUserId(parseInt(userId));
      } catch (error) {
        throw new Error(error.message); // Handle errors as needed
      }
    }


  @Mutation(() => MedicineCreateResponse) // Specify the return type
  @UseGuards(AuthGuard)
 async createMonthlyMedicines(
   @Args('medicines', { type: () => [CreateMedicineMonthlyListDto] }) medicines: CreateMedicineMonthlyListDto[], 
   @Context() context: { req: any } 
 ): Promise<MedicineCreateResponse> {
   const response = new MedicineCreateResponse();
   const userId =  context.req.user.id; 
   try {


     const createdMedicines = await this.medicineService.createMedicinesMonthly(medicines, parseInt(userId));
 
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

     // get Monthly medicine

     @Query(() => [MedicineMonthlyListDto]) // Return type
     @UseGuards(AuthGuard)
     async getMonthlyMedicinesByUser( @Context() context: { req: any } ): Promise<MedicineMonthlyListDto[]> {
       const userId = context.req.user.id; 
       try {
         return await this.medicineService.findMedicinesMonthlyByUserId(parseInt(userId));
       } catch (error) {
         throw new Error(error.message); // Handle errors as needed
       }
     }


 @Mutation(() => MedicineCreateResponse) // Specify the return type
 @UseGuards(AuthGuard)
async createInstructionMedicines(
  @Args('medicines', { type: () => [CreateMedicineInstructionDto] }) medicines: CreateMedicineInstructionDto[],  
  @Context() context: { req: any } 
): Promise<MedicineCreateResponse> {
  const response = new MedicineCreateResponse();
  const userId =  context.req.user.id; 
  try {

    const createdMedicines = await this.medicineService.createMedicinesInstruction(medicines, parseInt(userId));

    response.message = 'Medicines Instruction created successfully';
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

  // get Instruction medicine

  @Query(() => [InstructionDto]) // Return type
  @UseGuards(AuthGuard)
  async getInstructionMedicinesByUser( @Context() context: { req: any } ): Promise<InstructionDto[]> {
    const userId = context.req.user.id; 
    try {
      return await this.medicineService.findMedicinesInstructionByUserId(parseInt(userId));
    } catch (error) {
      throw new Error(error.message); // Handle errors as needed
    }
  }




@Mutation(() => MedicineCreateResponse) // Specify the return type
@UseGuards(AuthGuard)
async createReminderMedicines(
 @Args('medicines', { type: () => [CreateMedicineReminderDto] }) medicines: CreateMedicineReminderDto[],  
 @Context() context: { req: any } 
): Promise<MedicineCreateResponse> {
 const response = new MedicineCreateResponse();
 const userId =  context.req.user.id; 
 try {

   const createdMedicines = await this.medicineService.createMedicinesReminder(medicines, parseInt(userId));

   response.message = 'Medicines Reminder created successfully';
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

  // get Reminder medicine

  @Query(() => [ReminderDto]) // Return type
  @UseGuards(AuthGuard)
  async getReminderMedicinesByUser( @Context() context: { req: any } ): Promise<ReminderDto[]> {
    const userId = context.req.user.id; 
    try {
      return await this.medicineService.findMedicinesReminderByUserId(parseInt(userId));
    } catch (error) {
      throw new Error(error.message); // Handle errors as needed
    }
  }



@Mutation(() => MedicineCreateResponse) // Specify the return type
@UseGuards(AuthGuard)
async createDurationMedicines(
 @Args('medicines', { type: () => [CreateMedicineDurationDto] }) medicines: CreateMedicineDurationDto[],  
 @Context() context: { req: any } 
): Promise<MedicineCreateResponse> {
 const response = new MedicineCreateResponse();
 const userId =  context.req.user.id; 
 try {

   const createdMedicines = await this.medicineService.createMedicinesDuration(medicines, parseInt(userId));

   response.message = 'Medicines Reminder created successfully';
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

  // get Duration medicine

  @Query(() => [DurationDto]) // Return type
  @UseGuards(AuthGuard)
  async getDurationMedicinesByUser( @Context() context: { req: any } ): Promise<DurationDto[]> {
    const userId = context.req.user.id; 
    try {
      return await this.medicineService.findMedicinesDurationByUserId(parseInt(userId));
    } catch (error) {
      throw new Error(error.message); // Handle errors as needed
    }
  }


@Mutation(() => MedicineCreateResponse) // Specify the return type
@UseGuards(AuthGuard)
async createAppointmentMedicines(
 @Args('medicines', { type: () => [CreateMedicineAppointmentDto] }) medicines: CreateMedicineAppointmentDto[],  
 @Context() context: { req: any } 
): Promise<MedicineCreateResponse> {
 const response = new MedicineCreateResponse();
 const userId =  context.req.user.id; 
 try {

   const createdMedicines = await this.medicineService.createMedicinesReminder(medicines, parseInt(userId));

   response.message = 'Medicines Reminder created successfully';
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

  // get Appointment medicine

  @Query(() => [GetAppointmentDto]) // Return type
  @UseGuards(AuthGuard)
  async getAppointmentMedicinesByUser( @Context() context: { req: any } ): Promise<GetAppointmentDto[]> {
    const userId = context.req.user.id; 
    try {
      return await this.medicineService.findMedicinesAppointmentByUserId(parseInt(userId));
    } catch (error) {
      throw new Error(error.message); // Handle errors as needed
    }
  }


}