#!/usr/bin/env node
// @ts-check

/**
 * Build script for generating localized HTML pages
 * This script runs after Vite build to create language-specific versions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Import translations
const translationsPath = path.join(ROOT_DIR, 'src/js/translations.js');

/**
 * @typedef {'en' | 'es' | 'fr'} Language
 */

const SUPPORTED_LANGUAGES = ['en', 'es', 'fr'];
const DEFAULT_LANGUAGE = 'en';
const BASE_URL = 'https://wombat-apps.com';

// Locale mappings for Open Graph
const OG_LOCALES = {
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR'
};

/**
 * Load translations dynamically
 * @returns {Promise<Record<string, Record<string, string>>>}
 */
async function loadTranslations() {
  const module = await import(translationsPath);
  return module.translations;
}

/**
 * Generate FAQ structured data for a language
 * @param {Record<string, string>} t - Translations for the language
 * @returns {object}
 */
function generateFAQSchema(t) {
  const faqItems = [];
  for (let i = 1; i <= 8; i++) {
    const question = t[`faq_q${i}`];
    const answer = t[`faq_a${i}`];
    if (question && answer) {
      faqItems.push({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer
        }
      });
    }
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems
  };
}

/**
 * Generate SoftwareApplication schema with language
 * @param {Language} lang
 * @param {Record<string, string>} t
 * @returns {object}
 */
function generateAppSchema(lang, t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Bingo!!',
    description: t.meta_description,
    operatingSystem: 'iOS, Android',
    applicationCategory: 'GameApplication',
    inLanguage: lang,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '15000'
    }
  };
}

/**
 * Generate hreflang links for all languages
 * @param {string} pagePath - The page path (e.g., '' for index, 'privacy-policy.html')
 * @returns {string}
 */
function generateHreflangLinks(pagePath) {
  const links = SUPPORTED_LANGUAGES.map(lang => {
    let href = lang === DEFAULT_LANGUAGE
      ? `${BASE_URL}/${pagePath}`
      : `${BASE_URL}/${lang}/${pagePath}`;
    // Remove trailing slash except for root
    href = href.replace(/\/$/, '') || BASE_URL;
    return `    <link rel="alternate" hreflang="${lang}" href="${href}">`;
  });

  // Add x-default pointing to English
  let xDefaultHref = `${BASE_URL}/${pagePath}`.replace(/\/$/, '') || BASE_URL;
  links.push(`    <link rel="alternate" hreflang="x-default" href="${xDefaultHref}">`);

  return links.join('\n');
}

/**
 * Replace content in HTML for a specific language
 * @param {string} html - Original HTML
 * @param {Language} lang - Target language
 * @param {Record<string, string>} translations - Translations for the language
 * @param {string} pagePath - Page path for canonical URL
 * @returns {string}
 */
