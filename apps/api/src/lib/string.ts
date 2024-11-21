/**
 * Generates a random string of the specified length.
 * @param length - The length of the random string to generate.
 * @returns A random string of the specified length.
 */
export const generateRandomString = (length: number): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

/**
 * Generates a URL-friendly slug from a given string.
 * @param input - The string to generate a slug from.
 * @returns A URL-friendly slug.
 */
export const generateSlugOf = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
