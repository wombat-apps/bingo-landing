import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import astroLlmsTxt from '@4hse/astro-llms-txt';

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
    }),
    astroLlmsTxt({
      title: 'Wombat Apps',
      description: 'Marketing landing pages for the Bingo!! mobile apps family - Bingo!!, Bingo!! Cards, and Bingo!! Print. Fun bingo games for iOS and Android.',
      notes: '- This content is auto-generated from the official Wombat Apps website.',
      optionalLinks: [
        {
          label: 'App Store (Bingo!!)',
          url: 'https://apps.apple.com/app/id1505191957',
          description: 'Download Bingo!! on iOS'
        },
        {
          label: 'Google Play (Bingo!!)',
          url: 'https://play.google.com/store/apps/details?id=com.wombat.bingoapp',
          description: 'Download Bingo!! on Android'
        },
        {
          label: 'App Store (Bingo!! Cards)',
          url: 'https://apps.apple.com/app/id1510582506',
          description: 'Download Bingo!! Cards on iOS'
        },
        {
          label: 'Google Play (Bingo!! Cards)',
          url: 'https://play.google.com/store/apps/details?id=com.wombat.bingocards',
          description: 'Download Bingo!! Cards on Android'
        }
      ],
      docSet: [
        {
          title: 'Full Site Documentation',
          description: 'Complete Wombat Apps website content',
          url: '/llms-full.txt',
          // English pages only: '' = root hub page (exclude es/, fr/, pt/ translations)
          include: ['', 'bingo/', 'cards/', 'print/', 'privacy-policy/'],
          mainSelector: 'body',
          ignoreSelectors: ['nav', 'footer', 'script', 'style', '.sr-only']
        },
        {
          title: 'Site Structure',
          description: 'Compact overview of site structure',
          url: '/llms-small.txt',
          // English pages only: '' = root hub page (exclude es/, fr/, pt/ translations)
          include: ['', 'bingo/', 'cards/', 'print/', 'privacy-policy/'],
          onlyStructure: true,
          mainSelector: 'body',
          ignoreSelectors: ['nav', 'footer', 'script', 'style', '.sr-only']
        }
      ]
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
