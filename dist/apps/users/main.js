/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/users/src/dto/create-medicine.dto.ts":
/*!***************************************************!*\
  !*** ./apps/users/src/dto/create-medicine.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMedicineDto = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let CreateMedicineDto = class CreateMedicineDto {
};
exports.CreateMedicineDto = CreateMedicineDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "medicineLocalId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateMedicineDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "medicineName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "medicineStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "takeStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "doseQuantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "doseTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "strengthMed", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "unitMed", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "typeMed", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "medicineId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicineDto.prototype, "createdDate", void 0);
exports.CreateMedicineDto = CreateMedicineDto = __decorate([
    (0, graphql_1.InputType)()
], CreateMedicineDto);


/***/ }),

/***/ "./apps/users/src/dto/update-profile.dto.ts":
/*!**************************************************!*\
  !*** ./apps/users/src/dto/update-profile.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProfileDto = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let UpdateProfileDto = class UpdateProfileDto {
};
exports.UpdateProfileDto = UpdateProfileDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMobilePhone)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "mobileNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "birthday", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "password", void 0);
exports.UpdateProfileDto = UpdateProfileDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateProfileDto);


/***/ }),

/***/ "./apps/users/src/dto/user.dto.ts":
/*!****************************************!*\
  !*** ./apps/users/src/dto/user.dto.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrescriptionDto = exports.AppointmentDto = exports.MedicineSettingDto = exports.MedicineDto = exports.LoginDto = exports.RegisterDto = exports.Upload = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const graphql_2 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const graphql_upload_1 = __webpack_require__(/*! graphql-upload */ "graphql-upload");
let Upload = class Upload {
    constructor() {
        this.description = "Upload files";
    }
    parseValue(value) {
        return graphql_upload_1.GraphQLUpload.parseValue(value);
    }
    serialize(value) {
        return graphql_upload_1.GraphQLUpload.serialize(value);
    }
    parseLiteral(ast) {
        return graphql_upload_1.GraphQLUpload.parseLiteral(ast, ast.value);
    }
};
exports.Upload = Upload;
exports.Upload = Upload = __decorate([
    (0, graphql_2.Scalar)("Upload")
], Upload);
let RegisterDto = class RegisterDto {
};
exports.RegisterDto = RegisterDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Name is required" }),
    (0, class_validator_1.IsString)({ message: "Name must need to be one string." }),
    __metadata("design:type", String)
], RegisterDto.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is required" }),
    (0, class_validator_1.IsEmail)({}, { message: "Email." }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({
        message: "Mobile Number is required.",
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "mobileNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({
        message: "Password is required.",
    }),
    (0, class_validator_1.MinLength)(8, { message: "Password must be 8 characters. " }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({
        message: "Gender is required.",
    }),
    (0, class_validator_1.IsEmail)({}, { message: "Gender is invalid. " }),
    __metadata("design:type", String)
], RegisterDto.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({
        message: "Birthday is required.",
    }),
    (0, class_validator_1.IsEmail)({}, { message: "Birthday is invalid. " }),
    __metadata("design:type", String)
], RegisterDto.prototype, "birthday", void 0);
exports.RegisterDto = RegisterDto = __decorate([
    (0, graphql_1.InputType)()
], RegisterDto);
let LoginDto = class LoginDto {
};
exports.LoginDto = LoginDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({
        message: "Mobile Number is required.",
    }),
    __metadata("design:type", String)
], LoginDto.prototype, "mobileNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({
        message: "Password is required.",
    }),
    (0, class_validator_1.MinLength)(8, { message: "Password must be 8 characters. " }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto = __decorate([
    (0, graphql_1.InputType)()
], LoginDto);
let MedicineDto = class MedicineDto {
};
exports.MedicineDto = MedicineDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineDto.prototype, "medicineName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineDto.prototype, "medicineStatus", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineDto.prototype, "takeStatus", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineDto.prototype, "doseQuantity", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineDto.prototype, "doseTime", void 0);
exports.MedicineDto = MedicineDto = __decorate([
    (0, graphql_1.InputType)()
], MedicineDto);
let MedicineSettingDto = class MedicineSettingDto {
};
exports.MedicineSettingDto = MedicineSettingDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineSettingDto.prototype, "InstrucTion", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineSettingDto.prototype, "MedicineTakeEachDay", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineSettingDto.prototype, "treatmentDurationStartTime", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineSettingDto.prototype, "treatmentDurationEndTime", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineSettingDto.prototype, "medicineReminderTotalReq", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineSettingDto.prototype, "medicineReminderCurrentStock", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicineSettingDto.prototype, "medicineReminderRemindToLeft", void 0);
exports.MedicineSettingDto = MedicineSettingDto = __decorate([
    (0, graphql_1.InputType)()
], MedicineSettingDto);
let AppointmentDto = class AppointmentDto {
};
exports.AppointmentDto = AppointmentDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "doctorName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppointmentDto.prototype, "setReminder", void 0);
exports.AppointmentDto = AppointmentDto = __decorate([
    (0, graphql_1.InputType)()
], AppointmentDto);
let PrescriptionDto = class PrescriptionDto {
};
exports.PrescriptionDto = PrescriptionDto;
__decorate([
    (0, graphql_1.Field)(() => Upload, { description: "Input for the slider image files." }),
    __metadata("design:type", Upload)
], PrescriptionDto.prototype, "filePath", void 0);
exports.PrescriptionDto = PrescriptionDto = __decorate([
    (0, graphql_1.InputType)()
], PrescriptionDto);


