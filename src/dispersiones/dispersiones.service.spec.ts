import { Test, TestingModule } from '@nestjs/testing';
import { DispersionesService } from './dispersiones.service';

describe('DispersionesService', () => {
  let service: DispersionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DispersionesService],
    }).compile();

    service = module.get<DispersionesService>(DispersionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
