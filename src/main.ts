import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // use validation pipe globally
  app.useGlobalPipes(
    new ValidationPipe({
      // strip out elements that are not defined in DTO
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
