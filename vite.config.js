import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VERCEL ? '/' : (process.env.NODE_ENV === 'production' ? '/three-d-portfolio-2025/' : '/'),
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['@react-three/fiber', '@react-three/drei', '@react-three/postprocessing']
        }
      }
    }
  }
});
