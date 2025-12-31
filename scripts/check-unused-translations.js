#!/usr/bin/env node
/**
 * Script to detect unused translation keys
 * Usage: node scripts/check-unused-translations.js
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const SRC_DIR = './src';
const TRANSLATIONS_DIR = './src/i18n/translations';

// Get all translation keys from a file
function getTranslationKeys(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const keys = new Set();

  // Match keys like: key_name: "value" or key_name: 'value'
  const regex = /^\s*(\w+):\s*["'`]/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.add(match[1]);
  }
  return keys;
}

// Get all files recursively
function getAllFiles(dir, extensions) {
  const files = [];
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and translations dir for source search
      if (item !== 'node_modules' && item !== 'translations') {
        files.push(...getAllFiles(fullPath, extensions));
      }
    } else if (extensions.includes(extname(item))) {
      files.push(fullPath);
    }
  }
  return files;
}

// Get all used translation keys from source files
function getUsedKeys(srcDir) {
  const usedKeys = new Set();
  const files = getAllFiles(srcDir, ['.astro', '.ts', '.tsx', '.js', '.jsx']);

  for (const file of files) {
    // Skip translation files themselves
    if (file.includes('/i18n/translations/')) continue;

    const content = readFileSync(file, 'utf-8');

    // Match t('key') or t("key") patterns
    const regex = /t\(['"`](\w+)['"`]\)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      usedKeys.add(match[1]);
    }
  }
  return usedKeys;
}

// Main
function main() {
  console.log('🔍 Checking for unused translations...\n');

  // Get all defined keys from translation files
  const translationFiles = readdirSync(TRANSLATIONS_DIR).filter(f => f.endsWith('.ts'));
  const definedKeys = new Set();

  for (const file of translationFiles) {
    const keys = getTranslationKeys(join(TRANSLATIONS_DIR, file));
    keys.forEach(k => definedKeys.add(k));
  }

  // Get all used keys
  const usedKeys = getUsedKeys(SRC_DIR);

  // Find unused keys
  const unusedKeys = [...definedKeys].filter(k => !usedKeys.has(k));

  if (unusedKeys.length === 0) {
    console.log('✅ All translation keys are being used!\n');
    process.exit(0);
  } else {
    console.log(`⚠️  Found ${unusedKeys.length} unused translation keys:\n`);
    unusedKeys.sort().forEach(k => console.log(`   - ${k}`));
    console.log('\nConsider removing these keys from translation files.\n');
    process.exit(1);
  }
}

main();
