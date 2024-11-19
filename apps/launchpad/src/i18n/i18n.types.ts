/**
 * Enum representing supported locales in the application.
 */
export enum Locale {
  EN = "en",
  ES = "es",
}

/**
 * Type definition for locale resources.
 *
 * @typedef {Object} LocaleResources
 * @property {Object} [Locale] - An object with translations for each supported locale.
 * @property {Object} [Locale].translation - An object containing key-value pairs of translations.
 */
export type LocaleResources = Record<Locale, { translation: Record<string, string> }>;
