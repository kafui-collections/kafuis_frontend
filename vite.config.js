import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/kafuis_frontend/',  // ✅ MUST HAVE THIS!
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
