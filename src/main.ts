import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Module : 기능별로 controller와 provider, module을 묶어 놓은 곳 -> 선언
// Controller : url을 가져와서 함수를 실행하는 곳                 -> 호출(라우팅)
// Service : 비즈니스 로직을 작성하는 곳                          -> 실행

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
