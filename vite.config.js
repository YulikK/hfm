import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: 'src',
  build: {
    outDir: 'dist',
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      scopeBehavior: 'local',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
