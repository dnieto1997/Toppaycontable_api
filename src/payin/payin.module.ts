import { Module } from '@nestjs/common';
import { PayinService } from './payin.service';
import { PayinController } from './payin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from 'src/movimientos/entities/movimiento.entity';


@Module({
  controllers: [PayinController],
  providers: [PayinService],
  imports: [ 
    TypeOrmModule.forFeature([Movimiento]),


  ]
})
export class PayinModule {}
