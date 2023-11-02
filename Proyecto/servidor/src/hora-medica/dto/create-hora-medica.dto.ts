
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateHoraMedicaDto {

    @IsNotEmpty()
    profesional: string;
    @IsNotEmpty()
    fecha: string;
    //fecha: Date;

    @IsNotEmpty()
    hora: string;
    //hora: Date;
    
    paciente: string;
}


