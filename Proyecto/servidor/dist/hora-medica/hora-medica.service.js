"use strict";
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoraMedicaService = void 0;
const common_1 = require("@nestjs/common");
const hora_medica_entity_1 = require("./entities/hora-medica.entity");
const common_2 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let HoraMedicaService = class HoraMedicaService {
    constructor(horaMedicaModel) {
        this.horaMedicaModel = horaMedicaModel;
    }
    async create(createHoraMedicaDto) {
        const createdHoraMedica = new this.horaMedicaModel({
            profesional: createHoraMedicaDto.profesional,
            fecha: createHoraMedicaDto.fecha,
            hora: createHoraMedicaDto.hora,
            paciente: createHoraMedicaDto.paciente,
        });
        return createdHoraMedica.save();
    }
    findAll() {
        return `This action returns all horaMedica`;
    }
    findOne(id) {
        return `This action returns a #${id} horaMedica`;
    }
    async updateUser(horaMedicaId, updateHoraMedicaDto) {
        const existinghoraMedica = await this.horaMedicaModel.findByIdAndUpdate(horaMedicaId, updateHoraMedicaDto, { new: true });
        if (!existinghoraMedica) {
            throw new common_2.NotFoundException(`User #${horaMedicaId} not found`);
        }
        return existinghoraMedica;
    }
    async deleteHoraMedica(horaMedicaId) {
        const deletedUser = await this.horaMedicaModel.findByIdAndDelete(horaMedicaId);
        if (!deletedUser) {
            throw new common_2.NotFoundException(`User #${horaMedicaId} not found`);
        }
        return deletedUser;
    }
};
exports.HoraMedicaService = HoraMedicaService;
exports.HoraMedicaService = HoraMedicaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hora_medica_entity_1.HoraMedica.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], HoraMedicaService);
//# sourceMappingURL=hora-medica.service.js.map