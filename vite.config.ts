import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path matches the GitHub Pages project site: /Dental-demo-4/
export default defineConfig({
  plugins: [react()],
  base: '/Dental-demo-4/',
})
