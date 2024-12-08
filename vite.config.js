import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/tanesiacodes/', // Your base URL for deployment
  plugins: [react()], // React plugin for Vite
  resolve: {
    alias: {
      'framer-motion': 'framer-motion', // Alias for framer-motion
    },
  },
  optimizeDeps: {
    include: ['framer-motion'], // Ensures framer-motion is pre-bundled for compatibility
  },
});