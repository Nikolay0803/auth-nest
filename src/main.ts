import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }))
  //  app.enableCors({
  //    origin: "http://localhost:3000", // Дозволити запити з цього домену
  //    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //    allowedHeaders: "Content-Type, Authorization",
  //  });
  // await app.listen(8000);
  await app.listen(3000);
}
bootstrap();
