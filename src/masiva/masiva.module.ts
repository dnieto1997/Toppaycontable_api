import { Module } from '@nestjs/common';
import { MasivaService } from './masiva.service';
import { MasivaController } from './masiva.controller';

@Module({
  controllers: [MasivaController],
  providers: [MasivaService],
})
export class MasivaModule {}
