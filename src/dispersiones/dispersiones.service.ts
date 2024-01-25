import { Injectable } from '@nestjs/common';
import { CreateDispersioneDto } from './dto/create-dispersione.dto';
import { UpdateDispersioneDto } from './dto/update-dispersione.dto';

@Injectable()
export class DispersionesService {
  create(createDispersioneDto: CreateDispersioneDto) {
    return 'This action adds a new dispersione';
  }

  findAll() {
    return `This action returns all dispersiones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dispersione`;
  }

  update(id: number, updateDispersioneDto: UpdateDispersioneDto) {
    return `This action updates a #${id} dispersione`;
  }

  remove(id: number) {
    return `This action removes a #${id} dispersione`;
  }
}
