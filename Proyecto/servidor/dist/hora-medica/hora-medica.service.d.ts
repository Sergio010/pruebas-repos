import { CreateHoraMedicaDto } from './dto/create-hora-medica.dto';
import { UpdateHoraMedicaDto } from './dto/update-hora-medica.dto';
import { HoraMedica } from './entities/hora-medica.entity';
import { Model } from 'mongoose';
export declare class HoraMedicaService {
    private horaMedicaModel;
    constructor(horaMedicaModel: Model<HoraMedica>);
    create(createHoraMedicaDto: CreateHoraMedicaDto): Promise<HoraMedica>;
    findAll(): string;
    findOne(id: number): string;
    updateUser(horaMedicaId: string, updateHoraMedicaDto: UpdateHoraMedicaDto): Promise<HoraMedica>;
    deleteHoraMedica(horaMedicaId: string): Promise<HoraMedica>;
}
