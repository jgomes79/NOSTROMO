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
  controllers: [ProjectController],
  providers: [ProjectService, ...projectProviders],
})
export class ProjectModule {}
