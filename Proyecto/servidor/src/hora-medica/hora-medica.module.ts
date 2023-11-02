import { Module } from '@nestjs/common';
import { HoraMedicaService } from './hora-medica.service';
import { HoraMedicaController } from './hora-medica.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { HoraMedica, HoraMedicaSchema } from './entities/hora-medica.entity';

@Module({
  controllers: [HoraMedicaController],
  providers: [HoraMedicaService],
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([
      {
        name: HoraMedica.name,
        schema: HoraMedicaSchema
      }
    ]),

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: { expiresIn: '6h' },
    }),

  ]

})
export class HoraMedicaModule {}
