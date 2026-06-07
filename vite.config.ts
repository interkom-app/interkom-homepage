import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Absolute base: the site is served from the root of a custom domain
// (interkom.app), and deep-link entry points (404.html SPA fallback and
// the pre-rendered /privacy/index.html) need assets to resolve from "/"
// regardless of the request path depth — relative "./assets" would break
// at /privacy/.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
