import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiSiigoService } from './api-siigo.service';


@Controller('api-siigo')
export class ApiSiigoController {
  constructor(private readonly apiSiigoService: ApiSiigoService) {}



  @Get()
  findAll() {
    return this.apiSiigoService.findAll();
  }


  @Get('documentype')
  tiposcomprobantes() {
    return this.apiSiigoService.TiposComprobantes();
  }


  @Get('listcustomer')
  listadocustomer() {
    return this.apiSiigoService.ListaClientes();
  }

  @Get('paymentypes')
  paymenttypes() {
    return this.apiSiigoService.typepayment();
  }
 

  @Post('debito')
  debito(@Body() requestBody: any) {
    return this.apiSiigoService.debito(requestBody);
  }


  @Post('credito')
  credito(@Body() requestBody: any) {
    return this.apiSiigoService.credito(requestBody);
  }
}
