# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multilingual marketing landing page for the Bingo!! mobile apps family (Bingo!!, Bingo!! Cards, and Bingo!! Print). Built with Astro, Tailwind CSS v4, and TypeScript. Deploys to wombat-apps.com via GitHub Pages.

## Development Commands

```bash
npm run dev                # Start Astro dev server with hot reload
npm run build              # Build production assets to dist/
npm run preview            # Preview production build locally
npm run lint               # Run ESLint on src/
npm run lint:fix           # Run ESLint with auto-fix
npm run typecheck          # Run Astro type checking
npm run check:collections  # Validate content collections exist
```

## Architecture

### Build System
- **Astro**: Static site generator with file-based routing
- **Tailwind CSS v4**: Via Vite plugin (`@tailwindcss/vite`)
- **ESLint**: With `eslint-plugin-astro` for `.astro`, `.ts`, and `.js` files
- Production build outputs to `dist/`
- Deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to main
- Uses `patch-package` for dependency patches (runs automatically via `postinstall`)

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
- **Language utilities** (`src/i18n/`):
  - `ui.ts`: Language definitions, `Language` type, and app store badge URLs
  - `utils.ts`: Helper functions (`toLanguage`, `getLocalizedPath`, `getAppStoreBadge`, etc.)

### Content Collections (Primary Content System)
All translatable content lives in `src/content/` as YAML files with Zod schemas in `src/content/config.ts`.

**App-specific collections** (named `{app}-{locale}.yaml`):
- `faqs/`: FAQ sections with questions/answers
- `features/`: Feature highlights with icons
- `usecases/`: Use case cards with icons
- `seo/`: Meta tags, Open Graph data (supports `hub`)
- `hero/`: Headlines, subtitles, tags (supports `hub`)
- `navigation/`: Navigation menu items (supports `hub`)
- `cta/`: Call-to-action sections

**Locale-only collections** (named `{locale}.yaml`):
- `appsfamily/`: Apps showcase section
- `team/`: Team member info
- `footer/`: Footer links and text
- `privacy/`: Privacy policy content
- `ui/`: UI strings (buttons, accessibility labels)

**Helpers** in `src/content/helpers.ts`:
```typescript
// App + locale helpers
getFaqs(app, locale), getFeatures(app, locale), getUseCases(app, locale)
getCta(app, locale), getSeo(app, locale), getHero(app, locale), getNavigation(app, locale)

// Locale-only helpers
getAppsFamily(locale), getTeam(locale), getFooter(locale), getPrivacy(locale), getUi(locale)
```

### App Configuration
Centralized app config in `src/config/apps.ts`:
- Store URLs, colors, logos, paths for each app (bingo, cards, print)
- Use `getAppConfig(app)` and `getAppPath(app, lang)` helpers

### Page Structure
- **Components**: Reusable templates in `src/components/`
  - `WombatHubPage.astro`: Main hub page
  - `BingoLandingPage.astro`, `CardsLandingPage.astro`, `PrintLandingPage.astro`: App landing pages
  - `PrivacyPage.astro`: Privacy policy template
  - Components use `Astro.currentLocale` via `toLanguage()` helper
- **Routes**: File-based in `src/pages/`
  - `index.astro` → `/` (hub, has `enableAutoRedirect`)
  - `bingo/`, `cards/`, `print/` → app landing pages
  - `[locale]/` → dynamic routes for non-English locales

### Types
Centralized types in `src/types/index.ts`:
- `AppName`: `'bingo' | 'cards' | 'print'`
- `AppNameWithHub`: `AppName | 'hub'`
- Interfaces for content structures (FaqItem, FeatureItem, etc.)

## Key Development Notes

### Adding/Editing Content
1. Edit YAML files in `src/content/{collection}/`
2. Follow schema in `src/content/config.ts`
3. Run `npm run build` to validate schemas (Zod validates at build time)
4. Run `npm run check:collections` to verify all required files exist

### Adding New Languages
1. Add language to `languages` object in `src/i18n/ui.ts`
2. Add to `locales` array in `astro.config.mjs`
3. Create YAML files for all content collections with the new locale
4. Dynamic routes (`[locale]/`) will automatically generate pages

### Adding New Pages
1. Create English page: `src/pages/new-page.astro`
2. Create dynamic route for other locales: `src/pages/[locale]/new-page.astro` with `getStaticPaths()`
3. Each page imports and renders a shared component from `src/components/`

### SEO
- Each page includes meta tags, Open Graph, Twitter Card, and JSON-LD structured data
- Hreflang links automatically generated for language alternates
- Sitemap dynamically generated via `@astrojs/sitemap` integration
- Static LLM documentation at `public/llms.txt`

### Redirects
Legacy routes configured in `astro.config.mjs`:
- `/bingo-print/` → `/print/` (all locales)

## Commit Messages
- Use conventional commits: `type: description` (e.g., `feat: add dark mode`, `fix: resolve mobile layout`)
- NEVER include Claude attribution in commit messages