/***/ }),

/***/ "./apps/users/src/entities/medicine.entity.ts":
/*!****************************************************!*\
  !*** ./apps/users/src/entities/medicine.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Medicine = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let Medicine = class Medicine {
};
exports.Medicine = Medicine;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Medicine.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "medicineLocalId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "medicineName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "medicineStatus", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "takeStatus", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "doseQuantity", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "doseTime", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "strengthMed", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "unitMed", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "typeMed", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "medicineId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Medicine.prototype, "createdDate", void 0);
exports.Medicine = Medicine = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@key(fields: "id")')
], Medicine);


/***/ }),

/***/ "./apps/users/src/entities/user.entity.ts":
/*!************************************************!*\
  !*** ./apps/users/src/entities/user.entity.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Prescription = exports.Appointment = exports.MedicineDetailsExtraSetting = exports.MedicineDetails = exports.User = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const pathFinderMiddleware_1 = __webpack_require__(/*! middleware/pathFinderMiddleware */ "./middleware/pathFinderMiddleware.ts");
let User = class User {
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "mobileNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MedicineDetails], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "medicines", void 0);
exports.User = User = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@key(fields: "id")')
], User);
let MedicineDetails = class MedicineDetails {
};
exports.MedicineDetails = MedicineDetails;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], MedicineDetails.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => User),
    __metadata("design:type", User)
], MedicineDetails.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], MedicineDetails.prototype, "userID", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetails.prototype, "medicineName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetails.prototype, "medicineStatus", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetails.prototype, "takeStatus", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetails.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetails.prototype, "doseQuantity", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetails.prototype, "doseTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MedicineDetailsExtraSetting], { nullable: true }),
    __metadata("design:type", Array)
], MedicineDetails.prototype, "MedicineDetailsExtraSetting", void 0);
exports.MedicineDetails = MedicineDetails = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@key(fields: "id")')
], MedicineDetails);
let MedicineDetailsExtraSetting = class MedicineDetailsExtraSetting {
};
exports.MedicineDetailsExtraSetting = MedicineDetailsExtraSetting;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], MedicineDetailsExtraSetting.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => MedicineDetails),
    __metadata("design:type", MedicineDetails)
], MedicineDetailsExtraSetting.prototype, "MedicineDetails", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], MedicineDetailsExtraSetting.prototype, "medicineDetailsId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetailsExtraSetting.prototype, "InstrucTion", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetailsExtraSetting.prototype, "MedicineTakeEachDay", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetailsExtraSetting.prototype, "treatmentDurationStartTime", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetailsExtraSetting.prototype, "treatmentDurationEndTime", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetailsExtraSetting.prototype, "medicineReminderTotalReq", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetailsExtraSetting.prototype, "medicineReminderCurrentStock", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineDetailsExtraSetting.prototype, "medicineReminderRemindToLeft", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Appointment], { nullable: true }),
    __metadata("design:type", Array)
], MedicineDetailsExtraSetting.prototype, "appointment", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Prescription], { nullable: true }),
    __metadata("design:type", Array)
], MedicineDetailsExtraSetting.prototype, "prescription", void 0);
exports.MedicineDetailsExtraSetting = MedicineDetailsExtraSetting = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@key(fields: "id")')
], MedicineDetailsExtraSetting);
let Appointment = class Appointment {
};
exports.Appointment = Appointment;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Appointment.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Appointment.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Appointment.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Appointment.prototype, "doctorName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Appointment.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Appointment.prototype, "setReminder", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", MedicineDetailsExtraSetting)
], Appointment.prototype, "MedicineDetailsExtraSettingID", void 0);
exports.Appointment = Appointment = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@key(fields: "id")')
], Appointment);
let Prescription = class Prescription {
};
exports.Prescription = Prescription;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Prescription.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({
        description: "Logo Image",
        middleware: [pathFinderMiddleware_1.pathFinderMiddleware],
        nullable: true,
    }),
    __metadata("design:type", String)
], Prescription.prototype, "filePath", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", MedicineDetailsExtraSetting)
], Prescription.prototype, "MedicineDetailsExtraSettingID", void 0);
exports.Prescription = Prescription = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@key(fields: "id")')
], Prescription);


