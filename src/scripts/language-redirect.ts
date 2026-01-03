/**
 * Auto-redirect based on browser language preference.
 * This script should be used with is:inline for immediate execution.
 */

export function initLanguageRedirect(basePath: string): void {
  const currentPath = window.location.pathname;
  const expectedPaths = [`${basePath}/`, `${basePath}/index.html`];

  if (!expectedPaths.includes(currentPath)) return;

  const noRedirect = new URLSearchParams(window.location.search).has('noredirect');
  const hasStoredLang = localStorage.getItem('preferred-language');

  if (noRedirect || hasStoredLang) return;

  const browserLang = navigator.language.split('-')[0];
  const supportedLangs = ['es', 'fr', 'pt'];

  if (supportedLangs.includes(browserLang)) {
    window.location.href = `/${browserLang}${basePath}/`;
  }
}
