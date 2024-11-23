import { z } from "zod";

/**
 * Schema for the User validation using zod.
 */
export const CurrencySchema = z.object({
  id: z.number(),
  name: z.string(),
  symbol: z.string(),
});