/***/ }),

/***/ "./apps/users/src/guards/auth.guards.ts":
/*!**********************************************!*\
  !*** ./apps/users/src/guards/auth.guards.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const prisma_service_1 = __webpack_require__(/*! ../../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AuthGuard = class AuthGuard {
    constructor(jwtService, prismaService, configService) {
        this.jwtService = jwtService;
        this.prismaService = prismaService;
        this.configService = configService;
    }
    async canActivate(context) {
        const gplContext = graphql_1.GqlExecutionContext.create(context);
        const { req } = gplContext.getContext();
        const accessTokenWith = req.headers.authorization;
        const accessToken = accessTokenWith.split(' ')[1];
        if (!accessToken) {
            throw new common_1.UnauthorizedException('Please login to access this resource.!');
        }
        if (accessToken) {
            const decoded = this.jwtService.verify(accessToken, {
                secret: this.configService.get('ACCESS_TOKEN_EXPIRE'),
            });
            if (!decoded) {
                throw new common_1.UnauthorizedException('Invalid access token');
            }
            await this.updateAccessToken(req, decoded, accessToken);
        }
        return true;
    }
    async updateAccessToken(req, decoded, token) {
        try {
            const user = await this.prismaService.user.findUnique({
                where: {
                    id: decoded.id,
                },
            });
            req.accesstoken = token;
            req.user = user;
        }
        catch (error) { }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthGuard);


/***/ }),

/***/ "./apps/users/src/medicine.resolver.ts":
/*!*********************************************!*\
  !*** ./apps/users/src/medicine.resolver.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.medicineResolvers = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_type_1 = __webpack_require__(/*! ./types/user.type */ "./apps/users/src/types/user.type.ts");
