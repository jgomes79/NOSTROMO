import { z } from "zod";

import { CurrencySchema } from "@/currency/currency.schema";

import { ProjectStates } from "./project.types";

/**
 * Schema for the Project validation using zod.
 */
export const ProjectSchema = z.object({
  id: z.number().nonnegative("ID must be a non-negative number"),
  state: z.nativeEnum(ProjectStates),
  name: z.string().min(1, { message: "Name is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  photoUrl: z.string().url({ message: "Invalid URL format" }),
  bannerUrl: z.string().url({ message: "Invalid URL format" }),
  whitepaperUrl: z.string().url({ message: "Invalid URL format" }),
  litepaperUrl: z.string().url({ message: "Invalid URL format" }),
  tokenomicsUrl: z.string().url({ message: "Invalid URL format" }),
  tokensCreated: z.number().nonnegative("Tokens Created must be a non-negative number"),
  tokenPrice: z.number().nonnegative("Token Price must be a non-negative number"),
  amountToRaise: z.number().nonnegative("Amount to Raise must be a non-negative number"),

  currency: CurrencySchema,

  social: z.object({
    instagramUrl: z.string().url({ message: "Invalid Instagram URL format" }).optional(),
    xUrl: z.string().url({ message: "Invalid X URL format" }).optional(),
    discordUrl: z.string().url({ message: "Invalid Discord URL format" }).optional(),
    telegramUrl: z.string().url({ message: "Invalid Telegram URL format" }).optional(),
    mediumUrl: z.string().url({ message: "Invalid Medium URL format" }).optional(),
  }),
});
