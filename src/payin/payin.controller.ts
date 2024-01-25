import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { PayinService } from './payin.service';
import { CreatePayinDto } from './dto/create-payin.dto';

import { AuthGuard } from '../auth/jwt.guard';

@Controller('payin')
export class PayinController {
  constructor(private readonly payinService: PayinService) { }
  @UseGuards(AuthGuard)
  @Post()
  payin(@Body() payin: CreatePayinDto, @Request() req) {
    return this.payinService.payin(payin, req.user);
  }


}