const user_dto_1 = __webpack_require__(/*! ./dto/user.dto */ "./apps/users/src/dto/user.dto.ts");
const auth_guards_1 = __webpack_require__(/*! ./guards/auth.guards */ "./apps/users/src/guards/auth.guards.ts");
const medicine_service_1 = __webpack_require__(/*! ./medicine.service */ "./apps/users/src/medicine.service.ts");
const medicine_entity_1 = __webpack_require__(/*! ./entities/medicine.entity */ "./apps/users/src/entities/medicine.entity.ts");
const create_medicine_dto_1 = __webpack_require__(/*! ./dto/create-medicine.dto */ "./apps/users/src/dto/create-medicine.dto.ts");
let medicineResolvers = class medicineResolvers {
    constructor(medicineService) {
        this.medicineService = medicineService;
    }
    async medicineDetails(medicineDto, context) {
        try {
            if (!medicineDto.medicineName && !medicineDto.medicineStatus && !medicineDto.doseTime && !medicineDto.takeStatus && !medicineDto.doseQuantity) {
                throw new common_1.BadRequestException("Please fill the all fields");
            }
            const { message, medicineId } = await this.medicineService.setMedicineDetails(medicineDto, context);
            return {
                message,
                medicineId: medicineId.toString(),
                error: null,
            };
        }
        catch (error) {
            return {
                message: "An error occurred while processing medicine details",
                medicineId: "",
                error: {
                    code: "MEDICINE_PROCESSING_ERROR",
                    message: error.message || "Unknown error",
                },
            };
        }
    }
    async medicineDetailsSetting(medicineSettingDto, context) {
        try {
            if (!medicineSettingDto.InstrucTion && !medicineSettingDto.MedicineTakeEachDay && !medicineSettingDto.medicineReminderCurrentStock && !medicineSettingDto.medicineReminderRemindToLeft && !medicineSettingDto.medicineReminderTotalReq && !medicineSettingDto.treatmentDurationEndTime && !medicineSettingDto.treatmentDurationStartTime) {
                throw new common_1.BadRequestException("Please fill the all fields");
            }
            this.medicineService.setMedicineInputSetting(medicineSettingDto, context);
            const message = "Medicine details successfully processed";
            return {
                message,
                medicineId: '',
                error: null,
            };
        }
        catch (error) {
            return {
                message: "An error occurred while processing medicine details",
                error: {
                    code: "MEDICINE_PROCESSING_ERROR",
                    message: error.message || "Unknown error",
                },
            };
        }
    }
    async appointment(appointmentDto, context) {
        try {
            if (!appointmentDto.date && !appointmentDto.doctorName && !appointmentDto.location && !appointmentDto.setReminder && !appointmentDto.time) {
                throw new common_1.BadRequestException("Please fill the all fields");
            }
            console.log("okok");
            this.medicineService.setAppointment(appointmentDto, context);
            const message = "Appointment successfully processed";
            return {
                message,
                medicineId: '',
                error: null,
            };
        }
        catch (error) {
            return {
                message: "An error occurred while processing Appointment",
                error: {
                    code: "MEDICINE_PROCESSING_ERROR",
                    message: error.message || "Unknown error",
                },
            };
        }
    }
    async prescription(prescriptionDto, context) {
        try {
            this.medicineService.fileSaveDB(prescriptionDto);
            const message = "Prescription successfully processed.";
            return {
                message,
                medicineId: '',
                error: null,
            };
        }
        catch (error) {
            return {
                message: "An error occurred while processing Appointment",
                error: {
                    code: "MEDICINE_PROCESSING_ERROR",
                    message: error.message || "Unknown error",
                },
            };
        }
    }
    async createMedicines(medicines, context) {
        const response = new user_type_1.MedicineCreateResponse();
        const userId = context.req.user.id;
        try {
            const createdMedicines = await this.medicineService.createMedicines(medicines, parseInt(userId));
            response.message = 'Medicines created successfully';
            response.medicine = createdMedicines;
            return response;
        }
        catch (error) {
            response.message = 'Failed to create medicine entries';
            response.error = {
                message: error.message || 'An unknown error occurred',
                code: error.code ?? 'INTERNAL_SERVER_ERROR'
            };
        }
    }
    async getMedicinesByUser(context) {
        const userId = context.req.user.id;
        try {
            return await this.medicineService.findMedicinesByUserId(parseInt(userId));
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.medicineResolvers = medicineResolvers;
__decorate([
    (0, graphql_1.Mutation)(() => user_type_1.MedicineResponse),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __param(0, (0, graphql_1.Args)("medicineInput")),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_dto_1.MedicineDto !== "undefined" && user_dto_1.MedicineDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], medicineResolvers.prototype, "medicineDetails", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_type_1.MedicineResponse),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __param(0, (0, graphql_1.Args)("medicineInputSetting")),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_dto_1.MedicineSettingDto !== "undefined" && user_dto_1.MedicineSettingDto) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], medicineResolvers.prototype, "medicineDetailsSetting", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_type_1.MedicineResponse),
    __param(0, (0, graphql_1.Args)("appointmentInput")),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof user_dto_1.AppointmentDto !== "undefined" && user_dto_1.AppointmentDto) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], medicineResolvers.prototype, "appointment", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_type_1.MedicineResponse),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __param(0, (0, graphql_1.Args)("prescriptionInput")),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof user_dto_1.PrescriptionDto !== "undefined" && user_dto_1.PrescriptionDto) === "function" ? _h : Object, Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], medicineResolvers.prototype, "prescription", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_type_1.MedicineCreateResponse),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('medicines', { type: () => [create_medicine_dto_1.CreateMedicineDto] })),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], medicineResolvers.prototype, "createMedicines", null);
