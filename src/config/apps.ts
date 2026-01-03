/**
 * Centralized configuration for all apps in the Bingo!! family.
 * This eliminates hardcoded values scattered across components.
 */

export type AppName = 'bingo' | 'cards' | 'print';
export type AppNameWithHub = AppName | 'hub';

export interface AppColors {
  /** Primary gradient start color */
  gradientFrom: string;
  /** Primary gradient end color */
  gradientTo: string;
  /** Theme color for meta tags */
  themeColor: string;
  /** Decorative blur circle colors */
  decorativeColors: {
    accent: string;
    secondary: string;
  };
  /** Navigation hover background class */
  hoverBgClass: string;
}

export interface AppStoreLinks {
  ios: string;
  android?: string;
}

export interface AppConfig {
  name: string;
  path: string;
  logo: string;
  heroImage: string;
  ogImage: string;
  colors: AppColors;
  stores: AppStoreLinks;
  applicationCategory: string;
  ratingCount: string;
}

export const apps: Record<AppName, AppConfig> = {
  bingo: {
    name: 'Bingo!!',
    path: '/bingo',
    logo: '/images/bingo-logo.png',
    heroImage: '/images/bigo-hero.png',
    ogImage: '/images/og-bingo.png',
    colors: {
      gradientFrom: '#7424d5',
      gradientTo: '#d34dbc',
      themeColor: '#7424d5',
      decorativeColors: {
        accent: '#ffdf20',
        secondary: '#fda5d5',
      },
      hoverBgClass: 'hover:bg-purple-50',
    },
    stores: {
      ios: 'https://apps.apple.com/app/apple-store/id1505191957?ct=bingo-landing',
      android: 'https://play.google.com/store/apps/details?id=com.wombat.bingoapp',
    },
    applicationCategory: 'GameApplication',
    ratingCount: '15000',
  },
  cards: {
    name: 'Bingo Cards!!',
    path: '/cards',
    logo: '/images/bingo-cards-logo.png',
    heroImage: '/images/bingo-cards-app.png',
    ogImage: '/images/og-cards.png',
    colors: {
      gradientFrom: '#558ffd',
      gradientTo: '#2663db',
      themeColor: '#417cee',
      decorativeColors: {
        accent: '#20dfff',
        secondary: '#a5d5fd',
      },
      hoverBgClass: 'hover:bg-blue-50',
    },
    stores: {
      ios: 'https://apps.apple.com/app/id1510582506?ct=cards-landing',
      android: 'https://play.google.com/store/apps/details?id=com.wombat.bingocards',
    },
    applicationCategory: 'GameApplication',
    ratingCount: '10000',
  },
  print: {
    name: 'Bingo!! Print',
    path: '/print',
    logo: '/images/bingo-print-logo.png',
    heroImage: '/images/bingo-print-hero.png',
    ogImage: '/images/og-print.png',
    colors: {
      gradientFrom: '#558ffd',
      gradientTo: '#2663db',
      themeColor: '#417cee',
      decorativeColors: {
        accent: '#20dfff',
        secondary: '#a5d5fd',
      },
      hoverBgClass: 'hover:bg-blue-50',
    },
    stores: {
      ios: 'https://apps.apple.com/app/id6757099784?ct=print-landing',
    },
    applicationCategory: 'UtilitiesApplication',
    ratingCount: '1000',
  },
} as const;

/** Get app configuration by name */
export function getAppConfig(app: AppName): AppConfig {
  return apps[app];
}

/** Get localized path for an app */
export function getAppPath(app: AppName, lang: string): string {
  const basePath = apps[app].path;
  return lang === 'en' ? `${basePath}/` : `/${lang}${basePath}/`;
}

/** Canonical base URL */
export const CANONICAL_BASE = 'https://wombat-apps.com';
