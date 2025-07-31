# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for the Bingo!! mobile apps family (Bingo!!, Bingo!! Lite, and Bingo!! Cards). It's a multilingual marketing site built with vanilla HTML, CSS (Tailwind), and JavaScript.

## Architecture

- **Static Site**: No build process - files are served directly
- **Styling**: Tailwind CSS via CDN with custom color scheme (bingo-purple: #822ad2, bingo-blue: #557cbf, bingo-pink: #e91e63)
- **Internationalization**: Custom i18n system with localStorage persistence
  - `translations.js`: Contains translation keys for English, Spanish, and French
  - `i18n.js`: I18n class that handles language switching and DOM updates
  - Elements use `data-i18n` attributes for translation keys

## File Structure

- `index.html`: Main landing page with app download sections, features, team info
- `terms.html`: Terms and conditions/privacy policy page (links from footer)
- `translations.js`: Translation strings for all supported languages (en, es, fr)
- `i18n.js`: Internationalization logic and language selector
- `images/`: All marketing assets, screenshots, team photos, tutorial images

## Development Commands

No build process required. Open `index.html` directly in browser or serve with any static server:

```bash
# Simple local server options:
python -m http.server 8000
# or
npx serve .
```

## Key Development Notes

### Adding New Content

1. **Add translation keys** to `translations.js` for all three languages (en, es, fr)
2. **Use `data-i18n` attributes** in HTML elements for translatable content
3. **Maintain consistent styling** with existing Tailwind classes and custom color scheme

### Adding New Pages

- Follow `terms.html` pattern: include Tailwind config, maintain consistent header/footer
- Add navigation links in appropriate sections (typically footer)
- Use same color scheme and typography patterns

### Image Management

- All images stored in `images/` directory
- Use descriptive filenames
- Maintain consistent sizing and quality across similar image types

### Styling Conventions

- Use custom color variables: `bingo-purple`, `bingo-blue`, `bingo-pink`
- Consistent spacing with Tailwind: `py-20` for section padding, `mb-16` for section titles
- Responsive design with `md:` and `lg:` breakpoints
- Hover effects on interactive elements with `transition-*` classes

## Commit Messages
- Use conventional commits format: `type: description` (e.g., `feat: add dark mode`, `fix: resolve mobile layout`)
- Keep messages concise and descriptive
- NEVER include Claude attribution in commit messages
- No "🤖 Generated with [Claude Code]" or "Co-Authored-By: Claude"