__decorate([
    (0, graphql_1.Query)(() => [medicine_entity_1.Medicine]),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], medicineResolvers.prototype, "getMedicinesByUser", null);
exports.medicineResolvers = medicineResolvers = __decorate([
    (0, graphql_1.Resolver)("MedicineDetails"),
    __metadata("design:paramtypes", [typeof (_a = typeof medicine_service_1.MedicineService !== "undefined" && medicine_service_1.MedicineService) === "function" ? _a : Object])
], medicineResolvers);


/***/ }),

/***/ "./apps/users/src/medicine.service.ts":
/*!********************************************!*\
  !*** ./apps/users/src/medicine.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicineService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
let MedicineService = class MedicineService {
    constructor(jwtService, prisma, configureService) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.configureService = configureService;
        this.uploadDir = process.env.UPLOAD_DIR;
    }
    async setMedicineDetails(medicineDto, context) {
        try {
            const { medicineName, medicineStatus, doseTime, doseQuantity, takeStatus, } = medicineDto;
            const accessTokenWith = context.req.headers.authorization;
            const accessToken = accessTokenWith.split(" ")[1];
            const decoded = this.jwtService.verify(accessToken, {
                secret: this.configureService.get("ACCESS_TOKEN_EXPIRE"),
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
                medicineId: response.id,
            };
        }
        catch (err) {
            console.error("Error saving medicine details:", err);
            throw new common_1.BadRequestException("Failed to save medicine details.");
        }
    }
    async setMedicineInputSetting(medicineSettingDto, context) {
        try {
            const { InstrucTion, medicineReminderCurrentStock, medicineReminderTotalReq, medicineReminderRemindToLeft, treatmentDurationEndTime, treatmentDurationStartTime, MedicineTakeEachDay, } = medicineSettingDto;
            console.log('medicineSettingDto', medicineSettingDto);
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
        }
        catch (err) {
            console.error("Error saving medicine details: setting", err);
            throw new common_1.BadRequestException("Failed to save medicine details. setting");
        }
    }
    async setAppointment(appointmentDto, context) {
        try {
            const { date, doctorName, time, location, setReminder } = appointmentDto;
            console.log('appointmentDto', appointmentDto, context.req.body);
            const medicineDetailsExtraId = context.req.body.variables.medicineDetailsExtraId !== null ? parseInt(context.req.body.variables.medicineDetailsExtraId) : 0;
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
        }
        catch (err) {
            console.error("Error saving Appointment", err);
            throw new common_1.BadRequestException("Failed to save Appointment");
        }
    }
    async setPrescription(appointmentDto, context) {
        try {
            const { date, doctorName, time, location, setReminder } = appointmentDto;
            const medicineDetailsExtraId = context.req.body.variables.medicineDetailsExtraId;
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
        }
        catch (err) {
            console.error("Error saving Appointment", err);
            throw new common_1.BadRequestException("Failed to save Appointment");
        }
    }
    async fileSaveDB(prescriptionDto) {
        console.log("prescriptionDto", prescriptionDto);
    }
    async createMedicines(medicines, userId) {
        const medicineData = medicines.map(medicine => ({
            medicineLocalId: medicine.medicineLocalId,
            medicineName: medicine.medicineName,
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
            return 'Medicines created successfully';
        }
        catch (error) {
            console.error("Error creating medicines:", error);
            throw new common_1.BadRequestException('Failed to create medicine entries.');
        }
    }
    async findMedicinesByUserId(userId) {
        return this.prisma.medicine.findMany({
            where: { userID: userId },
        });
    }
};
exports.MedicineService = MedicineService;
exports.MedicineService = MedicineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], MedicineService);


/***/ }),

