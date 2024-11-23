import { z } from "zod";

import { ProjectSchema } from "@/project/project.schema";
import { UserTiers, UserTypes } from "@/user/user.types";

/**
 * Schema for the User validation using zod.
 */
export const UserSchema = z.object({
  id: z.number(),
  wallet: z.string(),
  tier: z.nativeEnum(UserTiers),
  type: z.nativeEnum(UserTypes),
  projects: ProjectSchema.array(),
});
