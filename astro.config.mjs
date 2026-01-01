import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wombat-apps.com',
  redirects: {
    '/bingo-print/': '/print/',
    '/es/bingo-print/': '/es/print/',
    '/fr/bingo-print/': '/fr/print/',
    '/pt/bingo-print/': '/pt/print/',
  },
  i18n: {
    locales: ['en', 'es', 'fr', 'pt'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          fr: 'fr',
          pt: 'pt'
        }
      },
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        // Set priorities based on page type
        if (item.url.includes('/privacy-policy')) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        } else if (item.url.includes('/bingo/') || item.url.includes('/cards/') || item.url.includes('/print/')) {
          item.priority = 0.9;
        } else {
          // Home pages (/, /es/, /fr/, /pt/)
          item.priority = 1.0;
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
