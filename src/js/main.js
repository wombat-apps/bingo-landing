/**
 * Main entry point for Bingo!! Landing Page
 */
import { initI18n, destroyI18n } from './i18n.js';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
});

// Handle Vite hot module replacement to prevent memory leaks
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    destroyI18n();
  });
}
