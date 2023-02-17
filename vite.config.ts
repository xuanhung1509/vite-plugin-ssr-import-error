import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
})
