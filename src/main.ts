import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FruitsModule } from './fruits/fruits.module';

async function bootstrap() {
  const app = await NestFactory.create(FruitsModule);
  await app.listen(3000);
}
bootstrap();
