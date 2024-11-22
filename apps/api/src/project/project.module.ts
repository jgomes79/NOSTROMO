import { Module } from "@nestjs/common";

import { DatabaseModule } from "@/database/database.module";
import { projectProviders } from "@/project/project.providers";

import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";

/**
 * Module that provides user-related services and controllers.
 */
@Module({
  imports: [DatabaseModule],
  controllers: [ProjectController],
  providers: [ProjectService, ...projectProviders],
})
export class ProjectModule {}
