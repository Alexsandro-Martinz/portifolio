import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portifolio",
  server: {
    port: '8080'
  },
  assetsInclude: ['**/*.docx'],
})
