import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { MedicineDto, MedicineSettingDto } from "./dto/user.dto";
import { PrismaService } from "../../../prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class MedicineService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configureService: ConfigService
  ) {}

  async setMedicineDetails(medicineDto : MedicineDto, context: any){
    try{

      const { medicineName, medicineStatus, doseTime, doseQuantity, takeStatus } = medicineDto


    const accessTokenWith = context.req.headers.authorization as string;

    const accessToken = accessTokenWith.split(' ')[1];

    const decoded = this.jwtService.verify(accessToken, {
      secret: this.configureService.get<string>('ACCESS_TOKEN_EXPIRE'),
    });

   await this.prisma.medicineDetails.create({
        data : {
          medicineName, medicineStatus, doseTime, doseQuantity, takeStatus,  userID: decoded.id,
        }
      });

    }catch(err){
      console.error("Error saving medicine details:", err);
      throw new BadRequestException("Failed to save medicine details.");
    }
  }


  async setMedicineInputSetting(medicineSettingDto : MedicineSettingDto, context: any){
    try{

      const { InstrucTion, medicineReminderCurrentStock, medicineReminderTotalReq, medicineReminderRemindToLeft, treatmentDurationEndTime, treatmentDurationStartTime, MedicineTakeEachDay } = medicineSettingDto


      const medicineDetailsId = context.req.body.variables.medicineDetailsID

    
      await this.prisma.medicineDetailsExtraSetting.create({
            data : {
              InstrucTion,
              medicineReminderCurrentStock, 
              medicineReminderTotalReq, 
              medicineReminderRemindToLeft, 
              treatmentDurationEndTime, 
              treatmentDurationStartTime,
              MedicineTakeEachDay,
              medicineDetailsId: parseInt(medicineDetailsId)
            }
          });

    }catch(err){
      console.error("Error saving medicine details: setting", err);
      throw new BadRequestException("Failed to save medicine details. setting");
    }
  }
  
}
