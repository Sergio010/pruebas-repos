"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoraMedicaModule = void 0;
const common_1 = require("@nestjs/common");
const hora_medica_service_1 = require("./hora-medica.service");
const hora_medica_controller_1 = require("./hora-medica.controller");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const hora_medica_entity_1 = require("./entities/hora-medica.entity");
let HoraMedicaModule = class HoraMedicaModule {
};
exports.HoraMedicaModule = HoraMedicaModule;
exports.HoraMedicaModule = HoraMedicaModule = __decorate([
    (0, common_1.Module)({
        controllers: [hora_medica_controller_1.HoraMedicaController],
        providers: [hora_medica_service_1.HoraMedicaService],
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: hora_medica_entity_1.HoraMedica.name,
                    schema: hora_medica_entity_1.HoraMedicaSchema
                }
            ]),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SEED,
                signOptions: { expiresIn: '6h' },
            }),
        ]
    })
], HoraMedicaModule);
//# sourceMappingURL=hora-medica.module.js.map