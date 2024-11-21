import { Inject, Injectable } from '@nestjs/common';
import { Project } from '@/project/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @Inject('ProjectRepository')
    private projectRepository: typeof Project,
  ) {}

  /**
   * Retrieves a Project by its ID.
   *
   * @param {string} id - The ID of the project to retrieve.
   * @returns {Promise<Project>} A promise that resolves to the project with the specified ID.
   */
  async getById(id: string): Promise<Project> {
    return this.projectRepository.findOne({
      where: {
        id,
      },
    });
  }
}
