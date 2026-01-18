import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('YOUR APPLICATION LABEL')
    .setDescription('YOUR APPLICATION DESCRIPTION')
    .setVersion('1.0')
    .addTag('app')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory); // /api to get swagger document
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => console.log('Listening on port 3000'))
  .catch((err) => console.log(err));
