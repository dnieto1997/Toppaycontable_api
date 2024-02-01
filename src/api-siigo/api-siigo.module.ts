import { Module } from '@nestjs/common';
import { ApiSiigoService } from './api-siigo.service';
import { ApiSiigoController } from './api-siigo.controller';

@Module({
  controllers: [ApiSiigoController],
  providers: [ApiSiigoService],
})
export class ApiSiigoModule {}
