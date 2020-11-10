import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Performance } from './entity/Performance';

@Module({
  imports: [TypeOrmModule.forFeature([Performance])],
  exports: [TypeOrmModule]
})
export class PerformanceModule {}