function localizeHTML(html, lang, translations, pagePath) {
  let result = html;

  // Replace html lang attribute
  result = result.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`);

  // Replace title
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${translations.meta_title}</title>`
  );

  // Replace meta description
  result = result.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${translations.meta_description}">`
  );

  // Replace meta keywords
  result = result.replace(
    /<meta name="keywords" content="[^"]*">/,
    `<meta name="keywords" content="${translations.meta_keywords}">`
  );

  // Replace canonical URL
  const canonicalUrl = lang === DEFAULT_LANGUAGE
    ? `${BASE_URL}/${pagePath}`.replace(/\/$/, '')
    : `${BASE_URL}/${lang}/${pagePath}`.replace(/\/$/, '');
  result = result.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${canonicalUrl}">`
  );

  // Replace Open Graph tags
  result = result.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${translations.og_title}">`
  );
  result = result.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${translations.og_description}">`
  );
  result = result.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="${canonicalUrl}">`
  );
  result = result.replace(
    /<meta property="og:locale" content="[^"]*">/,
    `<meta property="og:locale" content="${OG_LOCALES[lang]}">`
  );

  // Replace Twitter Card tags
  result = result.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${translations.og_title}">`
  );
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${translations.og_description}">`
  );

  // Replace hreflang links
  const hreflangSection = result.match(/<!-- Hreflang -->[\s\S]*?(?=\n\s*<!-- Performance -->)/);
  if (hreflangSection) {
    const newHreflang = `<!-- Hreflang -->\n${generateHreflangLinks(pagePath)}\n\n`;
    result = result.replace(hreflangSection[0], newHreflang);
  }

  // Replace FAQ structured data
  const faqSchema = generateFAQSchema(translations);
  const faqSchemaRegex = /<script type="application\/ld\+json">\s*\{[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?\}\s*<\/script>/;
  result = result.replace(
    faqSchemaRegex,
    `<script type="application/ld+json">\n    ${JSON.stringify(faqSchema, null, 4).split('\n').join('\n    ')}\n    </script>`
  );

  // Replace SoftwareApplication structured data
  const appSchema = generateAppSchema(lang, translations);
  const appSchemaRegex = /<script type="application\/ld\+json">\s*\{[\s\S]*?"@type":\s*"SoftwareApplication"[\s\S]*?\}\s*<\/script>/;
  result = result.replace(
    appSchemaRegex,
    `<script type="application/ld+json">\n    ${JSON.stringify(appSchema, null, 4).split('\n').join('\n    ')}\n    </script>`
  );

  // Replace data-i18n content with translated text
  // This replaces the text content between tags for elements with data-i18n
  for (const [key, value] of Object.entries(translations)) {
    // Match elements with data-i18n="key" and replace their content
    const regex = new RegExp(`(data-i18n="${key}"[^>]*>)[^<]*(</)`, 'g');
    result = result.replace(regex, `$1${value}$2`);
  }

  // Fix asset paths for subdirectories (es/, fr/)
  if (lang !== DEFAULT_LANGUAGE) {
    // Fix relative paths to go up one level
    result = result.replace(/href="\.\/assets\//g, 'href="../assets/');
    result = result.replace(/src="\.\/assets\//g, 'src="../assets/');
    result = result.replace(/href="\.\/images\//g, 'href="../images/');
    result = result.replace(/src="\.\/images\//g, 'src="../images/');

    // Fix privacy policy link
    result = result.replace(/href="\.\/privacy-policy\.html"/g, 'href="../privacy-policy.html"');
    result = result.replace(/href="privacy-policy\.html"/g, 'href="../privacy-policy.html"');
  }

  return result;
}

/**
 * Main build function
 */
async function build() {
  console.log('Starting i18n build...\n');

  // Check if dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error('Error: dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Load translations
  const translations = await loadTranslations();
  console.log('Loaded translations for:', Object.keys(translations).join(', '));

  // Process each HTML file
  const htmlFiles = ['index.html', 'privacy-policy.html'];

  for (const htmlFile of htmlFiles) {
    const srcPath = path.join(DIST_DIR, htmlFile);

    if (!fs.existsSync(srcPath)) {
      console.warn(`Warning: ${htmlFile} not found in dist, skipping...`);
      continue;
    }

    const html = fs.readFileSync(srcPath, 'utf-8');
    const pagePath = htmlFile === 'index.html' ? '' : htmlFile;

    // Process non-default languages
    for (const lang of SUPPORTED_LANGUAGES) {
      if (lang === DEFAULT_LANGUAGE) {
        // Update English version in place with proper hreflang
        const localizedHtml = localizeHTML(html, lang, translations[lang], pagePath);
        fs.writeFileSync(srcPath, localizedHtml);
        console.log(`Updated: ${htmlFile} (${lang})`);
        continue;
      }

      // Create language subdirectory
      const langDir = path.join(DIST_DIR, lang);
      if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true });
      }

      // Generate localized HTML
      const localizedHtml = localizeHTML(html, lang, translations[lang], pagePath);
      const destPath = path.join(langDir, htmlFile);
      fs.writeFileSync(destPath, localizedHtml);
      console.log(`Created: ${lang}/${htmlFile}`);
    }
  }

  // Copy images to language subdirectories (they reference ../images/)
  // Not needed since we're using relative paths that go up

  console.log('\ni18n build complete!');
  console.log(`\nGenerated structure:`);
  console.log(`  dist/`);
  console.log(`  ├── index.html (English)`);
  console.log(`  ├── privacy-policy.html (English)`);
  console.log(`  ├── es/`);
  console.log(`  │   ├── index.html (Spanish)`);
  console.log(`  │   └── privacy-policy.html (Spanish)`);
  console.log(`  └── fr/`);
  console.log(`      ├── index.html (French)`);
  console.log(`      └── privacy-policy.html (French)`);
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
