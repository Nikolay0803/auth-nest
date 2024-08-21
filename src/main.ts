import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  const cors = process.env.PORT_FRONT

  app.enableCors({
    origin: cors,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  });

  const config = new DocumentBuilder()
    .setTitle("Auth-Nest")
    .setDescription("API documentation for the auth-nest")
    .setVersion("1.0")
    .addTag("endpoints")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("doc", app, document);
  await app.listen(process.env.PORT, "0.0.0.0");
}
bootstrap();
