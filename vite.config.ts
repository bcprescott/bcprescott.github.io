import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' is crucial for GitHub Pages. 
  // './' allows it to work in a subdirectory (e.g., username.github.io/repo-name)
  base: './', 
})