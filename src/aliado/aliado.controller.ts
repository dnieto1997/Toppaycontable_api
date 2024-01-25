import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AliadoService } from './aliado.service';
import { CreateAliadoDto } from './dto/create-aliado.dto';
import { UpdateAliadoDto } from './dto/update-aliado.dto';

@Controller('aliado')
export class AliadoController {
  constructor(private readonly aliadoService: AliadoService) {}

  @Post()
  create(@Body() createAliadoDto: CreateAliadoDto) {
    return this.aliadoService.create(createAliadoDto);
  }

  @Get()
  findAll() {
    return this.aliadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aliadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAliadoDto: UpdateAliadoDto) {
    return this.aliadoService.update(+id, updateAliadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aliadoService.remove(+id);
  }
}
