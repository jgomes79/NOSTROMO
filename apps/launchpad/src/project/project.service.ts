import { getEndpoint, request } from "@/core/api/api.helpers";
import { Project } from "@/project/project.types";

/**
 * Fetches a project by its slug.
 *
 * @param {Project["slug"]} slug - The unique identifier (slug) of the project.
 * @returns {Promise<Project>} - A promise that resolves to the project data.
 */
export const getProjectById = (slug: Project["slug"]): Promise<Project> =>
  request<Project>(getEndpoint("projects-service", `/project/${slug}`), {
    method: "GET",
  });
