import { Module } from '@nestjs/common';
import { PayoutService } from './payout.service';
import { PayoutController } from './payout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Masiva } from 'src/masiva/entities/masiva.entity';

import { Comparar } from './entities/comparar.entity';
import { Movimiento } from 'src/movimientos/entities/movimiento.entity';

@Module({
  controllers: [PayoutController],
  providers: [PayoutService],
  imports: [ 
    TypeOrmModule.forFeature([Movimiento]),

  ]
})
export class PayoutModule {}
