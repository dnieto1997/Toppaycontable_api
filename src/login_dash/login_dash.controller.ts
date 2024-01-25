import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LoginDashService } from './login_dash.service';
import { CreateLoginDashDto } from './dto/create-login_dash.dto';
import { UpdateLoginDashDto } from './dto/update-login_dash.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('login-dash')
@Controller('login-dash')
export class LoginDashController {
  constructor(private readonly loginDashService: LoginDashService) {}

  
}
