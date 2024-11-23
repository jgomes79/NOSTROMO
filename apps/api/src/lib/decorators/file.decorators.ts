import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";

/**
 * Decorator that validates if a property is a file with specific MIME types.
 *
 * @param options - Configuration object specifying the acceptable MIME types.
 * @param validationOptions - Additional validation options.
 * @returns A decorator function that adds file type validation to a class property.
 */
export function IsFile(options: { mimeTypes: string[] }, validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isFile",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [options],
      options: validationOptions,
      validator: {
        validate(value: unknown, args: ValidationArguments) {
          const [constraints] = args.constraints;
          const file = value as Express.Multer.File;
          if (!file) return false;
          return constraints.mimeTypes.includes(file.mimetype);
        },
        defaultMessage(args: ValidationArguments) {
          const [constraints] = args.constraints;
          return `The file must be one of the following types: ${constraints.mimeTypes.join(", ")}`;
        },
      },
    });
  };
}
