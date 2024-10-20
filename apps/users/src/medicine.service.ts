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


      console.log('medicineSettingDto', medicineSettingDto)

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
}
