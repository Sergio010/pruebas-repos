"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHoraMedicaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_hora_medica_dto_1 = require("./create-hora-medica.dto");
class UpdateHoraMedicaDto extends (0, mapped_types_1.PartialType)(create_hora_medica_dto_1.CreateHoraMedicaDto) {
}
exports.UpdateHoraMedicaDto = UpdateHoraMedicaDto;
//# sourceMappingURL=update-hora-medica.dto.js.map