
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as session from 'express-session';
import {TypeormStore} from "connect-typeorm";
import {Session} from "./entities/session.entity";
import {getConnection} from "typeorm";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log("session bootstrap")
  // await getConnection().manager.save(new Session())
  const sessionRepository = getConnection().manager.getRepository(Session);

  app.setGlobalPrefix('api');
  app.use(
      session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 7 * 24 * 60 * 60 * 1000,
        },
        store: new TypeormStore({
            cleanupLimit: 2,
            ttl: 86400
        }).connect(sessionRepository),
      }),
  );

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
