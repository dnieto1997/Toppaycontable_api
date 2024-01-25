import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { SuccessPayout } from './dto/successpayout.dto';


import { Movimiento } from 'src/movimientos/entities/movimiento.entity';


@Injectable()
export class PayoutService {

  constructor(
    @InjectRepository(Movimiento) private movements: Repository<Movimiento>) { }

  async successpayout(successpayout: SuccessPayout, response: any) {

    const { initialdate, finaldate } = successpayout
    const queryBuilder = this.movements
      .createQueryBuilder('movimiento')
      .select([
        'movimiento.merchant_id',
        'movimiento.merchant_name',
        'ROUND(SUM(movimiento.amount + (movimiento.cost + movimiento.iva)), 2) AS total'
      ])
      .where('movimiento.type_transaction=2')
      .andWhere(`DATE(movimiento.updated_at) BETWEEN '${initialdate}' AND '${finaldate}'`)
      .andWhere(`movimiento.status=1`)
      .andWhere(`movimiento.currency = "COP"`)
      .groupBy("movimiento.merchant_id,movimiento.merchant_name")
    const results = await queryBuilder.getRawMany();
    return results


  }





}
