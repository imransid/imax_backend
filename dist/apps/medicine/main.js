/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/medicine/src/medic.entity.ts":
/*!*******************************************!*\
  !*** ./apps/medicine/src/medic.entity.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicineData = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let MedicineData = class MedicineData {
};
exports.MedicineData = MedicineData;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], MedicineData.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineData.prototype, "manufacturer", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineData.prototype, "brandName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineData.prototype, "dosageFromStrength", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineData.prototype, "indication", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineData.prototype, "sideEffects", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineData.prototype, "dose", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicineData.prototype, "contraindication", void 0);
exports.MedicineData = MedicineData = __decorate([
    (0, graphql_1.ObjectType)()
], MedicineData);


/***/ }),

/***/ "./apps/medicine/src/medicine.controller.ts":
/*!**************************************************!*\
  !*** ./apps/medicine/src/medicine.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicineController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const medicine_service_1 = __webpack_require__(/*! ./medicine.service */ "./apps/medicine/src/medicine.service.ts");
let MedicineController = class MedicineController {
    constructor(medicineService) {
        this.medicineService = medicineService;
    }
    getHello() {
        return null;
    }
};
exports.MedicineController = MedicineController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], MedicineController.prototype, "getHello", null);
exports.MedicineController = MedicineController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof medicine_service_1.MedicineService !== "undefined" && medicine_service_1.MedicineService) === "function" ? _a : Object])
], MedicineController);


/***/ }),

/***/ "./apps/medicine/src/medicine.module.ts":
/*!**********************************************!*\
  !*** ./apps/medicine/src/medicine.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicineModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const medicine_controller_1 = __webpack_require__(/*! ./medicine.controller */ "./apps/medicine/src/medicine.controller.ts");
const medicine_service_1 = __webpack_require__(/*! ./medicine.service */ "./apps/medicine/src/medicine.service.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
const apollo_1 = __webpack_require__(/*! @nestjs/apollo */ "@nestjs/apollo");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const medicine_resolver_1 = __webpack_require__(/*! ./medicine.resolver */ "./apps/medicine/src/medicine.resolver.ts");
const path_1 = __webpack_require__(/*! path */ "path");
const serve_static_1 = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
const user_dto_1 = __webpack_require__(/*! ../../users/src/dto/user.dto */ "./apps/users/src/dto/user.dto.ts");
let MedicineModule = class MedicineModule {
};
exports.MedicineModule = MedicineModule;
exports.MedicineModule = MedicineModule = __decorate([
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
        controllers: [medicine_controller_1.MedicineController],
        providers: [
            medicine_service_1.MedicineService,
            config_1.ConfigService,
            jwt_1.JwtService,
            prisma_service_1.PrismaService,
            medicine_resolver_1.MedicineResolvers,
        ],
    })
], MedicineModule);


/***/ }),

/***/ "./apps/medicine/src/medicine.resolver.ts":
/*!************************************************!*\
  !*** ./apps/medicine/src/medicine.resolver.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicineResolvers = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const medic_entity_1 = __webpack_require__(/*! ./medic.entity */ "./apps/medicine/src/medic.entity.ts");
const medicine_service_1 = __webpack_require__(/*! ./medicine.service */ "./apps/medicine/src/medicine.service.ts");
let MedicineResolvers = class MedicineResolvers {
    constructor(medicineService) {
        this.medicineService = medicineService;
    }
    async getMedicineData(id) {
        try {
            const medicineData = await this.medicineService.findById(id);
            if (!medicineData) {
                throw new common_1.BadRequestException("Medicine data not found");
            }
            return medicineData;
        }
        catch (error) {
            throw new common_1.BadRequestException("An error occurred while processing medicine details");
        }
    }
    async customSeed() {
        try {
            const medicineData = await this.medicineService.customSeed();
            return medicineData;
        }
        catch (error) {
            throw new common_1.BadRequestException("An error occurred while processing medicine details");
        }
    }
};
exports.MedicineResolvers = MedicineResolvers;
__decorate([
    (0, graphql_1.Mutation)(() => medic_entity_1.MedicineData),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], MedicineResolvers.prototype, "getMedicineData", null);
__decorate([
    (0, graphql_1.Mutation)(() => [medic_entity_1.MedicineData]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], MedicineResolvers.prototype, "customSeed", null);
exports.MedicineResolvers = MedicineResolvers = __decorate([
    (0, graphql_1.Resolver)("MedicineDetails"),
    __metadata("design:paramtypes", [typeof (_a = typeof medicine_service_1.MedicineService !== "undefined" && medicine_service_1.MedicineService) === "function" ? _a : Object])
], MedicineResolvers);


/***/ }),

