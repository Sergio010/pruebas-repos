import { PartialType } from '@nestjs/mapped-types';
import { CreateHoraMedicaDto } from './create-hora-medica.dto';

export class UpdateHoraMedicaDto extends PartialType(CreateHoraMedicaDto) {}
