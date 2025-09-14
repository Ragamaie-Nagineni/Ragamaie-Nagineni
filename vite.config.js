import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ragamaie-Nagineni-Portfolio/', // Make sure this matches EXACTLY
  build: {
    outDir: 'dist',
  }
})