/***/ "./apps/medicine/src/medicine.service.ts":
/*!***********************************************!*\
  !*** ./apps/medicine/src/medicine.service.ts ***!
  \***********************************************/
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
exports.MedicineService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
let MedicineService = class MedicineService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        try {
            const medicine = await this.prisma.medicineData.findUnique({
                where: { id },
            });
            if (!medicine) {
                throw new common_2.BadRequestException("Medicine not found");
            }
            return medicine;
        }
        catch (error) {
            throw new common_2.BadRequestException("Error fetching medicine data");
        }
    }
    async customSeed() {
        const medicine_Data = [
            {
                id: 1,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Bilasi ",
                dosageFromStrength: "20mg Tablet and 60ml Syrup",
                indication: "Bilasi is indicated for the symptomatic treatment of-\nAllergic rhino conjunctivitis (seasonal and perennial) and Urticaria. Bilasi is also used to relieve the symptoms of hay fever (sneezing, itchy, runny, blocked-nose and red and watery eyes).",
                dose: "Adults & adolescents (12 years of age and over): 20 mg tablet once daily for symptomatic relief of allergic rhinitis, urticaria and allergic rhinoconjunctivitis. The maximum recommended daily dose is 20 mg Bilastine (1 tablet) and should not be exceeded. If a dose is missed, the next scheduled dose should be taken. An extra dose should not be taken. 20 mg Bilastine tablet (1 tablet) once daily should be swallowed with water on an empty stomach to achieve optimal exposure to Bilastine.\n\nChildren between 6 to 11 years: 10 mg mouth dissolving tablet for the symptomatic relief of allergic rhinitis, allergic rhinoconjunctivitis and urticaria. The Mouth dissolving tablet is for oral use only. It should be placed in the mouth. It will disperse rapidly in saliva and can be easily swallowed. Alternatively, the mouth dissolving tablet can be dispersed in a tea spoon of water before being swallowed by the children. The maximum recommended daily dose for children in between 6 to 11 years is 10 mg Bilastine mouth dissolving tablet (1 tablet) and should not be exceeded. If a dose is missed, the next scheduled dose should be taken. An extra dose should not be taken.\n\nChildren between 2 to 11 years: 4 ml once daily",
                sideEffects: "The most commonly reported side effects in clinical trial are headache, dizziness, somnolence and fatigue. These adverse events occurred with a comparable frequency in patients receiving placebo.",
                contraindication: "Bilastine is contraindicated in patients with hypersensitivity to the active substance or to any of the excipients of the tablet.",
            },
            {
                id: 2,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Ceftem ",
                dosageFromStrength: "200mg & 400mg Capsule and 50ml & DS PFS",
                indication: "Ceftem is an orally active cephalosporin antibiotic which has marked in-vitro bactericidal activity against a wide variety of Gram-positive and Gram-negative organism. It is indicated for the treatment of the following acute infections when caused by susceptible microorganisms.\n\nUpper Respiratory Tract Infections (URTI): e.g. otitis media; and other URTI where the causative organism is known or suspected to be resistant to other commonly used antibiotics, or where treatment failure may carry significant risk. Lower Respiratory Tract Infections-e.g. bronchitis.\n\nUrinary Tract Infections: e.g. cystitis, cystourethritis, pyelonephritis. Clinical efficacy has been demonstrated in infections caused by commonly occurring pathogens including Streptococcus pneumonia, Streptococcus pyogenes, Escherichia coli, Proteus mirabilis, Klebsiella species, Haemophilus influenzae (beta-lactamase positive and negative), Moraxella catarrhalis (beta-lactamase positive and negative) and Enterobacter species. Ceftem is highly stable in the presence of beta-lactamase enzymes.",
                dose: "Absorption of Cefixime is not significantly modified by the presence of food. The usual course of treatment is 7 days. This may be continued for up to 14 days if required.\n\nAdults and children over 10 years: The recommended adult dosage is 200-400 mg daily according to the severity of the infection, given either as a single dose or in two divided doses.\n\nElderly: Elderly patients may be given the same dose as recommended for adults. Renal function should be assessed and dosage should be adjusted in severe renal impairment.\n\nChildren: The recommended dosage for children is 8 mg\/kg\/day administered as a single dose or in two divided doses. As a general guide for prescribing in children the following daily doses in terms of volume of suspension are suggested:\n6 months up to 1 year: 3.75 ml daily\nChildren 1-4 years: 5 ml daily\nChildren 5-10 years: 10 ml daily\nIn typhoid: the recommended children dose is 5 mg\/kg body weight twice daily for 10-14 days.\n\nChildren weighing more than 50 kg or older than 10 years: Should be treated with the recommended adult dose 200-400 mg daily depending on the severity of infection.\n\nChildren aged less than 6 months: The safety and efficacy of Cefixime has not been established in children aged less than 6 months.\n\nDosage in Renal Impairment: Cefixime may be administered in the presence of impaired renal function. Normal dose and schedule may be given in patients with creatinine clearances of 20 ml\/min or greater. In patients whose creatinine clearance is less than 20 ml\/min, it is recommended that a dose of 200 mg once daily should not be exceeded. The dose and regimen for patients who are maintained on chronic ambulatory peritoneal dialysis or haemodialysis should follow the same recommendation as that for patients with creatinine clearances of less than 20 ml\/min.",
                sideEffects: "Ceftem is generally well tolerated. The majority of adverse reactions observed in clinical trials were mild and self limiting in nature. Gastrointestinal disturbances: The most frequent side-effects seen with Ceftem are diarrhoea and stool changes; diarrhoea has been more commonly associated with higher doses. Other gastrointestinal side-effects seen less frequently are nausea, abdominal pain, dyspepsia, vomiting and flatulence. Pseudomembraneous colitis has been reported. Central nervous system: headache and dizziness. Hypersensitivity reactions: allergies in the form of rash, pruritis, urticaria, drug fever and arthralgia have been observed. These reactions usually subsided upon discontinuation of therapy. Hematological and clinical chemistry: thrombocytopenia, leukopenia and eosinophilia have been reported. These reactions were infrequent and reversible. Mild transient change in liver and renal function tests have been observed. Miscellaneous: other possible reactions include genital pruritis and vaginitis.",
                contraindication: "Patients with known hypersensitivity to cephalosporin antibiotics.",
            },
            {
                id: 3,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Cefurav Plus",
                dosageFromStrength: " 250mg & 500mg Tablet and 70ml PFS & DS PFS",
                indication: "Cefurav Plus is indicated for the treatment of infections caused by sensitive bacteria.\nPharyngitis\/Tonsillitis caused by Streptococcus pyogenes.\nAcute Bacterial Otitis Media caused by Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis (beta-lactamase producing strains) or Streptococcus pyogenes.\nAcute bacterial maxillary sinusitis caused by Streptococcus pneumoniae or Haemophilus influenzae (non beta-lactamase producing strains)\nLower respiratory tract infections including pneumoniae, caused by Streptococcus pneumoniae, Haemophilus influenzae (including beta lactamase-producing strains), Klebsiella spp., Staphylococcus aureus (penicillinase- and non-penicillinase-producing strains), Streptococcus pyogenes, E. coli.\nAcute bacterial exacerbation of chronic bronchitis and secondary bacterial infections of Acute bronchitis caused by Streptococcus pneumoniae, Haemophilus influenzae (beta-lactamase negative strains) or Haemophilus parainfluenzae (beta-lactamase negative strains).\nUncomplicated skin and skin-structure infections caused by Staphylococcus aureus (including beta-lactamase producing strains) or Streptococcus pyogenes.\nUncomplicated urinary tract infections caused by E.coli or Klebsiella pneumoniae.\nBone and Joint Infections caused by Staphylococcus aureus (penicillinase- and non-penicillinase-producing strains).\nUncomplicated Gonorrhoea caused by penicillinase-producing and non-penicillinase producing strains of Neisseria gonorrhoeae.\nEarly Lyme Disease (erythema migrans) caused by Borrelia burgdorferi.\nSepticemia caused by Staphylococcus aureus, Streptococcus pneumoniae, E.coli, Haemophilus influenzae (including ampicillin-resistant strains) & Klebsiella spp.\nMeningitis caused by Streptococcus pneumoniae, Haemophilus influenzae (including ampicillin-resistant strains), Neisseria meningitidis & Staphylococcus aureus (penicillinase and non-penicillinase producing strains)\nSwitch therapy (Injectable to oral)",
                dose: "Adolescents and adults (13 years and older)-\nPharyngitis\/tonsillitis: 250 mg b.i.d. for 5-10 days\nAcute bacterial maxillary sinusitis: 250 mg b.i.d. for 10 days\nAcute bacterial exacerbation of chronic bronchitis: 250-500 mg b.i.d. for 10 days\nSecondary bacterial infections of acute bronchitis: 250-500 mg b.i.d. for 5-10 days \nUncomplicated skin and skin structure infections: 250-500 mg b.i.d. for 10 days\nUncomplicated urinary tract infections: 250 mg b.i.d. for 7-10 days\nUncomplicated Gonorrhoea: 1000 mg b.i.d. Single dose\nCommunity acquired pneumonia: 250-500 mg b.i.d. for 5-10 days\nMDR Typhoid Fever: 500 mg b.i.d. for 10-14 days\nEarly Lyme disease: 500 mg b.i.d. for 20 days\nPaediatric Patients (3 months to 12 years)-\nPharyngitis\/Tonsillitis: 20 mg\/kg\/day b.i.d for 5-10 days\nAcute otitis media: 30 mg\/kg\/day b.i.d for 10 days\nAcute bacterial maxillary sinusitis: 30 mg\/kg\/day b.i.d for 10 days\nImpetigo: 30 mg\/kg\/day b.i.d for 10 days\nCefuroxime-Clavulanic Acid tablet may be taken without regard of food.",
                sideEffects: "Generally Cefuroxime-Clavulanic Acid is well tolerated. However, a few side effects like nausea, vomiting, diarrhea, abdominal discomfort or pain may occur. As with other broad-spectrum antibiotics, prolonged administration of Cefuroxime and Clavulanic acid combination may result in overgrowth of nonsusceptible microorganisms. Rarely (<0.2%) renal dysfunction, anaphylaxis, angioedema, pruritis, rash and serum sickness like urticaria may appear.",
                contraindication: "Cefuroxime-Clavulanic Acid is contraindicated in patients with known allergy to cephalosporin & in patients with Pseudomembranous Colitis.",
            },
            {
                id: 4,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Corasis-D & Corasis-Dx",
                dosageFromStrength: "500 mg+200 IU & 600 mg+400 IU Tablet",
                indication: "Corasis-D tablet is indicated for the treatment & prevention of- Osteoporosis, Osteomalacia, Tetany, Hypoparathyroidism, Disorders of osteogenesis. Corasis-D tablet also used as supplement in case of inadequate intake of calcium in childhood diet, rickets, pregnancy & lactation, elderly patients. Other indications include pancreatitis, phosphate binder in chronic renal failure etc.",
                dose: "One tablet once or twice daily with plenty of water or as directed by the physician. Taking in full stomach ensures better absorption. Dissolve 1 effervescent tablet in a glass of water to drink orally. Stir the solution with spoon before drinking. Taking in full stomach ensures better absorption.",
                sideEffects: "Orally administered Calcium Carbonate may be irritating to the GI tract. It may also cause constipation. Hypercalcemia is rarely produced by administration of Calcium alone but may occur when large doses are given to patients with chronic renal failure. Also there may be allergic reactions, irregular heartbeats, nausea, vomiting, decreased appetite dry mouth and drowsiness. Following administration of Vitamin D Supplements occasion skin rash has been reported.",
                contraindication: "",
            },
            {
                id: 5,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Emlozin ",
                dosageFromStrength: "10mg & 25mg Tablet",
                indication: "Emlozin is indicated in: As an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus.\nTo reduce the risk of cardiovascular death in adult patients with type 2 diabetes mellitus and established cardiovascular disease.",
                dose: "The recommended dose of Empagliflozin is 10 mg once daily, taken in the morning, with or without food. In patients tolerating Empagliflozin, the dose may be increased to 25 mg once daily. In patients with volume depletion, correcting this condition prior to initiation of Empagliflozin is recommended.",
                sideEffects: "The most common adverse reactions associated with Emlozin are urinary tract infections and female genital mycotic infections. Others common side effects includes dehydration, hypotension, weakness, dizziness and increased thirstiness.",
                contraindication: "Empagliflozin is contraindicated in patients with history of serious hypersensitivity reaction to Empagliflozin or any of its ingredients, severe renal impairment, end-stage renal disease, or dialysis.",
            },
            {
                id: 6,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Emlozin M",
                dosageFromStrength: "5 mg+500 mg Tablet",
                indication: "Emlozin M tablet is indicated for the treatment of adults with type 2 diabetes mellitus as an adjunct to diet and exercise:\nIn patients insufficiently controlled on their maximally tolerated dose of Metformin alone. In combination with other medicinal products for the treatment of diabetes, in patients insufficiently controlled with Metformin and these medicinal products. In patients already being treated with the combination of Empagliflozin and Metformin as separate tablets.",
                dose: "The dosage should be individualized based on effectiveness and tolerability. Take this combination twice daily with meals. dose escalation should be gradual to reduce the gastrointestinal side effects due to Metformin Hydrochloride. Maximum recommended daily dose of Metformin Hydrochloride is 2000 mg and Empagliflozin is 25 mg.\nRecommended individualized starting dose:\nIn patients on Metformin Hydrochloride, switch to this combination containing Empagliflozin 5 mg with a similar total daily dose of Metformin Hydrochloride.\nIn patients on Empagliflozin, switch to this combination containing Metformin Hydrochloride 500 mg with a similar total daily dose of Empagliflozin.\nIn patients already treated with Empagliflozin and Metformin Hydrochloride separately switch to this combination containing the same total daily doses of each component.\nIn patients with volume depletion not previously treated with Empagliflozin, correct this condition before initiating this combination. Extended-release formulations: Individualize starting dose based on the patient’s current drug regimen. Take film coated tablet twice daily with meal and extended-release formulations should be taken once daily with meal, with gradual dose escalation to reduce the Gl adverse effects due to Metformin. Adjust dosing based on effectiveness and tolerability while not exceeding the maximum recommended daily dose of Metformin Hydrochloride 2000 mg and Empagliflozin 25 mg. Renal impaired patient: Assess renal function before initiating this combination. In patients with an eGFR below 45 mL\/min\/1.73 m2 is contraindicated. Pediatric patients under 18 years of age: Safety and effectiveness in pediatric patients under 18 years of age have not been established.",
                sideEffects: "Most common adverse reactions associated with Empagliflozin (5% or greater incidence) were urinary tract infection and female genital mycotic infections. Most common adverse reactions associated with Metformin (>5%) are diarrhea, nausea\/vomiting, flatulence, abdominal discomfort, indigestion, asthenia, and headache. The following important adverse reactions are given below:\nVery common: Hypoglycemia (when used with sulphonylurea or insulin), Gastrointestinal symptoms\nCommon: Vaginal moniliasis, vulvovaginitis, balanitis and other genital infection. Urinary tract infection (including pyelonephritis and urosepsis), thirst, taste disturbance, pruritus (generalised), rash, Increased urination, serum lipids increased\nUncommon: Volume depletion, urticaria, dysuria, blood creatinine increased\/Glomerular filtration rate decreased, Haematocrit increased\nRare: Diabetic ketoacidosis.",
                contraindication: "Hypersensitivity to Empagliflozin and Metformin. Any type of acute metabolic acidosis (such as lactic acidosis, diabetic ketoacidosis). Diabetic pre-coma. Severe renal failure (GFR <30 ml\/min). Acute conditions with the potential to alter renal function such as: dehydration, severe infection, shock. Disease which may cause tissue hypoxia (especially acute disease, or worsening of chronic disease) such as: decompensated heart failure, respiratory failure, recent myocardial infarction, shock. Hepatic impairment, acute alcohol intoxication, alcoholism",
            },
            {
                id: 7,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Gaviplus",
                dosageFromStrength: " 200ml Suspension",
                indication: "Gaviplus is indicated in-. Gastric reflux. Heartburn. Indigestion. Flatulence associated with gastric reflux. Heartburn of pregnancy. All cases of epigastric and retrosternal distress where the underlying cause is gastric reflux.",
                dose: "For oral suspension:\nAdult and children over 12 years:10-20 mL after meals and at bedtime, up to four times a day.\nChildren 6 to 12 years: 5-10 mL after meals and at bedtime, up to four times a day.\nChildren under 6 years: Not recommended.\nElderly: No dose modifications necessary.\nChewable Tablet should be taken in oral route after being thoroughly chewed. Recommended dose:\nAdults and children 12 years and over: Take two to four tablets after meals and at bedtime, up to four times a day.\nChildren under 12 years: Tablets should be given only on medical advice.\n\nHepatic Impairment: No dose modification necessary.\nRenal Insufficiency: Caution if highly restricted salt diet is necessary.",
                sideEffects: "In addition to the desired effect of the drug, some side effects may appear such as: constipation, flatulence, stomach cramp or belching. In these cases consult a physician. If too big dose has been taken, there might appear a sensation of swelling. In this case, it is advisable to consult a physician.",
                contraindication: "This product is contraindicated in patients with known or suspected hypersensitivity to the active ingredients or to any of the excipients.",
            },
            {
                id: 8,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Gerdnil ",
                dosageFromStrength: "30mg & 60mg Capsule",
                indication: "In addition to the desired effect of the drug, some side effects may appear such as: constipation, flatulence, stomach cramp or belching. In these cases consult a physician. If too big dose has been taken, there might appear a sensation of swelling. In this case, it is advisable to consult a physician.",
                dose: "Dexlansoprazole dosing recommendations-\nMaintenance of Healed erosive esophagitis and relief of heartburn: 30 mg Once daily\nSymptomatic Non-Erosive GERD: 30 mg Once daily for 4 weeks\nHealing of erosive esophagitis: 60 mg Once daily for up to 8 weeks\nDexlansoprazole MUPS dosing recommendations-\nMaintenance of healed erosive esophagitis and relief of heartburn: One 30 mg tablet once daily for 6 months in adults and 16 weeks in patients 12 to 17 years of age\nSymptomatic Non-Erosive GERD: One 30 mg tablet once daily for 4 weeks",
                sideEffects: "Common side effects: Diarrhea, abdominal pain, nausea, vomiting & flatulence.",
                contraindication: "Dexlansoprazole is contraindicated in patients with known hypersensitivity to any component of the formulation.",
            },
            {
                id: 9,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Laxpru ",
                dosageFromStrength: "1mg Tablet",
                indication: "Laxpru tablet is indicated for symptomatic treatment of chronic constipation in adults in whom laxatives fail to provide adequate relief.",
                dose: "Adults: 2 mg once daily with or without food, at any time of the day. Due to the specific mode of action of prucalopride (stimulation of propulsive motility), exceeding the daily dose of 2 mg is not expected to increase efficacy.\n\nOlder people: Start with 1 mg once daily; if needed the dose can be increased to 2 mg once daily.\n\nChildren: Prucalopride should not be used in children and adolescents younger than 18 year",
                sideEffects: "The most frequently reported adverse reactions associated with Laxpru therapy are headache (17.8%) and gastrointestinal symptoms (abdominal pain), nausea and diarrhoea. The adverse reactions occur predominantly at the start of therapy and usually disappear within a few days with continued treatment. Other adverse reactions have been reported occasionally. The majority of adverse events were mild to moderate in intensity.",
                contraindication: "Prucalopride is contraindicated in those people who are hypersensitive to the active substance or to any of the excipients and people with renal impairment requiring dialysis.",
            },
            {
                id: 10,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Linlid ",
                dosageFromStrength: "400mg & 600mg Tablet and 100ml PFS",
                indication: "Linlid is indicated for the treatment of:\nNosocomial pneumonia\nCommunity-acquired pneumonia\nComplicated skin and skin structure infection including diabetic foot infections, without concomitant osteomyelitis\nUncomplicated skin and skin structure infections\nVancomycin-resistant Enterococcus faecium infections\nLimitations of use: Linlid is not indicated for the treatment of Gram-negative infections. The safety and efficacy of Linlid given for longer than 28 days have not been evaluated in controlled clinical trials.",
                dose: "dose is too lage !",
                sideEffects: "Most of the adverse events reported with Linlid were mild to moderate in intensity. The most common adverse events in patients treated with Linlid were diarrhea, headache and nausea. Other adverse events includes oral moniliasis, vaginal moniliasis, hypertension, dyspepsia, localized abdominal pain, pruritus, and tongue discoloration.",
                contraindication: "Linezolid formulations are contraindicated for using in patients who have known hypersensitivity to Linezolid or any of the other product components. Linezolid should not be used in patients taking any medicinal product which inhibits monoamine oxidases A or B (e.g. Phenelzine, Isocarboxazid) or within two weeks of taking any such medicinal product. Linezolid should not be administered to patients with uncontrolled hypertension, pheochromocytoma, thyrotoxicosis, carcinoid syndrome and\/or patients taking directly and indirectly acting sympathomimetic agents (e.g. Pseudoephedrine), vasopressive agents (e.g. Epinephrine, Norepinephrine), dopaminergic agents (e.g. Dopamine, Dobutamine), serotonin re-uptake inhibitors, tricyclic antidepressants, serotonin 5-HT1 receptor agonists (triptans), meperidine or buspirone.",
            },
            {
                id: 11,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Lulif ",
                dosageFromStrength: "10gm Cream",
                indication: "Lulif cream is indicated for the topical treatment of interdigital tinea pedis, tinea cruris and tinea corporis caused by the organisms Trichophyton rubrum and Epidermophyton floccosum.",
                dose: "Adult & Geriatric:\nInterdigital tinea pedis: Luliconazole cream should be applied to the affected area and approximately 1 inch of the immediate surrounding area(s) once daily for two weeks.\nTinea cruris and Tinea corporis: Luliconazole cream should be applied to the affected area and approximately 1 inch of the immediate surrounding area(s) once daily for one week.",
                sideEffects: "Contact dermatitis and cellulitis may occur. Application site reactions were observed in iess than 1% of subjects in clinical trial.",
                contraindication: "Luliconazole cream is contraindicated in patients with a history of hypersensitivity to Luliconazole.",
            },
            {
                id: 12,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Nesotem",
                dosageFromStrength: "375mg & 500mg Tablet.",
                indication: "Nesotem tablet is indicated for the relief of signs & symptoms of-Osteoarthritis. Rheumatoid arthritis. Ankylosing spondylitis & To decrease the risk of developing gastric ulcers in patients at risk of developing NSAID-associated gastric ulcers.",
                dose: "Carefully consider the potential benefits & risks of this tablet & other treatment options before deciding to use this tablet. Use the lowest effective dose for the shortest duration consistent with individual patient treatment goals. If a dose of Esomeprazole lower than a total daily dose of 40 mg is more appropriate, a different treatment should be considered.\n\nRheumatoid Arthritis, Osteoarthritis and Ankylosing Spondylitis-\nAdults: One tablet twice daily of either: 375 mg naproxen\/20 mg of esomeprazole; or 500 mg naproxen\/20 mg of esomeprazole\nJuvenile Idiopathic Arthritis in Adolescent Patients 12 Years of Age & Older-\nWeight greater than 50 kg: 375 mg naproxen\/20 mg of esomeprazole; or 500 mg naproxen\/20 mg of esomeprazole\nWeight 38 kg to less than 50 kg: One tablet twice daily of 375 mg naproxen\/20 mg of esomeprazole.",
                sideEffects: "Immediate release esomeprazole has been included in the tablet formulation to decrease the incidence of gastrointestinal side effects from Naproxen. Naproxen and Esomeprazole tablet has been shown to significantly decrease the occurrence of gastric ulcers and NSAID associated upper gastrointestinal adverse events compared to Naproxen alone. Naproxen: Clinical trial and epidemiological data suggest that use of coxibs and some NSAIDs (particularly at high doses and in long-term treatment) may be associated with a small increased risk of arterial thrombotic events (for example myocardial infarction or stroke). Although data suggest that the use of Naproxen (1000 mg daily) may be associated with a lower risk, some risk cannot be excluded. Oedema, hypertension and cardiac failure have been reported in association with NSAID treatment. The most commonly observed adverse events are gastrointestinal in nature. Peptic ulcers, perforation or GI bleeding, sometimes fatal, particularly in older people, may occur. Nausea, vomiting, diarrhoea, flatulence, constipation, dyspepsia, abdominal pain, melaena, haematemesis, ulcerative stomatitis, exacerbation of colitis and Crohn’s disease have been reported following administration. Less frequently, gastritis has been observed.",
                contraindication: "\nKnown hypersensitivity to any component of this tablet or substituted benzimidazoles.\nHistory of asthmay urticaria or other allergic-type reactions after taking aspirin or other NSAIDs.\nUse during the peri-operative period in the setting of coronary artery bypass graft (CABG) surgery",
            },
            {
                id: 13,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "10mg Tablet &100ml Oral Solution",
                dosageFromStrength: "",
                indication: "Picorif is indicated in the following conditions-\nConstipation of any etiology. Relief from prolonged & recurrent constipation. Bowel clearance before surgery, childbirth or radiological investigations.",
                dose: "For oral administration. The following dosages are recommended to be taken at night to produce evacuation the following morning. It is recommended to start with the lowest dose. The dose may be adjusted up to the maximum recommended dose to produce regular stools. The maximum recommended daily dose should not be exceeded:\n10 mg tablet dose:\nAdults and children over 10 years of age: 5-10 mg per day.\nChildren aged 4-10 years: 2.5-5 mg per day.\nOral Solution (5 mg\/5 ml) dose:\nAdults and children over 10 years of age: 5-10 ml or one to two teaspoonful per day.\nChildren aged 4-10 years: 2.5-5 ml or half to one teaspoonful per day.\nChildren from One month to 4 years of age: 0.25 ml\/kg body weight per day.\nConcentrated Oral Solution (7.5 mg\/ml) dose:\nAdults and children over 10 years of age: 0.67-1.33 ml per day.\nChildren aged 4-10 years: 0.33-0.67 ml per day.",
                sideEffects: "Hypersensitivity, dizziness, syncope, vasovagal response, gastrointestinal disorders, diarrhea, abdominal pain and abdominal cramps, nausea, vomiting.",
                contraindication: "Ileus or intestinal obstruction, severe painful and\/or feverish acute abdominal conditions (e.g. appendicitis) potentially associated with nausea and vomiting, acute inflammatory bowel diseases, severe dehydration, known hypersensitivity to Sodium Picosulfate or any other component of the product.",
            },
            {
                id: 14,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Sertazol",
                dosageFromStrength: "2% Cream",
                indication: "Sertazol cream is indicated for the topical treatment of interdigital tinea pedis and other topical fungal infections in immunocompetent patients 12 years of age and older, caused by Trichophyton rubrum, Trichophyton mentagrophytes and Epidermophyton floccosum.",
                dose: "In the treatment of interdigital tinea pedis, Sertaconazole cream should be applied twice daily for 4 weeks. A sufficient amount of Sertaconazole cream should be applied to cover both the affected areas between the toes and the immediately surrounding healthy skin of patients with interdigital tinea pedis. Not for ophthalmic, oral, or intravaginal use.\n\nPediatric Use: The efficacy and safety of Fungitac cream 2% have not been established in pediatric patients below the age of 12 years.\n\nGeriatric Use: Clinical trials of Fungitac cream 2% did not include sufficient numbers of subjects aged 65 and over to determine whether they respond differently from younger subjects.",
                sideEffects: "Most common adverse reactions observed in clinical trials are contact dermatitis, dry skin, burning skin, application site skin tenderness.",
                contraindication: "Sertaconazole cream is contraindicated in patients who have a known or suspected hypersensitivity to sertaconazole nitrate or any of its components or other imidazoles.",
            },
            {
                id: 15,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Tekast ",
                dosageFromStrength: "5mg & 10mg Tablet",
                indication: "Tekast is indicated for:\nProphylaxis and chronic treatment of asthma\nAcute prevention of Exercise-Induced Bronchoconstriction (EIB)\nRelief of symptoms of Allergic Rhinitis (AR): Seasonal & Perennial Allergic Rhinitis",
                dose: "Adults and adolescents with asthma or seasonal allergic rhinitis: \nThe dosage for adults and adolescents 15 years of age and older: Montelukast 10 mg tablet once daily.\nPediatric patients with asthma or seasonal allergic rhinitis:\nThe dosage for pediatric patients 6 to 14 years of age: Montelukast 5 mg tablet once daily.\nThe dosage for pediatric patients 2 years to 5 years of age: Montelukast 4 mg tablet once daily.\nThe dosage for pediatric patients 6 months to 5 years of age: Montelukast 4 mg oral granules once daily. This can be administered either directly in the mouth, or mixed with a spoonful of cold water or soft food at room temperature\nUse in the pediatric patient: The safety and efficacy of Montelukast have been established in adequate and well-controlled studies in pediatric patients with asthma 6 months to 14 years of age. Safety and efficacy profiles in this age group are similar to those seen in adults.\nHepatic Insufficiency: No dosage adjustment is required in patients with mild-to-moderate hepatic insufficiency. Renal Insufficiency: No dosage adjustment is recommended in patients with renal insufficiency.\nElderly use: The pharmacokinetic profile and the oral bioavailability of a single 10-mg oral dose of montelukast are similar in elderly and younger adults. The plasma half-life of montelukast is slightly longer in the elderly. No dosage adjustment in the elderly is required.",
                sideEffects: "Common: Diarrhoea, fever, gastrointestinal discomfort, headache, nausea, vomiting, skin reactions, upper respiratory tract infection.\n\nUncommon: Akathisia, anxiety, arthralgia, asthenia, abnormal behavior, depression, dizziness, drowsiness, dry mouth, haemorrhage, irritability, malaise, muscle complaints, oedema, seizure, abnormal sensation, sleep disorders.\n\nRare: Angioedema, concentration impaired, disorientation, eosinophilic granulomatosis with polyangiitis, erythema nodosum, hallucination, hepatic disorders, memory loss, palpitations, pulmonary eosinophilia, suicidal tendencies, tremor.",
                contraindication: "Montelukast is contraindicated in patients who are hypersensitive to any component of this product.",
            },
            {
                id: 16,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Temcox ",
                dosageFromStrength: "60mg, 90mg & 120mg Tablet",
                indication: "Temcox tablet is indicated for the symptomatic relief of-\nOsteoarthritis (OA)\nRheumatoid arthritis (RA)\nAnkylosing spondylitis, and\nThe pain and signs of inflammation associated with acute gouty arthritis.\nFor the short-term treatment of moderate pain associated with dental surgery.",
                dose: "Adult and adolescent over 16 years:\nOsteoarthritis: The recommended dose is 30 mg once daily. In some patients with insufficient relief from symptoms, an increased dose of 60 mg once daily may increase efficacy.\nRheumatoid arthritis: The recommended dose is 90 mg once daily.\nAnkylosing spondylitis: The recommended dose is 90 mg once daily.\nAcute gouty arthritis: The recommended dose is 120 mg once daily. In clinical trials for acute gouty arthritis, Etoricoxib was given for 8 days.\nPostoperative dental surgery pain: The recommended dose is 90 mg once daily, limited to a maximum of 3 days.\nSome patients may require additional postoperative analgesia. As the cardiovascular risks of Etoricoxib may increase with dose and duration of exposure, the shortest duration possible and the lowest effective daily dose should be used. The patient's need for symptomatic relief and response to therapy should be re-evaluated periodically, especially in patients with osteoarthritis.",
                sideEffects: "Side-effects may include palpitation, fatigue, influenza-like symptoms, ecchymosis; less commonly dry mouth, taste disturbance, mouth ulcer, appetite and weight change, atrial fibrillation, transient ischaemic attack, chest pain, flushing, cough, dyspnoea, epistaxis, anxiety, mental acuity impaired, paraesthesia, electrolyte disturbance, myalgia and arthralgia; very rarely confusion and hallucinations.",
                contraindication: "Hypersensitivity to the active substance or to any of the excipients. Active peptic ulceration or active gastro-intestinai (Gl) bleeding. Patients who have experienced bronchospasm, acute rhinitis, nasal polyps, angioneurotic oedema, urticaria, or allergic-type reactions after taking acetylsalicylic acid or NSAIDs including COX-2 (cyclooxygenase-2) inhibitors. Pregnancy and lactation. Severe hepatic dysfunction (serum albumin <25 g\/l or Child-Pugh score 10). Estimated renal creatinine clearance <30 ml\/min. Children and adolescents under 16 years of age. Inflammatory bowel disease. Congestive heart failure (NYHA ll-IV). Patients with hypertension whose blood pressure is persistently elevated above 140\/90 mmHg and has not been adequately controlled. Established ischaemic heart disease, peripheral arterial disease, and\/or cerebrovascular disease.",
            },
            {
                id: 17,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Temolina ",
                dosageFromStrength: "5mg Tablet",
                indication: "Temolina is indicated in the treatment of type 2 diabetes mellitus to improve glycaemic control in adults.\nAs monotherapy: in patients inadequately controlled by diet and exercise alone and for whom metformin is inappropriate due to intolerance or contraindicated due to renal impairment.\nAs combination therapy: in combination with metformin when diet and exercise plus metformin alone do not provide adequate glycaemic control in combination with a sulphonylurea and metformin when diet and exercise plus dual therapy with these medicinal products do not provide adequate glycaemic control.",
                dose: "Linagliptin 5 mg once daily. If added to metformin, the dose of metformin should be maintained and linagliptin administered concomitantly. When used in combination with a sulfonylurea, a lower dose of the sulphonylurea may be considered to reduce the risk of hypoglycaemia.\nPatients with renal impairment: No dose adjustment required. Linagliptin can be taken with or without a meal at any time of the day.",
                sideEffects: "Temolina is a weak competitive and a weak to moderate mechanism-based inhibitor of CYP isozyme CYP3A4, but does not inhibit other CYP isozymes. The risk for clinically meaningful interactions by other medicinal products on Temolina is low and in clinical studies Temolina had no clinically relevant effect on the pharmacokinetics of metformin, glyburide, simvastatin, warfarin, digoxin or oral contraceptives.",
                contraindication: "Hypersensitivity to the active substance or to any of the excipients.",
            },
            {
                id: 18,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Temvit-N   ",
                dosageFromStrength: "Tablet",
                indication: "Vitamin B1, B6 & B12 is indicated where a deficiency of the relevant vitamins exists. It is indicated for the treatment of following diseases: Polyneuropathy of any origin such alcoholic or toxiconeuropathies as-diabetic, Neuritis, Neuralgia, Cervical Syndrome, Shoulder-arm syndrome, Lumbago, Sciatica, Myalgia, Intercostal neuralgia, Herpes Zoster, Trigeminal Neuralgia, Supportive treatment in facial paresis.",
                dose: "Tablet: 1-3 Tablets per day or as advised by the physician.\nUse in children: There is no information on the use of this drug in children.",
                sideEffects: "Generally well tolerated but allergic reactions may be observed in few cases.",
                contraindication: "Vitamin B1, Vitamin B6 and Vitamin B12 is contraindicated in patients on levodopa therapy, and in patients with hypersensitivity to any of the ingredients of the preparation.",
            },
            {
                id: 19,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Trec ",
                dosageFromStrength: "100mg & 200mg Capsule ",
                indication: "Trec is used for the treatment of oropharyngeal candidiasis, vulvovaginal candidiasis, pityriasis versicolor, tinea pedis, tinea cruris, tinea corporis, tinea manuum, onychomycosis, histoplasmosis. It is indicated in the treatment of systemic candidiasis, aspergillosis, and cryptococcosis (including ... Read more",
                dose: "Tinea corporis, tinea cruris: 100 mg once daily for 15 days or 200 mg once daily for 7 days\nTinea pedis, tinea manuum: 100 mg once daily for 30 days\nOropharyngeal candidiasis: 100 mg once daily for 15 days, Increase dose to 200 mg once daily for 15 days in AIDS or neutropenic patients because of impaired absorption in these groups.\nOnychomycosis (toenails with or without fingernail involvement): Either 200 mg daily for 3 months or course (pulse) of 200 mg twice daily for 7 days, subsequent courses repeated after 21 days' interval. Fingernails two courses, toenails three courses. Candidiasis: 100-200 mg once daily for 3 weeks-7 months. Increase dose to 200 mg twice daily in case of invasive or disseminated disease",
                sideEffects: "Nausea, abdominal pain, dyspepsia, constipation, headache, dizziness, raised liver enzymes, menstrual disorders, allergic reactions (including pruritus, rash, urticaria and angioedema), hepatitis and cholestatic jaundice, peripheral neuropathy and Stevens-Johnson syndrome reported. On prolonged use hypokalaemia, oedema and hair loss reported.",
                contraindication: "Itraconazole is contraindicated in patients with known hypersensitivity to the drug or any ingredient in the formulation. Patients who have severe hepatic disease are not advised to take Itraconazole. It is not advisable to use the drug in patients taking rifampin, which appears to initially inhibit and then enhance the metabolism of Itraconazole.",
            },
            {
                id: 20,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Uritro ",
                dosageFromStrength: "100mg SR Capsule and 100ml Suspension",
                indication: "Itraconazole is contraindicated in patients with known hypersensitivity to the drug or any ingredient in the formulation. Patients who have severe hepatic disease are not advised to take Itraconazole. It is not advisable to use the drug in patients taking rifampin, which appears to initially inhibit and then enhance the metabolism of Itraconazole.",
                dose: "Nitrofurantoin tablet (In adults):\nUncomplicated urinary tract infections: 50-100 mg four times a day- the lower dosage level is recommended. Therapy should be continued for one week or for at least 3 days after sterility of the urine is obtained.\nFor long-term suppressive therapy: In adults, a reduction of dosage to 50-100 mg at bedtime may be adequate.\nNitrofurantoin capsule (In adults):\nAcute Uncomplicated Urinary Tract Infections (UTIs): 50 mg four times daily for 7 days.\nLong term suppression: 50-100 mg once a day.\nProphylaxis: 50 mg four times daily for the duration of procedure and for three days thereafter.\nNitrofurantoin SR capsule:\nAdults and Children over 12 years: One 100 mg capsule every 12 hours for seven days.\nGenito-urinary surgical prophylaxis: One capsule twice daily on day of procedure and for next 3 days.\nNitrofurantoin suspension: Children: 5-7 mg\/kg\/day in four divided doses (contraindicated under one month of age). The average dose of Nintoin suspension for pediatric patients are as follows-\n7 to 11 kg: ½ (2.5 ml) teaspoonfuls 4 times daily.\n12 to 21 kg: 1 (5 ml) teaspoonfuls 4 times daily.\n22 to 30 kg: 1½ (7.5 ml) teaspoonfuls 4 times daily.\n31 to 41 kg: 2 (10 ml) teaspoonfuls 4 times daily.\nTherapy should be continued for one week or for at least 3 days after sterility of the urine is obtained. For long-term suppressive therapy in children, doses as low as 1 mg\/kg per 24 hours, given in a single dose or in two divided doses, may be adequate.",
                sideEffects: "The most frequent clinical adverse events are nausea, headache, and flatulence. Other less occurred adverse events are diarrhea, dyspepsia, abdominal pain, constipation, emesis, dizziness and drowsiness.",
                contraindication: "Anuria, oliguria or significant impairment of renal function are contraindications. This drug is contraindicated in pregnant patients at 38-42 weeks, during labor and delivery. Nitrofurantoin is also contraindicated in those patients with known hypersensitivity to Nitrofurantoin.",
            },
            {
                id: 21,
                manufacturer: "Team Pharmaceuticals Ltd.",
                brandName: "Zolvo ",
                dosageFromStrength: "50mg & 200mg Tablet and 40ml PFS.",
                indication: "Zolvo is an azole antifungal medicine. It is indicated for use in patients 12 years of age and older in the treatment of following fungal infections- Invasive aspergillosis. Candidemia (nonneutropenic) and disseminated candidiasis in skin, abdomen, kidney, bladder wall and wounds. Esophageal candidiasis. Serious infections caused by Scedosporium apiospermum and Fusarium Species including Fusarium solani. Patients intolerant of, or refractory to other therapy.",
                dose: "Oral-\nVoriconazole tablet and powder for suspension are to be taken at least one hour before or one hour following a meal\nAt or over 40 kg body weight: Loading dose regimen is 400 mg or 10 ml every 12 hours (for the first 24 hours) and maintenance dose (after first 24 hours) is 200 mg or 5 ml twice daily.\nBelow 40 Kg body weight: Loading dose regimen is 200 mg or 5 ml every 12 hours (for the first 24 hours) and maintenance dose (after first 24 hours) is 100 mg or 2.5 ml twice daily. Or, as directed by the registered physician.\n\nInjection-\nInvasive Aspergillosisd :\nLoading dose: 6 mg\/kg 12 hourly for the first 24 hours.\nMaintenance dose: 4 mg\/kg 12 hourly.\nCandidemia in nonneutropenic patients and other deep tissue Candida infections:\nLoading dose: 6 mg\/kg 12 hourly for the first 24 hours.\nMaintenance dose: 3-4 mg\/kg 12 hourly.\nScedosporiosis and Fusariosis:\nLoading dose: 6 mg\/kg 12 hourly for the first 24 hours.\nMaintenance dose: 4 mg\/kg 12 hourly.",
                sideEffects: "The most common side effects are abdominal pain, anemia, blurred vision, headache, chest pain, nausea and diarrhea.",
                contraindication: "Known hypersensitivity to Voriconazole or any other components of this drug-\nCo-administration with terfenadine, astemizole, cisapride, pimozide or quinidine, sirolimus due to risk of serious adverse reactions\nCo-administration with rifampin, carbamazepine, long-acting barbiturates, efavirenz, ritonavir, rifabutin, ergot alkaloids and St. John's Wort due to risk of loss of efficacy",
            },
        ];
        for (const medicine of medicine_Data) {
            await this.prisma.medicineData.deleteMany({
                where: {
                    OR: [{ id: medicine.id }, { brandName: medicine.brandName }],
                },
            });
        }
        await this.prisma.medicineData.createMany({ data: medicine_Data });
        return await this.prisma.medicineData.findMany({
            where: { id: { in: medicine_Data.map((d) => d.id) } },
        });
    }
};
exports.MedicineService = MedicineService;
exports.MedicineService = MedicineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], MedicineService);


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************************!*\
  !*** ./apps/medicine/src/main.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const medicine_module_1 = __webpack_require__(/*! ./medicine.module */ "./apps/medicine/src/medicine.module.ts");
const graphql_upload_1 = __webpack_require__(/*! graphql-upload */ "graphql-upload");
async function bootstrap() {
    const app = await core_1.NestFactory.create(medicine_module_1.MedicineModule);
    app.use((0, graphql_upload_1.graphqlUploadExpress)({ maxFileSize: 100000000, maxFiles: 10 }));
    await app.listen(4080);
}
bootstrap();

})();

/******/ })()
;