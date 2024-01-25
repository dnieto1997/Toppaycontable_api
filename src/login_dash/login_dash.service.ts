import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLoginDashDto } from './dto/create-login_dash.dto';
import { UpdateLoginDashDto } from './dto/update-login_dash.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDash } from './entities/login_dash.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LoginDashService {

  constructor(
    @InjectRepository(LoginDash) private logiDashRepository:Repository<LoginDash>
  ){}


}
