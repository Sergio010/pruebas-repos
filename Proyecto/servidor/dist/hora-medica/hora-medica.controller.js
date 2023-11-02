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
exports.HoraMedicaController = void 0;
const common_1 = require("@nestjs/common");
const hora_medica_service_1 = require("./hora-medica.service");
const create_hora_medica_dto_1 = require("./dto/create-hora-medica.dto");
const update_hora_medica_dto_1 = require("./dto/update-hora-medica.dto");
let HoraMedicaController = class HoraMedicaController {
    constructor(horaMedicaService) {
        this.horaMedicaService = horaMedicaService;
    }
    create(createHoraMedicaDto) {
        return this.horaMedicaService.create(createHoraMedicaDto);
    }
    findAll(req) {
        return this.horaMedicaService.findAll();
    }
    async updateUser(response, horaMedicaId, updateHoraMedicaDto) {
        try {
            const existinghoraMedica = await this.horaMedicaService.updateUser(horaMedicaId, updateHoraMedicaDto);
            return response.status(common_1.HttpStatus.OK).json({ message: 'User has been successfully updated', existinghoraMedica, });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async deleteHoraMedica(response, horaMedicaId) {
        try {
            const deletedHoraMedica = await this.horaMedicaService.deleteHoraMedica(horaMedicaId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'User deleted successfully',
                deletedHoraMedica,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    findOne(id) {
        return this.horaMedicaService.findOne(+id);
    }
};
exports.HoraMedicaController = HoraMedicaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hora_medica_dto_1.CreateHoraMedicaDto]),
    __metadata("design:returntype", void 0)
], HoraMedicaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Request !== "undefined" && common_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], HoraMedicaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_hora_medica_dto_1.UpdateHoraMedicaDto]),
    __metadata("design:returntype", Promise)
], HoraMedicaController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], HoraMedicaController.prototype, "deleteHoraMedica", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HoraMedicaController.prototype, "findOne", null);
exports.HoraMedicaController = HoraMedicaController = __decorate([
    (0, common_1.Controller)('hora-medica'),
    __metadata("design:paramtypes", [hora_medica_service_1.HoraMedicaService])
], HoraMedicaController);
//# sourceMappingURL=hora-medica.controller.js.map