/***/ "./apps/users/src/types/user.type.ts":
/*!*******************************************!*\
  !*** ./apps/users/src/types/user.type.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginResponse = exports.MedicineCreateResponse = exports.MedicineResponse = exports.RegisterResponse = exports._ErrorType = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/users/src/entities/user.entity.ts");
let _ErrorType = class _ErrorType {
};
exports._ErrorType = _ErrorType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], _ErrorType.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], _ErrorType.prototype, "code", void 0);
exports._ErrorType = _ErrorType = __decorate([
    (0, graphql_1.ObjectType)()
], _ErrorType);
let RegisterResponse = class RegisterResponse {
};
exports.RegisterResponse = RegisterResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterResponse.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => _ErrorType, { nullable: true }),
    __metadata("design:type", _ErrorType)
], RegisterResponse.prototype, "error", void 0);
exports.RegisterResponse = RegisterResponse = __decorate([
    (0, graphql_1.ObjectType)()
], RegisterResponse);
let MedicineResponse = class MedicineResponse {
};
exports.MedicineResponse = MedicineResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineResponse.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineResponse.prototype, "medicineId", void 0);
__decorate([
    (0, graphql_1.Field)(() => _ErrorType, { nullable: true }),
    __metadata("design:type", _ErrorType)
], MedicineResponse.prototype, "error", void 0);
exports.MedicineResponse = MedicineResponse = __decorate([
    (0, graphql_1.ObjectType)()
], MedicineResponse);
let MedicineCreateResponse = class MedicineCreateResponse {
};
exports.MedicineCreateResponse = MedicineCreateResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineCreateResponse.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineCreateResponse.prototype, "medicine", void 0);
__decorate([
    (0, graphql_1.Field)(() => _ErrorType, { nullable: true }),
    __metadata("design:type", _ErrorType)
], MedicineCreateResponse.prototype, "error", void 0);
exports.MedicineCreateResponse = MedicineCreateResponse = __decorate([
    (0, graphql_1.ObjectType)()
], MedicineCreateResponse);
let LoginResponse = class LoginResponse {
};
exports.LoginResponse = LoginResponse;
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], LoginResponse.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => _ErrorType, { nullable: true }),
    __metadata("design:type", _ErrorType)
], LoginResponse.prototype, "error", void 0);
exports.LoginResponse = LoginResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoginResponse);


/***/ }),

