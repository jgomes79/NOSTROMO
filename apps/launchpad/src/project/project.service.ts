import { getEndpoint, request, requestWithFile } from "@/core/api/api.helpers";
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

/**
 * Creates a new project.
 *
 * @param {FormData} data - The form data containing project details.
 * @returns {Promise<Project>} - A promise that resolves to the newly created project data.
 */
export const createProject = (data: FormData): Promise<Project> =>
  requestWithFile<Project>(getEndpoint("projects-service", "/projects/create"), data);
