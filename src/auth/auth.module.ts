import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginDash } from 'src/login_dash/entities/login_dash.entity';
import { JwtModule} from '@nestjs/jwt'
import { jwtConstants } from './jwt.constants';
import { ApiSiigoService } from 'src/api-siigo/api-siigo.service';



@Module({
  imports: [
    TypeOrmModule.forFeature([LoginDash]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '12h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,ApiSiigoService],
})
export class AuthModule {}
