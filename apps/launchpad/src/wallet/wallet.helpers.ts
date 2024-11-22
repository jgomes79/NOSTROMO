/**
 * Trims a hexadecimal string to a specified length and adds ellipsis.
 *
 * @param hex - The original hex string.
 * @param length - The number of characters to keep at the beginning and end of the string.
 * @returns A formatted string like "Abcx....03845".
 */
export function shortHex(hex: string, length = 4): string {
  if (hex.length <= 2 * length + 3) {
    return hex;
  }
  const start = hex.slice(0, length);
  const end = hex.slice(-length);
  return `${start}....${end}`;
}
