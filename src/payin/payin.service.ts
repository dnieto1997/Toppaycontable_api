import { Injectable } from '@nestjs/common';
import { CreatePayinDto } from './dto/create-payin.dto';
import { InjectRepository } from '@nestjs/typeorm';

import {  Repository } from 'typeorm';


import { Movimiento } from 'src/movimientos/entities/movimiento.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class PayinService {
  authsiigoService: any;
  constructor(
    @InjectRepository(Movimiento)
    private movements: Repository<Movimiento>
 
  
  
  ) { }


  async payin(createPayinDto: CreatePayinDto, response) {

    const { initialdate, finaldate } = createPayinDto


    const queryBuilder = this.movements
      .createQueryBuilder('movimiento')
      .select([
        'movimiento.merchant_id',
        'movimiento.merchant_name',
        'SUM(movimiento.amount) AS total'
      ])
      .where('movimiento.type_transaction <> 2')
      .andWhere(`DATE(movimiento.updated_at) BETWEEN '${initialdate}' AND '${finaldate}'`)
      .andWhere(`movimiento.status= 1`)
      .andWhere(`movimiento.currency = "COP"`)
      .groupBy("movimiento.merchant_id,movimiento.merchant_name")

    const result = await queryBuilder.getRawMany();


    return result;



  }



 

  


}