/***/ "./apps/users/src/user.resolver.ts":
/*!*****************************************!*\
  !*** ./apps/users/src/user.resolver.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usersResolvers = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/users/src/users.service.ts");
const user_type_1 = __webpack_require__(/*! ./types/user.type */ "./apps/users/src/types/user.type.ts");
const user_dto_1 = __webpack_require__(/*! ./dto/user.dto */ "./apps/users/src/dto/user.dto.ts");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./apps/users/src/entities/user.entity.ts");
const auth_guards_1 = __webpack_require__(/*! ./guards/auth.guards */ "./apps/users/src/guards/auth.guards.ts");
const update_profile_dto_1 = __webpack_require__(/*! ./dto/update-profile.dto */ "./apps/users/src/dto/update-profile.dto.ts");
let usersResolvers = class usersResolvers {
    constructor(userService) {
        this.userService = userService;
    }
    async register(registerDto, context) {
        if (!registerDto.fullName || !registerDto.email || !registerDto.password) {
            throw new common_1.BadRequestException("Please fill the all fields");
        }
        const user = await this.userService.register(registerDto, context.res);
        return user;
    }
    async login(mobileNumber, password) {
        try {
            let res = await this.userService.login(mobileNumber, password);
            return res;
        }
        catch (error) {
            console.error("Login error:", error);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async updateProfile(updateProfileDto, context) {
        const userId = context.req.user.id;
        return this.userService.updateProfile(userId, updateProfileDto);
    }
    async getUser(context) {
        return await this.userService.getUsers(context.req);
    }
};
exports.usersResolvers = usersResolvers;
__decorate([
    (0, graphql_1.Mutation)(() => user_type_1.RegisterResponse),
    __param(0, (0, graphql_1.Args)("registerInput")),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_dto_1.RegisterDto !== "undefined" && user_dto_1.RegisterDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], usersResolvers.prototype, "register", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_type_1.LoginResponse),
    __param(0, (0, graphql_1.Args)('mobileNumber')),
    __param(1, (0, graphql_1.Args)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], usersResolvers.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __param(0, (0, graphql_1.Args)("updateProfileInput")),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof update_profile_dto_1.UpdateProfileDto !== "undefined" && update_profile_dto_1.UpdateProfileDto) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], usersResolvers.prototype, "updateProfile", null);
__decorate([
    (0, graphql_1.Query)(() => [user_entity_1.User]),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], usersResolvers.prototype, "getUser", null);
exports.usersResolvers = usersResolvers = __decorate([
    (0, graphql_1.Resolver)("User"),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], usersResolvers);


/***/ }),

/***/ "./apps/users/src/users.controller.ts":
/*!********************************************!*\
  !*** ./apps/users/src/users.controller.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/users/src/users.service.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
};
exports.UsersController = UsersController;
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),

/***/ "./apps/users/src/users.module.ts":
/*!****************************************!*\
  !*** ./apps/users/src/users.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/users/src/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/users/src/users.service.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
const apollo_1 = __webpack_require__(/*! @nestjs/apollo */ "@nestjs/apollo");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const user_resolver_1 = __webpack_require__(/*! ./user.resolver */ "./apps/users/src/user.resolver.ts");
const medicine_resolver_1 = __webpack_require__(/*! ./medicine.resolver */ "./apps/users/src/medicine.resolver.ts");
const medicine_service_1 = __webpack_require__(/*! ./medicine.service */ "./apps/users/src/medicine.service.ts");
const path_1 = __webpack_require__(/*! path */ "path");
const serve_static_1 = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
const user_dto_1 = __webpack_require__(/*! ./dto/user.dto */ "./apps/users/src/dto/user.dto.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_dto_1.Upload,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloFederationDriver,
                autoSchemaFile: {
                    federation: 2,
                },
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(process.cwd(), "uploads"),
                serveRoot: "/uploads",
                serveStaticOptions: {
                    extensions: ["jpg", "jpeg", "png", "gif"],
                    index: false,
                },
            }),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UsersService,
            medicine_service_1.MedicineService,
            config_1.ConfigService,
            jwt_1.JwtService,
            prisma_service_1.PrismaService,
            user_resolver_1.usersResolvers,
            medicine_resolver_1.medicineResolvers,
        ],
    })
], UsersModule);


