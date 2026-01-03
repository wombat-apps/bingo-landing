import { getCollection, type CollectionEntry } from 'astro:content';
import type { Language, AppName, AppNameWithHub } from '../types';

type AppLocaleCollection = 'faqs' | 'features' | 'usecases' | 'cta';
type AppLocaleWithHubCollection = 'seo' | 'hero' | 'navigation';
type LocaleOnlyCollection = 'appsfamily' | 'team' | 'footer' | 'privacy' | 'ui';

// Factory for app+locale collections (without hub support)
function createAppLocaleHelper<T extends AppLocaleCollection>(collection: T) {
  return async function (app: AppName, locale: Language) {
    const all = await getCollection(collection);
    const item = all.find(
      (entry: CollectionEntry<T>) => entry.data.app === app && entry.data.locale === locale
    );
    return item?.data ?? null;
  };
}

// Factory for app+locale collections (with hub support)
function createAppLocaleWithHubHelper<T extends AppLocaleWithHubCollection>(collection: T) {
  return async function (app: AppNameWithHub, locale: Language) {
    const all = await getCollection(collection);
    const item = all.find(
      (entry: CollectionEntry<T>) => entry.data.app === app && entry.data.locale === locale
    );
    return item?.data ?? null;
  };
}

// Factory for locale-only collections
function createLocaleHelper<T extends LocaleOnlyCollection>(collection: T) {
  return async function (locale: Language) {
    const all = await getCollection(collection);
    const item = all.find((entry: CollectionEntry<T>) => entry.data.locale === locale);
    return item?.data ?? null;
  };
}

// App+locale helpers (without hub)
export const getFaqs = createAppLocaleHelper('faqs');
export const getFeatures = createAppLocaleHelper('features');
export const getUseCases = createAppLocaleHelper('usecases');
export const getCta = createAppLocaleHelper('cta');

// App+locale helpers (with hub support)
export const getSeo = createAppLocaleWithHubHelper('seo');
export const getHero = createAppLocaleWithHubHelper('hero');
export const getNavigation = createAppLocaleWithHubHelper('navigation');

// Locale-only helpers
export const getAppsFamily = createLocaleHelper('appsfamily');
export const getTeam = createLocaleHelper('team');
export const getFooter = createLocaleHelper('footer');
export const getPrivacy = createLocaleHelper('privacy');
export const getUi = createLocaleHelper('ui');
