import { z } from "zod";

import { ProjectSchema } from "../../project.schema";

/**
 * Defines a schema for the project form by extracting specific fields from the ProjectSchema.
 * This schema includes 'name', 'description', 'social', 'tokensCreated', 'tokenPrice', and 'amountToRaise'.
 * Additionally, it extends the schema to include 'photo', 'banner', 'whitepaper', 'litepaper', and 'tokenomics' fields, all of which are expected to be instances of File.
 */
export const ProjectFormSchema = ProjectSchema.pick({
  name: true,
  description: true,
  social: true,
  tokensCreated: true,
  tokenPrice: true,
  amountToRaise: true,
}).extend({
  photo: z.union([z.instanceof(File), z.string()]),
  banner: z.union([z.instanceof(File), z.string()]),
  whitepaper: z.union([z.instanceof(File), z.string()]),
  litepaper: z.union([z.instanceof(File), z.string()]),
  tokenomics: z.union([z.instanceof(File), z.string()]),
});

/**
 * Type definition for the values derived from the ProjectFormSchema using Zod's infer method.
 */
export type ProjectFormValues = z.infer<typeof ProjectFormSchema>;

/**
 * Type definition for the properties expected by the ProjectNameForm component.
 * @param defaultValues - Initial values for the form fields, based on the ProjectFormSchema.
 * @param onSubmit - Callback function that executes upon form submission.
 * @param onCancel - Callback function that executes to navigate back from the form.
 */
export interface ProjectFormProps {
  defaultValues?: ProjectFormValues;
  onSubmit: (data: ProjectFormValues) => void;
  onCancel: () => void;
}
