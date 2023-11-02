import { Test, TestingModule } from '@nestjs/testing';
import { HoraMedicaController } from './hora-medica.controller';
import { HoraMedicaService } from './hora-medica.service';

describe('HoraMedicaController', () => {
  let controller: HoraMedicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HoraMedicaController],
      providers: [HoraMedicaService],
    }).compile();

    controller = module.get<HoraMedicaController>(HoraMedicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
