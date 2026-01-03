/**
 * UI configuration file
 * Contains language definitions and app store badge URLs
 *
 * Note: All translation content has been migrated to Astro Content Collections
 * See src/content/ for YAML-based content
 */

export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
} as const;

export const defaultLang = 'en' as const;

export type Language = keyof typeof languages;

export const appStoreBadges: Record<Language, string> = {
  en: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1570838400',
  es: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/es-es?size=250x83&releaseDate=1570838400',
  fr: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83&releaseDate=1570838400',
  pt: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/pt-br?size=250x83&releaseDate=1570838400',
};

export const googlePlayBadges: Record<Language, string> = {
  en: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
  es: 'https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png',
  fr: 'https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png',
  pt: 'https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png',
};
