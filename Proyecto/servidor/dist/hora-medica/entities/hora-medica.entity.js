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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoraMedicaSchema = exports.HoraMedica = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let HoraMedica = class HoraMedica {
};
exports.HoraMedica = HoraMedica;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HoraMedica.prototype, "profesional", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HoraMedica.prototype, "fecha", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HoraMedica.prototype, "hora", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: ['true'] }),
    __metadata("design:type", Boolean)
], HoraMedica.prototype, "status", void 0);
exports.HoraMedica = HoraMedica = __decorate([
    (0, mongoose_1.Schema)()
], HoraMedica);
exports.HoraMedicaSchema = mongoose_1.SchemaFactory.createForClass(HoraMedica);
//# sourceMappingURL=hora-medica.entity.js.map