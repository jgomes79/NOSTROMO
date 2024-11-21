import { Get, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Project } from './project.entity';
import { ProjectService } from './project.service';

/**
 * Controller for handling project-related HTTP requests.
 */
@ApiTags('Projects Service')
@Controller('projects-service')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/')
  async getById(): Promise<Partial<Project>> {
    return {};
  }
}
