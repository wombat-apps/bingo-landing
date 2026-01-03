#!/usr/bin/env node
/**
 * Script to validate content collections
 * Usage: node scripts/check-unused-translations.js
 *
 * Note: All translations have been migrated to Astro Content Collections.
 * Content validation is now handled by Zod schemas in src/content/config.ts
 * during the build process.
 */

import { readdirSync, existsSync } from 'fs';
import { join } from 'path';

const CONTENT_DIR = './src/content';

// Expected content collections
const EXPECTED_COLLECTIONS = [
  'faqs',
  'features',
  'usecases',
  'seo',
  'hero',
  'navigation',
  'cta',
  'appsfamily',
  'team',
  'footer',
  'privacy',
  'ui',
];

// Main
function main() {
  console.log('🔍 Checking content collections...\n');

  if (!existsSync(CONTENT_DIR)) {
    console.log('❌ Content directory not found!\n');
    process.exit(1);
  }

  const collections = readdirSync(CONTENT_DIR).filter(f => {
    const fullPath = join(CONTENT_DIR, f);
    return existsSync(fullPath) && !f.endsWith('.ts');
  });

  let allFound = true;
  const missing = [];
  const found = [];

  for (const expected of EXPECTED_COLLECTIONS) {
    if (collections.includes(expected)) {
      const files = readdirSync(join(CONTENT_DIR, expected));
      found.push({ name: expected, count: files.length });
    } else {
      missing.push(expected);
      allFound = false;
    }
  }

  console.log('📁 Found collections:');
  for (const col of found) {
    console.log(`   ✓ ${col.name}/ (${col.count} files)`);
  }

  if (missing.length > 0) {
    console.log('\n⚠️  Missing collections:');
    for (const m of missing) {
      console.log(`   ✗ ${m}/`);
    }
    console.log('\n');
    process.exit(1);
  }

  console.log('\n✅ All content collections present!\n');
  console.log('Note: Content validation is handled by Zod schemas during build.\n');
  process.exit(0);
}

main();
