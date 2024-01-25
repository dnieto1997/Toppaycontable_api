import { Test, TestingModule } from '@nestjs/testing';
import { DispersionesController } from './dispersiones.controller';
import { DispersionesService } from './dispersiones.service';

describe('DispersionesController', () => {
  let controller: DispersionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispersionesController],
      providers: [DispersionesService],
    }).compile();

    controller = module.get<DispersionesController>(DispersionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