/***/ }),

/***/ "./apps/users/src/users.service.ts":
/*!*****************************************!*\
  !*** ./apps/users/src/users.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const sendToken_1 = __webpack_require__(/*! ./utils/sendToken */ "./apps/users/src/utils/sendToken.ts");
let UsersService = class UsersService {
    constructor(jwtService, prisma, configureService) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.configureService = configureService;
    }
    async register(registerDto, response) {
        const { fullName, email, password, mobileNumber, gender, birthday } = registerDto;
        const isPhoneNumberExits = await this.prisma.user.findUnique({
            where: {
                mobileNumber,
            },
        });
        if (isPhoneNumberExits) {
            throw new common_1.BadRequestException("User already exits with this Phone Number!");
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await this.prisma.user.create({
            data: {
                fullName,
                email,
                password: hashPassword,
                mobileNumber,
                gender,
                birthday,
            },
        });
        return {
            message: 'User registered successfully',
        };
    }
    async login(mobileNumber, password) {
        const user = await this.prisma.user.findUnique({
            where: {
                mobileNumber,
            },
        });
        if (user && await this.comparePassword(password, user.password)) {
            const tokeSender = new sendToken_1.TokenSender(this.configureService, this.jwtService);
            return tokeSender.sendToken(user);
        }
        else {
            return {
                user: null,
                accessToken: null,
                error: {
                    message: 'Invalid email or password.',
                },
            };
        }
    }
    async comparePassword(password, hashed) {
        return await bcrypt.compare(password, hashed);
    }
    async getUsers(req) {
        return this.prisma.user.findMany();
    }
    async updateProfile(userId, updateProfileDto) {
        const { password, ...updateData } = updateProfileDto;
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            Object.assign(updateData, { password: hashedPassword });
        }
        const user = await this.prisma.user.update({
            where: { id: parseInt(userId, 10) },
            data: updateData,
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], UsersService);


/***/ }),

/***/ "./apps/users/src/utils/sendToken.ts":
/*!*******************************************!*\
  !*** ./apps/users/src/utils/sendToken.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenSender = void 0;
class TokenSender {
    constructor(config, jwt) {
        this.config = config;
        this.jwt = jwt;
    }
    sendToken(user) {
        const accessToken = this.jwt.sign({
            id: user.id
        }, {
            secret: this.config.get('ACCESS_TOKEN_EXPIRE')
        });
        console.log('user, accessToken', user, accessToken);
        return { user, accessToken };
    }
}
exports.TokenSender = TokenSender;


/***/ }),

/***/ "./middleware/pathFinderMiddleware.ts":
/*!********************************************!*\
  !*** ./middleware/pathFinderMiddleware.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pathFinderMiddleware = void 0;
const pathFinderMiddleware = async (ctx, next) => {
    let filePath = await next();
    return `${process.env.BASE_URL}/${filePath}`;
};
exports.pathFinderMiddleware = pathFinderMiddleware;


/***/ }),

/***/ "./prisma/prisma.service.ts":
/*!**********************************!*\
  !*** ./prisma/prisma.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),

/***/ "@nestjs/apollo":
/*!*********************************!*\
  !*** external "@nestjs/apollo" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "graphql-upload":
/*!*********************************!*\
  !*** external "graphql-upload" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("graphql-upload");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./apps/users/src/main.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const users_module_1 = __webpack_require__(/*! ./users.module */ "./apps/users/src/users.module.ts");
const graphql_upload_1 = __webpack_require__(/*! graphql-upload */ "graphql-upload");
async function bootstrap() {
    const app = await core_1.NestFactory.create(users_module_1.UsersModule);
    app.use((0, graphql_upload_1.graphqlUploadExpress)({ maxFileSize: 100000000, maxFiles: 10 }));
    await app.listen(4001);
}
bootstrap();

})();

/******/ })()
;