import { Test, TestingModule } from '@nestjs/testing';
import { HoraMedicaService } from './hora-medica.service';

describe('HoraMedicaService', () => {
  let service: HoraMedicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoraMedicaService],
    }).compile();

    service = module.get<HoraMedicaService>(HoraMedicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
