/**
 * Main UI translations file
 * Combines all translation modules into a single export
 */

import { shared } from './translations/shared';
import { bingo } from './translations/bingo';
import { cards } from './translations/cards';
import { print } from './translations/print';
import { hub } from './translations/hub';
import { privacy } from './translations/privacy';

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

// Combine all translations for each language
export const ui = {
  en: {
    ...shared.en,
    ...bingo.en,
    ...cards.en,
    ...print.en,
    ...hub.en,
    ...privacy.en,
  },
  es: {
    ...shared.es,
    ...bingo.es,
    ...cards.es,
    ...print.es,
    ...hub.es,
    ...privacy.es,
  },
  fr: {
    ...shared.fr,
    ...bingo.fr,
    ...cards.fr,
    ...print.fr,
    ...hub.fr,
    ...privacy.fr,
  },
  pt: {
    ...shared.pt,
    ...bingo.pt,
    ...cards.pt,
    ...print.pt,
    ...hub.pt,
    ...privacy.pt,
  },
} as const;

export type TranslationKey = keyof typeof ui.en;
