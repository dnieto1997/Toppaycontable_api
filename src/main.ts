import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded } from 'express';
import * as dotenv from 'dotenv';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  dotenv.config();

    
  
  
  app.setGlobalPrefix('v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion:true
      }
    })
  );

  const config = new DocumentBuilder()
  .setTitle('Toppay')
  .setDescription('Toppay Contable')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  app.use(json({limit: '50mb'}));
  app.use(urlencoded({ extended: true, limit: '100mb'}));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
