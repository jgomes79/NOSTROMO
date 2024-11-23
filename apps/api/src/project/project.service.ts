import { Inject, Injectable } from "@nestjs/common";

import { Currency } from "@/currency/currency.entity";
import { Project } from "@/project/project.entity";
import { User } from "@/user/user.entity";

@Injectable()
export class ProjectService {
  constructor(
    @Inject("ProjectRepository")
    private projectRepository: typeof Project,
  ) {}

  /**
   * Retrieves a Project by its ID.
   *
   * @param {number} id - The ID of the project to retrieve.
   * @returns {Promise<Project>} A promise that resolves to the project with the specified ID.
   */
  async getById(id: number): Promise<Project> {
    return this.projectRepository.findOne({
      where: {
        id,
      },
    });
  }

  /**
   * Retrieves a Project by its slug.
   *
   * @param {string} slug - The slug of the project to retrieve.
   * @returns {Promise<Project>} A promise that resolves to the project with the specified slug.
   */
  async getBySlug(slug: string): Promise<Project> {
    return this.projectRepository.findOne({
      where: {
        slug,
      },
      include: [Currency, User],
    });
  }
}
