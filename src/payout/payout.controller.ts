import { Controller, Post, Body,Request,UseGuards  } from '@nestjs/common';
import { PayoutService } from './payout.service';

import { AuthGuard } from '../auth/jwt.guard';

import { SuccessPayout } from './dto/successpayout.dto';


import { ApiTags } from '@nestjs/swagger';


@ApiTags('payout')
@Controller('payout')
export class PayoutController {
  constructor(private readonly payoutService: PayoutService )
   {}

  



  @UseGuards(AuthGuard)
  @Post()
  successpayout(@Body() successpayout: SuccessPayout,@Request() req) {
    return this.payoutService.successpayout(successpayout,req.user);
  }


  


}
