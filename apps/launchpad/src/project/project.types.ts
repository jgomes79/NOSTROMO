import { z } from "zod";

import { ProjectSchema } from "@/project/project.schema";

export enum ProjectStates {
  DRAFT = "draft",
  SUBMITED = "submited",
  REJECTED = "rejected",
  UPCOMING = "upcoming",
  ACTIVE = "active",
  FUNDED = "funded",
  NOFUNDED = "nofunded",
}

/**
 * Type for the Project, inferred from the schema.
 */
export type Project = z.infer<typeof ProjectSchema>;
