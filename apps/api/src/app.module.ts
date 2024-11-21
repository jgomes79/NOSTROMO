import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from '@/project/project.module';

@Module({
  imports: [ConfigModule.forRoot(), ProjectModule],
  controllers: [],
})
export class AppModule {}
