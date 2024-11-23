import { z } from "zod";

import { ProjectSchema } from "@/project/project.schema";

/**
 * Constructs a schema for the project form by selectively extracting 'name' and 'description' fields from the ProjectSchema.
 */
export const ProjectFormSchema = ProjectSchema.pick({
  name: true,
  description: true,
});

/**
 * Type definition for the values derived from the ProjectFormSchema using Zod's infer method.
 */
export type ProjecFormValues = z.infer<typeof ProjectFormSchema>;

/**
 * Type definition for the properties expected by the ProjectNameForm component.
 * @param defaultValues - Initial values for the form fields, based on the ProjectFormSchema.
 * @param onSubmit - Callback function that executes upon form submission.
 * @param onGoBack - Callback function that executes to navigate back from the form.
 */
export interface ProjectFormProps {
  defaultValues: ProjecFormValues;
  onSubmit: (data: ProjectNameFormValues) => void;
  onGoBack: () => void;
}
