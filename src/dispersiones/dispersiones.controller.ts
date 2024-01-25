import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DispersionesService } from './dispersiones.service';
import { CreateDispersioneDto } from './dto/create-dispersione.dto';
import { UpdateDispersioneDto } from './dto/update-dispersione.dto';

@Controller('dispersiones')
export class DispersionesController {
  constructor(private readonly dispersionesService: DispersionesService) {}

  @Post()
  create(@Body() createDispersioneDto: CreateDispersioneDto) {
    return this.dispersionesService.create(createDispersioneDto);
  }

  @Get()
  findAll() {
    return this.dispersionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dispersionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDispersioneDto: UpdateDispersioneDto) {
    return this.dispersionesService.update(+id, updateDispersioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dispersionesService.remove(+id);
  }
}
