import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
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
