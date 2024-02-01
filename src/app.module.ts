import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginDashModule } from './login_dash/login_dash.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';
import { AliadoModule } from './aliado/aliado.module';
import { MovimientosModule } from './movimientos/movimientos.module';
import { DispersionesModule } from './dispersiones/dispersiones.module';
import { PayinModule } from './payin/payin.module';
import { PayoutModule } from './payout/payout.module';
import { MasivaModule } from './masiva/masiva.module';
import { ApiSiigoModule } from './api-siigo/api-siigo.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "129.213.170.8",
      port: 3306,
      username: "devToppay",
      password: "TopPay%2023",
      database: "toppay",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),
    LoginDashModule,
    AuthModule,
    AliadoModule,
    MovimientosModule,
    DispersionesModule,
    PayinModule,
    PayoutModule,
    MasivaModule,
    ApiSiigoModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
