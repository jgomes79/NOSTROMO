import { IsNotEmpty, IsString } from "class-validator";

/**
 * Data Transfer Object for creating a project.
 */
export class CreateProjectDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}

/**
 * Data Transfer Object for editing a project.
 */
export class EditProjectDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}
