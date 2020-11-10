import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Performance } from './entity/Performance';
import { PerformanceModule } from './performance.module';


@Module({
  imports: [
    ConfigService,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'affluent',
      database: 'affluent',
      entities: [Performance],
      synchronize: false,
    }),
    PerformanceModule,
    // TypeOrmModule.forFeature([Performance]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
