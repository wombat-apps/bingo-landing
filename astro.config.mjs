import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wombat-apps.com',
  i18n: {
    locales: ['en', 'es', 'fr', 'pt', 'fil'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
