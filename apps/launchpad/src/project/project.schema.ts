import { z } from "zod";

import { ProjectStates } from "@/project/project.types";

/**
 * Schema for the Project validation using zod.
 */
export const ProjectSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  photoUrl: z.string().url("Invalid URL format"),
  bannerUrl: z.string().url("Invalid URL format"),
  whitepaperUrl: z.string().url("Invalid URL format"),
  litepaperUrl: z.string().url("Invalid URL format"),
  tokenomicsUrl: z.string().url("Invalid URL format"),
  tokensCreated: z.number(),
  tokenPrice: z.number(),
  amountToRaise: z.number(),
  state: z.nativeEnum(ProjectStates),
  instagramUrl: z.string(),
  xUrl: z.string(),
  discordUrl: z.string(),
  telegramUrl: z.string(),
  mediumUrl: z.string(),
});
