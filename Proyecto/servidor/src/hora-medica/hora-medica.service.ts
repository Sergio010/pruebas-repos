
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateHoraMedicaDto } from './dto/create-hora-medica.dto';
import { UpdateHoraMedicaDto } from './dto/update-hora-medica.dto';
import { HoraMedica } from './entities/hora-medica.entity';
import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
//import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload';

@Injectable()
export class HoraMedicaService {
  constructor(
    @InjectModel(HoraMedica.name)
    private horaMedicaModel: Model<HoraMedica>,
   // private jwtService: JwtService,
  ){}

  async create(createHoraMedicaDto: CreateHoraMedicaDto): Promise<HoraMedica> {
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

  findOne(id: number) {
    return `This action returns a #${id} horaMedica`;
  }

  async updateUser(horaMedicaId: string, updateHoraMedicaDto: UpdateHoraMedicaDto): Promise<HoraMedica> {
    const existinghoraMedica = await this.horaMedicaModel.findByIdAndUpdate(horaMedicaId, updateHoraMedicaDto, { new: true });
    if (!existinghoraMedica) {
      throw new NotFoundException(`User #${horaMedicaId} not found`);
    }
    return existinghoraMedica;
  }

  async deleteHoraMedica(horaMedicaId: string): Promise<HoraMedica> {
    const deletedUser = await this.horaMedicaModel.findByIdAndDelete(horaMedicaId);
    if (!deletedUser) {
      throw new NotFoundException(`User #${horaMedicaId} not found`);
    }
    return deletedUser;
  }
  
  /*reservar(userId: string, fecha: Date, hora: Date){
    return `This action reserva horaMedica`;
  }
  */
  /*
  getJwtToken( payload: JwtPayload ) {
    console.log (payload)
    const token = this.jwtService.sign(payload);
    return token;
  }
  */
}
