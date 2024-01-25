import { Module } from '@nestjs/common';
import { AliadoService } from './aliado.service';
import { AliadoController } from './aliado.controller';

@Module({
  controllers: [AliadoController],
  providers: [AliadoService],
})
export class AliadoModule {}
