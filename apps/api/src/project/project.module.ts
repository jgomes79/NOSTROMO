import { Module } from '@nestjs/common';

import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { projectProviders } from '@/project/project.providers';
import { DatabaseModule } from '@/database/database.module';

/**
 * Module that provides user-related services and controllers.
 */
@Module({
  imports: [DatabaseModule],
  providers: [ProjectService, ...projectProviders],
  controllers: [ProjectController],
})
export class ProjectModule {}
