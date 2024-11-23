import { Get, Controller, Delete, Param, Query, Post, Body, Patch } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { CreateProjectDTO, EditProjectDTO } from "./project.dto";
import { Project } from "./project.entity";
import { ProjectService } from "./project.service";
import { ProjectStates } from "./project.types";

/**
 * Controller for handling project-related HTTP requests.
 */
@ApiTags("Projects Service")
@Controller("projects-service")
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  /**
   * Fetches a project by its slug.
   * @param slug - The slug of the project to fetch.
   * @returns A promise that resolves to a project object.
   */
  @Get("/project/:slug")
  async getProject(@Param("slug") slug: string) {
    const project = await this.projectService.getBySlug(slug);

    return {
      id: project.id,
      state: project.state,
      name: project.name,
      slug: project.slug,
      description: project.description,
      photoUrl: project.photoUrl,
      bannerUrl: project.bannerUrl,
      whitepaperUrl: project.whitepaperUrl,
      litepaperUrl: project.litepaperUrl,
      tokenomics: project.tokenomicsUrl,
      tokensCreated: project.tokensCreated,
      tokenPrice: project.tokenPrice,
      amountToRaise: project.amountToRaise,
      createdAt: project.createdAt,
      owner: {
        wallet: project.owner.wallet,
        tier: project.owner.tier,
      },
      social: {
        instagramUrl: project.instagramUrl,
        xUrl: project.xUrl,
        discordUrl: project.discordUrl,
        telegramUrl: project.telegramUrl,
        mediumUrl: project.mediumUrl,
      },
      currency: {
        id: project.currency.id,
        name: project.currency.name,
        symbol: project.currency.symbol,
      },
    };
  }

  /**
   * Edits a project by its ID.
   * @param data The data to update the project with.
   * @returns A partial project object.
   */
  @Patch("/project/:projectId")
  async editProject(@Body() data: EditProjectDTO): Promise<Partial<Project>> {
    console.log(data);
    return {};
  }

  /**
   * Deletes a project by its ID.
   * @param projectId The ID of the project to delete.
   * @returns A partial project object.
   */
  @Delete("/project/:projectId")
  async deleteProject(): Promise<Partial<Project>> {
    return {};
  }

  /**
   * Fetches all projects with a specified state.
   * @param state The state of the projects to fetch.
   * @param page The page number for pagination.
   * @param limit The number of projects per page.
   * @returns A list of partial project objects.
   */
  @Get("/projects/:state")
  async getAllProjects(
    @Param("state") state: ProjectStates | "all",
    @Query("page") page: number,
    @Query("limit") limit: number,
  ): Promise<Partial<Project>[]> {
    console.log({ state, page, limit });
    return [];
  }

  /**
   * Deletes a project by its ID.
   * @returns A partial project object.
   * @param data
   */
  @Post("/projects/create")
  async createProject(@Body() data: CreateProjectDTO): Promise<Partial<Project>> {
    console.log(data);
    return {};
  }
}
