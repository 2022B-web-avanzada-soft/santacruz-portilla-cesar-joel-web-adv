import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(21204);
}
bootstrap();

// Modulo
// (Modulos, servicios, controladores)
