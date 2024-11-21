import { z } from "zod";

import { ProjectSchema } from "@/project/project.schema";

/**
 * Schema for the User validation using zod.
 */
export const UserSchema = z.object({
  id: z.number(),
  wallet: z.string(),
  projects: ProjectSchema.array(),
});
