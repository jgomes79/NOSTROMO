import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { swaggerOptions } from './doc';
import domains, { csurfConfigOptions } from './lib/security/config';
import { csrfMiddleware } from './lib/security/middlewares';

// Environment
dotenv.config({ path: '.env' });

export const logger = new Logger('APIGateway');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CSRF Protection
  const csrf = csurf(csurfConfigOptions);
  app.use((req: Request, res: Response, next: NextFunction) => {
    csrfMiddleware(req, res, next, csrf);
  });

  // Swagger setup for development environment
  if (process.env.NODE_ENV === 'development') {
    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('doc', app, document);
  } else {
    // Helmet for production environment
    app.use(helmet());
  }

  // CORS configuration
  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? domains.PRO
        : [...domains.LOCAL, ...domains.STAGING],
    credentials: true,
  });

  // Cookie parser setup
  app.use(cookieParser(process.env.COOKIE_SECRET));

  // Start listening on the specified port
  await app.listen(process.env.PORT);
}

export default bootstrap;
bootstrap();
