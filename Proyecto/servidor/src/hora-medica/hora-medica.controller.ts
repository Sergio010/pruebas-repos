
import { Controller, Get, Post, Put,  Body, Res, Param, Delete, UseGuards, Request, HttpStatus } from '@nestjs/common';
import { HoraMedicaService } from './hora-medica.service';
import { CreateHoraMedicaDto } from './dto/create-hora-medica.dto';
import { UpdateHoraMedicaDto } from './dto/update-hora-medica.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('hora-medica')
export class HoraMedicaController {
  constructor(private readonly horaMedicaService: HoraMedicaService) {}

  @Post()
  create(@Body() createHoraMedicaDto: CreateHoraMedicaDto) {
    return this.horaMedicaService.create(createHoraMedicaDto);
  }

  //@UseGuards( AuthGuard )
  @Get()
  findAll(@Request() req: Request) {
    return this.horaMedicaService.findAll();
  }

  //@UseGuards( AuthGuard )
  @Put('/:id')
  async updateUser(@Res() response,@Param('id') horaMedicaId: string,
  @Body() updateHoraMedicaDto: UpdateHoraMedicaDto) {
    try {
      const existinghoraMedica = await this.horaMedicaService.updateUser(horaMedicaId, updateHoraMedicaDto);
      return response.status(HttpStatus.OK).json({message: 'User has been successfully updated',existinghoraMedica,});
    } 
    catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  //@UseGuards( AuthGuard )
  @Delete('/:id')
  async deleteHoraMedica(@Res() response, @Param('id') horaMedicaId: string){
    try {
      const deletedHoraMedica = await this.horaMedicaService.deleteHoraMedica(horaMedicaId);
      return response.status(HttpStatus.OK).json({
      message: 'User deleted successfully',
      deletedHoraMedica,});
    }
    catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horaMedicaService.findOne(+id);
  }

}
