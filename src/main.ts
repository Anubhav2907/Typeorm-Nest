import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loadEnvironmentVariables } from './loader';

async function bootstrap() {
  await loadEnvironmentVariables();
  console.log(process.env.TYPEORM_CONNECTION);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
