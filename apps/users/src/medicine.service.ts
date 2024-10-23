  import { BadRequestException, Injectable } from "@nestjs/common";
  import { ConfigService } from "@nestjs/config";
  import { JwtService } from "@nestjs/jwt";
  import {
    AppointmentDto,
    MedicineDto,
    MedicineSettingDto,
    PrescriptionDto,
  } from "./dto/user.dto";
  import { PrismaService } from "../../../prisma/prisma.service";
  import { Response } from "express";
  import { Medicine } from "./entities/medicine.entity";
  import { CreateMedicineDto } from "./dto/create-medicine.dto";
import { MedicineMonthlyListDto } from "./dto/get-monthly.dto";

  @Injectable()
  export class MedicineService {
    constructor(
      private readonly jwtService: JwtService,
      private readonly prisma: PrismaService,
      private readonly configureService: ConfigService
    ) {}

    private uploadDir = process.env.UPLOAD_DIR;

    async setMedicineDetails(medicineDto: MedicineDto, context: any) {
      try {
        const {
          medicineName,
          medicineStatus,
          doseTime,
          doseQuantity,
          takeStatus,
        } = medicineDto;

        const accessTokenWith = context.req.headers.authorization as string;

        const accessToken = accessTokenWith.split(" ")[1];

        const decoded = this.jwtService.verify(accessToken, {
          secret: this.configureService.get<string>("ACCESS_TOKEN_EXPIRE"),
        });

        let response = await this.prisma.medicineDetails.create({
          data: {
            medicineName,
            medicineStatus,
            doseTime,
            doseQuantity,
            takeStatus,
            userID: decoded.id,
          },
        });

        return {
          message: "Medicine details saved successfully",
          medicineId: response.id,  // ID of the saved record
        };

      } catch (err) {
        console.error("Error saving medicine details:", err);
        throw new BadRequestException("Failed to save medicine details.");
      }
    }

    async setMedicineInputSetting(
      medicineSettingDto: MedicineSettingDto,
      context: any
    ) {
      try {
        const {
          InstrucTion,
          medicineReminderCurrentStock,
          medicineReminderTotalReq,
          medicineReminderRemindToLeft,
          treatmentDurationEndTime,
          treatmentDurationStartTime,
          MedicineTakeEachDay,
        } = medicineSettingDto;

        const medicineDetailsId = context.req.body.variables.medicineDetailsID;

        await this.prisma.medicineDetailsExtraSetting.create({
          data: {
            InstrucTion,
            medicineReminderCurrentStock,
            medicineReminderTotalReq,
            medicineReminderRemindToLeft,
            treatmentDurationEndTime,
            treatmentDurationStartTime,
            MedicineTakeEachDay,
            medicineDetailsId: parseInt(medicineDetailsId),
          },
        });
      } catch (err) {
        console.error("Error saving medicine details: setting", err);
        throw new BadRequestException("Failed to save medicine details. setting");
      }
    }

    async setAppointment(appointmentDto: AppointmentDto, context: any) {
      try {
        const { date, doctorName, time, location, setReminder } = appointmentDto;


        console.log('appointmentDto', appointmentDto, context.req.body)

        const medicineDetailsExtraId =
          context.req.body.variables.medicineDetailsExtraId !== null ? parseInt(context.req.body.variables.medicineDetailsExtraId) : 0 ;

        await this.prisma.appointment.create({
          data: {
            date,
            doctorName,
            time,
            location,
            setReminder,
            medicineDetailsExtraId,
          },
        });
      } catch (err) {
        console.error("Error saving Appointment", err);
        throw new BadRequestException("Failed to save Appointment");
      }
    }

    async setPrescription(appointmentDto: AppointmentDto, context: any) {
      try {
        const { date, doctorName, time, location, setReminder } = appointmentDto;

        const medicineDetailsExtraId =
          context.req.body.variables.medicineDetailsExtraId;

        await this.prisma.appointment.create({
          data: {
            date,
            doctorName,
            time,
            location,
            setReminder,
            medicineDetailsExtraId,
            // medicineDetailsId: parseInt(medicineDetailsId)
          },
        });
      } catch (err) {
        console.error("Error saving Appointment", err);
        throw new BadRequestException("Failed to save Appointment");
      }
    }

    async fileSaveDB(prescriptionDto: PrescriptionDto) {
      console.log("prescriptionDto", prescriptionDto);

      // let battalionInputData = {
      //   ...createBattalionInput,
      //   logoFilePath: null, // file upload field
      //   mapFilePath: null, // file upload field
      // };
      // const battalionData: Battalion = await this.prismaService.battalions.create(
      //   {
      //     data: { ...battalionInputData },
      //   }
      // );
      // const imageFile: any = await createBattalionInput.logoFilePath;
      // const fileName = `${Date.now()}_${imageFile.filename}`;
      // const uploadDir = join(
      //   this.uploadDir,
      //   `battalion_logo_${battalionData.id}`,
      //   "images"
      // );
      // const filePath = await uploadFileStream(
      //   imageFile.createReadStream,
      //   uploadDir,
      //   fileName
      // );
      // const imageMapFile: any = await createBattalionInput.mapFilePath;
      // const fileMapName = `${Date.now()}_${imageMapFile.filename}`;
      // const uploadMapDir = join(
      //   this.uploadDir,
      //   `battalion_map_${battalionData.id}`,
      //   "images"
      // );
      // const fileMapPath = await uploadFileStream(
      //   imageMapFile.createReadStream,
      //   uploadMapDir,
      //   fileMapName
      // );
      // battalionInputData = {
      //   ...battalionInputData,
      //   logoFilePath: await filePath,
      //   mapFilePath: await fileMapPath,
      // };
      // await this.prismaService.battalions.update({
      //   data: {
      //     ...battalionInputData,
      //   },
      //   where: {
      //     id: battalionData.id,
      //   },
      // });
      // battalionData.logoFilePath = battalionInputData.logoFilePath;
      // battalionData.mapFilePath = battalionInputData.mapFilePath;
      // return battalionData;
    }

    async createMedicines(medicines: CreateMedicineDto[], userId: number): Promise<string> {
      // Prepare data for batch insertion
      const medicineData : any = medicines.map(medicine => ({
        medicineLocalId: medicine.medicineLocalId,
        medicineName: medicine.medicineName ,
        medicineStatus: medicine.medicineStatus,
        takeStatus: medicine.takeStatus,
        doseQuantity: medicine.doseQuantity,
        doseTime: medicine.doseTime,
        strengthMed: medicine.strengthMed,
        unitMed: medicine.unitMed,
        typeMed: medicine.typeMed,
        medicineId: medicine.medicineId,
        createdDate: medicine.createdDate,
        userID: userId 
      }));

      try {

        await this.prisma.medicine.createMany({
          data: medicineData,
        });

        // Return the medicine data directly since createMany doesn't return created entries
        return  'Medicines created successfully';
      } catch (error) {
        console.error("Error creating medicines:", error);
        throw new BadRequestException('Failed to create medicine entries.');
      }
    }


    // get medicine
    async findMedicinesByUserId(userId: number): Promise<Medicine[]> {
      return this.prisma.medicine.findMany({
        where: { userID: userId },
      });
    }

    async createMedicinesWeekly(medicines: any, userId: number): Promise<string> {


      // // // Prepare data for batch insertion
      const medicineData : any = medicines.map(medicine => ({
        weeklyTime : medicine.medicineLocalId.weeklyTime,
        medicineLocalId : medicine.medicineLocalId.medicineLocalId,
        timeInterval : parseInt(medicine.medicineLocalId.timeInterval),
        userId: userId 
      }));

      try {

        await this.prisma.medicineWeekly.createMany({
          data: medicineData,
        });

        // Return the medicine data directly since createMany doesn't return created entries
        return  'Medicines Weekly created successfully';
      } catch (error) {
        console.error("Error creating medicines:", error);
        throw new BadRequestException('Failed to create medicine entries.');
      }
    }

      // get weekly
      async findMedicinesWeeklyByUserId(userId: number): Promise<any[]> {
        // Fetch the weekly medicines from the database for the given userId
        const weeklyMedicines = await this.prisma.medicineWeekly.findMany({
          where: { userId: userId },  // Fix the column name `userId` to match your schema
          select: {
            weeklyTime: true,
            timeInterval: true,
            medicineLocalId: true
          }
        });
      
        // Transform the data into the desired structure
        const formattedMedicines = weeklyMedicines.map(medicine => ({
          medicineLocalId: {
            weeklyTime: medicine.weeklyTime,
            timeInterval: medicine.timeInterval.toString(), // Convert timeInterval back to string
            medicineLocalId: medicine.medicineLocalId
          }
        }));
      
        return formattedMedicines; // Return the transformed data
      }

    async createMedicinesMonthly(medicines: any, userId: number): Promise<string> {
      // // // Prepare data for batch insertion
      const medicineData : any = medicines.map(medicine => ({
        Days : medicine.medicineLocalId.Days,
        medicineLocalId : medicine.medicineLocalId.medicineLocalId,
        eachOfDays : medicine.medicineLocalId.eachOfDays,
        userId: userId 
      }));

      try {

        await this.prisma.medicMonthly.createMany({
          data: medicineData,
        });

        // Return the medicine data directly since createMany doesn't return created entries
        return  'Medicines Weekly created successfully';
      } catch (error) {
        console.error("Error creating medicines:", error);
        throw new BadRequestException('Failed to create medicine entries.');
      }
    }

       // get monthly
    async findMedicinesMonthlyByUserId(userId: number): Promise<any> {
        const weeklyMedicines = await this.prisma.medicMonthly.findMany({
          where: { userId: userId },  // Fix the column name `userId` to match your schema
          select: {
            Days: true,
            eachOfDays: true,
            medicineLocalId: true
          }
        });
      
        // Transform the data into the desired structure
        const formattedMedicines = weeklyMedicines.map(medicine => ({
          medicineLocalId: {
            Days: medicine.Days,
            eachOfDays: medicine.eachOfDays, // Convert timeInterval back to string
            medicineLocalId: medicine.medicineLocalId
          }
        }));
      
        return formattedMedicines; // Return the transformed data
      }

    async createMedicinesInstruction(medicines: any, userId: number): Promise<string> {
      // // // Prepare data for batch insertion
      const medicineData : any = medicines.map(medicine => ({
        medicineLocalId : medicine.medicineLocalId,
        instrucTion : medicine.instrucTion,
        userId: userId 
      }));

      try {

        await this.prisma.medicInstruction.createMany({
          data: medicineData,
        });

        // Return the medicine data directly since createMany doesn't return created entries
        return  'Medicines Instruction created successfully';
      } catch (error) {
        console.error("Error creating medicines:", error);
        throw new BadRequestException('Failed to create medicine entries.');
      }
    }

 // get Instruction
async findMedicinesInstructionByUserId(userId: number): Promise<any[]> {
            return this.prisma.medicInstruction.findMany({
              where: { userId: userId },
            });
          }

    async createMedicinesReminder(medicines: any, userId: number): Promise<string> {
      // // // Prepare data for batch insertion
      const medicineData : any = medicines.map(medicine => ({
        medicineLocalId : medicine.medicineLocalId,
        medicineReminderCurrentStock : medicine.medicineReminderCurrentStock,
        medicineReminderRemindToLeft: medicine.medicineReminderRemindToLeft,
        medicineReminderTotalReq : medicine.medicineReminderTotalReq,
        userId: userId 
      }));

      try {

        await this.prisma.medicReminder.createMany({
          data: medicineData,
        });

        // Return the medicine data directly since createMany doesn't return created entries
        return  'Medicines Reminder created successfully';
      } catch (error) {
        console.error("Error creating medicines:", error);
        throw new BadRequestException('Failed to create medicine entries.');
      }
    }
 // get Reminder
 async findMedicinesReminderByUserId(userId: number): Promise<any[]> {
                return this.prisma.medicReminder.findMany({
                  where: { userId: userId },
                });
 }

    async createMedicinesDuration(medicines: any, userId: number): Promise<string> {
      // // // Prepare data for batch insertion
      const medicineData : any = medicines.map(medicine => ({
        medicineLocalId : medicine.medicineLocalId,
        medicineTakeEachDay : medicine.medicineTakeEachDay,
        treatmentDurationEndTime : medicine.treatmentDurationEndTime,
        treatmentDurationStartTime : medicine.treatmentDurationStartTime,
        userId: userId 
      }));

      try {

        await this.prisma.medicDuration.createMany({
          data: medicineData,
        });

        // Return the medicine data directly since createMany doesn't return created entries
        return  'Medicines Duration created successfully';
      } catch (error) {
        console.error("Error creating medicines:", error);
        throw new BadRequestException('Failed to create medicine entries.');
      }
    }

     // get Duration
 async findMedicinesDurationByUserId(userId: number): Promise<any[]> {
  return this.prisma.medicDuration.findMany({
    where: { userId: userId },
  });
}



    async createMedicinesAppointment(medicines: any, userId: number): Promise<string> {
      // // // Prepare data for batch insertion
      const medicineData : any = medicines.map(medicine => ({
        medicineLocalId : medicine.medicineLocalId,
        location : medicine.location,
        time : medicine.time,
        date : medicine.date,
        doctorName : medicine.doctorName,
        setReminder : medicine.setReminder,
        userId: userId 
      }));

      try {

        await this.prisma.medicAppointment.createMany({
          data: medicineData,
        });

        // Return the medicine data directly since createMany doesn't return created entries
        return  'Medicines Appointment created successfully';
      } catch (error) {
        console.error("Error creating medicines:", error);
        throw new BadRequestException('Failed to create medicine entries.');
      }
    }

         // get Appointment
 async findMedicinesAppointmentByUserId(userId: number): Promise<any[]> {
  return this.prisma.medicAppointment.findMany({
    where: { userId: userId },
  });
}

    // async createMedicinesReminder(medicines: any, userId: number): Promise<string> {
    //   // // // Prepare data for batch insertion
    //   const medicineData : any = medicines.map(medicine => ({
    //     medicineLocalId : medicine.medicineLocalId,
    //     instrucTion : medicine.instrucTion,
    //     userId: userId 
    //   }));

    //   try {

    //     await this.prisma.medicInstruction.createMany({
    //       data: medicineData,
    //     });

    //     // Return the medicine data directly since createMany doesn't return created entries
    //     return  'Medicines Instruction created successfully';
    //   } catch (error) {
    //     console.error("Error creating medicines:", error);
    //     throw new BadRequestException('Failed to create medicine entries.');
    //   }
    // }


  }
