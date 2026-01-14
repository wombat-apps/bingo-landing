/**
 * Centralized type definitions for the Bingo!! landing pages.
 */

import type { Language } from '../i18n/ui';

// Re-export Language for convenience
export type { Language };

/** App names for the Bingo!! family */
export type AppName = 'bingo' | 'cards' | 'print' | 'voice-generator';
export type AppNameWithHub = AppName | 'hub';

/** FAQ item structure */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Feature item structure */
export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

/** Use case item structure */
export interface UseCaseItem {
  title: string;
  description: string;
  icon: string;
}

/** Navigation item structure */
export interface NavigationItem {
  key: string;
  label: string;
}

/** Hero tag structure */
export interface HeroTag {
  label: string;
}

/** SEO meta structure */
export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
}

/** SEO Open Graph structure */
export interface SeoOg {
  title: string;
  description: string;
}

/** Complete SEO data structure */
export interface SeoData {
  meta: SeoMeta;
  og: SeoOg;
}

/** Hero section data structure */
export interface HeroData {
  headline: string;
  subtitle: string;
  subtitleCta?: string;
  tags?: HeroTag[];
}

/** Navigation data structure */
export interface NavigationData {
  items: NavigationItem[];
}

/** UI strings structure */
export interface UiData {
  orgDescription: string;
  buttons: {
    downloadOnAppstore: string;
    getItOnGoogle: string;
    downloadFree?: string;
    comingSoon?: string;
  };
  accessibility: {
    skipToContent: string;
    toggleMenu: string;
  };
  downloadSamples?: {
    sample75: string;
    sample90: string;
  };
}
