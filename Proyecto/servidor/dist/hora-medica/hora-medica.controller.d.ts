import { Request } from '@nestjs/common';
import { HoraMedicaService } from './hora-medica.service';
import { CreateHoraMedicaDto } from './dto/create-hora-medica.dto';
import { UpdateHoraMedicaDto } from './dto/update-hora-medica.dto';
export declare class HoraMedicaController {
    private readonly horaMedicaService;
    constructor(horaMedicaService: HoraMedicaService);
    create(createHoraMedicaDto: CreateHoraMedicaDto): Promise<import("./entities/hora-medica.entity").HoraMedica>;
    findAll(req: Request): string;
    updateUser(response: any, horaMedicaId: string, updateHoraMedicaDto: UpdateHoraMedicaDto): Promise<any>;
    deleteHoraMedica(response: any, horaMedicaId: string): Promise<any>;
    findOne(id: string): string;
}
