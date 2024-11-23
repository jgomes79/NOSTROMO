import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

import { IsFile } from "@/lib/decorators/file.decorators";

/**
 * Represents the data transfer object for creating a project.
 * This class is responsible for handling the input data when a new project is created.
 * It includes validations to ensure that the data received is in the correct format.
 */
export class CreateProjectDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsFile({ mimeTypes: ["image/jpeg", "image/png", "image/jpg", "image/gif"] })
  @Type(() => File)
  photo: File;

  @IsFile({ mimeTypes: ["image/jpeg", "image/png", "image/jpg", "image/gif"] })
  @Type(() => File)
  banner: File;

  @IsFile({ mimeTypes: ["application/pdf"] })
  @Type(() => File)
  whitepaper: File;

  @IsFile({ mimeTypes: ["application/pdf"] })
  @Type(() => File)
  litepaper: File;

  @IsFile({ mimeTypes: ["application/pdf"] })
  @Type(() => File)
  tokenomics: File;

  @IsNumber()
  tokensCreated: number;

  @IsNumber()
  tokenPrice: number;

  @IsNumber()
  amountToRise: number;

  @IsUrl()
  instagramUrl: string;

  @IsUrl()
  xUrl: string;

  @IsUrl()
  telegramUrl: string;

  @IsUrl()
  mediumUrl: string;
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
