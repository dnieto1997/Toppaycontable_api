import { Module } from '@nestjs/common';
import { DispersionesService } from './dispersiones.service';
import { DispersionesController } from './dispersiones.controller';

@Module({
  controllers: [DispersionesController],
  providers: [DispersionesService],
})
export class DispersionesModule {}
