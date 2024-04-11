import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'Shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      'Constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
      'Views': fileURLToPath(new URL('./src/views', import.meta.url)),
      'Styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
    }
  }
});
