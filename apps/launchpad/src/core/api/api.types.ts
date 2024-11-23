/**
 * Represents the names of the services available.
 *
 */
export type ServiceNames = "projects-service" | "auth-service";

/**
 * Represents an error message.
 *
 * @interface ErrorMessage
 * @property {number} code - The error code.
 * @property {string} message - The error message.
 */
export interface ErrorMessage {
  code: number;
  message: string;
}
