import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/adasa-photography-blog/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      ignored: ['**/*.mp4', '**/*.mov', '**/*.avi', '**/*.mkv', '**/*.webm'],
    },
  },
})
