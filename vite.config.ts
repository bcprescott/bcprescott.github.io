import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' must be '/' for user-sites (username.github.io) so that asset paths
  // resolve correctly when deep-linked URLs are loaded via the SPA 404 redirect.
  // './' (relative) would break because after replaceState the browser resolves
  // relative paths against the wrong directory (e.g., /blog/assets/... instead of /assets/...).
  base: '/',
})