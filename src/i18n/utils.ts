import { getRelativeLocaleUrl } from 'astro:i18n';
import { ui, defaultLang, type Language, type TranslationKey, appStoreBadges, googlePlayBadges } from './ui';

const ogLocaleMap: Record<Language, string> = {
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
};

export function toLanguage(locale: string | undefined): Language {
  if (locale && locale in ui) return locale as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: Language, path: string): string {
  return getRelativeLocaleUrl(lang, path);
}

export function getAppStoreBadge(lang: Language): string {
  return appStoreBadges[lang];
}

export function getGooglePlayBadge(lang: Language): string {
  return googlePlayBadges[lang];
}

export function getOgLocale(lang: Language): string {
  return ogLocaleMap[lang];
}

export function getAlternateLocales(currentLang: Language): string[] {
  return Object.entries(ogLocaleMap)
    .filter(([lang]) => lang !== currentLang)
    .map(([, locale]) => locale);
}
