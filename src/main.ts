import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.setBaseViewsDir(join(__dirname, '../src/', 'views'));
  app.setViewEngine('hbs');
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') | 8080;
  await app.listen(port);
  
  return port;
}

bootstrap().then(port => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});