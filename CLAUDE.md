# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual marketing landing page for the Bingo!! mobile apps family (Bingo!!, Bingo!! Lite, and Bingo Cards!!). Built with HTML, Tailwind CSS v4, and vanilla JavaScript using Vite as the build tool.

## Development Commands

```bash
npm run dev       # Start Vite dev server with hot reload
npm run build     # Build production assets to dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint on src/
npm run lint:fix  # Run ESLint with auto-fix
npm run typecheck # Run TypeScript type checking (JS files with JSDoc)
```

## Architecture

### Build System
- **Vite**: Module bundler with Tailwind CSS v4 plugin (`@tailwindcss/vite`)
- Source files in root (`index.html`, `privacy-policy.html`) reference `/src/` paths
- Production build outputs to `dist/`
- Deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to main

### Styling
- **Tailwind CSS v4**: Using new CSS-first configuration via `@theme` directive in `src/styles/main.css`
- Custom colors: `bingo-purple` (#822ad2), `bingo-blue` (#557cbf), `bingo-pink` (#e91e63)
- Custom font: Inter (loaded via Google Fonts)

### Internationalization
- `src/js/translations.js`: Translation strings for en, es, fr + store badge URLs per language
- `src/js/i18n.js`: Handles language switching, localStorage persistence, and DOM updates
- HTML elements use `data-i18n="key"` attributes for translatable content
- Language stored in localStorage under `bingo-language` key

### JavaScript Entry Points
- `src/js/main.js`: Main entry point, imports and initializes i18n
- `src/js/i18n.js`: Core initialization via `initI18n()` which sets up:
  - Language from localStorage or browser default
  - Language selector in header
  - FAQ accordion
  - Reviews carousel (responsive, auto-play)
  - Smooth scroll navigation
  - Mobile menu

### Type Checking
- Uses TypeScript (`tsconfig.json`) to check JavaScript files via JSDoc annotations
- ESLint configured with TypeScript-ESLint for linting

## Key Development Notes

### Adding Translations
1. Add keys to all three language objects in `src/js/translations.js`
2. Use `data-i18n="your_key"` on HTML elements
3. For images, the alt text uses the translation; store badges have special handling via CSS classes `app-store-badge` and `google-play-badge`

### Multi-Page Setup
Vite is configured with multiple entry points in `vite.config.js`:
```js
rollupOptions: {
  input: {
    main: 'index.html',
    privacy: 'privacy-policy.html'
  }
}
```
Add new pages here when needed.

### Styling Conventions
- Section padding: `py-20`
- Section titles: `text-4xl md:text-5xl font-bold mb-16`
- Responsive breakpoints: `md:` (768px), `lg:` (1024px)
- Interactive elements: `transition-*` classes with hover effects

## Commit Messages
- Use conventional commits: `type: description` (e.g., `feat: add dark mode`, `fix: resolve mobile layout`)
- NEVER include Claude attribution in commit messages
