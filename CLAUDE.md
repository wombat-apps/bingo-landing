# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multilingual marketing landing page for the Bingo!! mobile apps family (Bingo!!, Bingo!! Lite, and Bingo Cards!!). Built with Astro, Tailwind CSS v4, and TypeScript.

## Development Commands

```bash
npm run dev                # Start Astro dev server with hot reload
npm run build              # Build production assets to dist/
npm run preview            # Preview production build locally
npm run lint               # Run ESLint on src/
npm run lint:fix           # Run ESLint with auto-fix
npm run typecheck          # Run Astro type checking
npm run check:translations # Check for unused translation keys
```

## Architecture

### Build System
- **Astro**: Static site generator with file-based routing
- **Tailwind CSS v4**: Via Vite plugin (`@tailwindcss/vite`)
- **ESLint**: With `eslint-plugin-astro` for `.astro`, `.ts`, and `.js` files
- Production build outputs to `dist/`
- Deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to main

### Styling
- **Tailwind CSS v4**: CSS-first configuration via `@theme` directive in `src/styles/global.css`
- Custom colors: `bingo-purple` (#822ad2), `bingo-blue` (#557cbf), `bingo-pink` (#e91e63)
- Custom font: Inter (loaded via Google Fonts)
- Section padding: `py-20`, titles: `text-4xl md:text-5xl font-bold mb-16`
- Breakpoints: `md:` (768px), `lg:` (1024px)

### Internationalization
- **Supported languages**: English (default), Spanish, French, Portuguese
- **URL routing**: `/` (en), `/es/`, `/fr/`, `/pt/` - configured in `astro.config.mjs`
- **Dynamic routes**: Non-default locales use `[locale]/` pattern for automatic generation
- **Translation files**:
  - `src/i18n/ui.ts`: All translation strings for en, es, fr, pt
  - `src/i18n/utils.ts`: Helper functions (`useTranslations`, `toLanguage`, `getLocalizedPath`, etc.)

### Page Structure
- **Components**: Reusable templates in `src/components/`
  - `WombatHubPage.astro`: Main hub page (apps showcase, team, footer)
  - `BingoLandingPage.astro`: Bingo!! app landing page
  - `CardsLandingPage.astro`: Bingo!! Cards app landing page
  - `PrintLandingPage.astro`: Bingo!! Print app landing page
  - `PrivacyPage.astro`: Privacy policy template
  - `AppsFamilySection.astro`: Reusable apps showcase section
  - Components use `Astro.currentLocale` via `toLanguage()` helper
- **Routes**: File-based in `src/pages/`
  - `index.astro` → `/` (Wombat Apps hub, has `enableAutoRedirect`)
  - `bingo/index.astro` → `/bingo` (Bingo!! landing)
  - `cards/index.astro` → `/cards` (Bingo!! Cards landing)
  - `print/index.astro` → `/print` (Bingo!! Print landing)
  - `privacy-policy.astro` → `/privacy-policy`
  - `[locale]/index.astro` → `/es/`, `/fr/`, `/pt/` (hub dynamic route)
  - `[locale]/bingo/`, `[locale]/cards/`, `[locale]/print/` → app landings per locale
  - `[locale]/privacy-policy.astro` → privacy policy per locale

## Key Development Notes

### Adding Translations
1. Add keys to all four language objects in `src/i18n/ui.ts`
2. Use in components: `const t = useTranslations(lang); t('your_key')`
3. For localized links: `getLocalizedPath(lang, '/path')`
4. Run `npm run check:translations` to verify no unused keys remain

### Removing Translations
When removing UI elements that use translations:
1. Remove the usage from the component (e.g., `t('key_name')`)
2. Remove the key from ALL four language objects in translation files
3. Run `npm run check:translations` to verify cleanup is complete
4. The CI/CD pipeline will fail if unused translation keys are detected

### Adding New Languages
1. Add the language to `languages` object in `src/i18n/ui.ts`
2. Add all translation keys for the new language
3. Dynamic routes (`[locale]/`) will automatically generate pages for the new language

### Adding New Pages
1. Create English page: `src/pages/new-page.astro`
2. Create dynamic route for other locales: `src/pages/[locale]/new-page.astro` with `getStaticPaths()`
3. Each page imports and renders a shared component from `src/components/`

### SEO
- Each page includes meta tags, Open Graph, Twitter Card, and JSON-LD structured data
- Hreflang links automatically generated for language alternates
- Sitemap dynamically generated via `@astrojs/sitemap` integration (outputs to `dist/sitemap-index.xml` at build)

## Commit Messages
- Use conventional commits: `type: description` (e.g., `feat: add dark mode`, `fix: resolve mobile layout`)
- NEVER include Claude attribution in commit messages
