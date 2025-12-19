import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

/**
 * Plugin to run i18n build after Vite build completes
 * @returns {import('vite').Plugin}
 */
function i18nPlugin() {
  return {
    name: 'i18n-build',
    closeBundle: async () => {
      console.log('\nRunning i18n build...')
      try {
        const { stdout, stderr } = await execAsync('node scripts/build-i18n.js')
        if (stdout) console.log(stdout)
        if (stderr) console.error(stderr)
      } catch (error) {
        console.error('i18n build failed:', error.message)
        throw error
      }
    }
  }
}

export default defineConfig({
  plugins: [tailwindcss(), i18nPlugin()],
  publicDir: 'public',
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy-policy.html'
      }
    }
  }
})
