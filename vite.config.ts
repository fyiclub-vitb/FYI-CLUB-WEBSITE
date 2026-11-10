import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Keep the official logo at a stable path while hashing other built assets.
        assetFileNames: (assetInfo) => assetInfo.name === 'fyi-logo.jpg'
          ? 'fyi-logo.jpg'
          : 'assets/[name]-[hash][extname]',
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
