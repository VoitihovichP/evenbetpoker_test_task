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
      'Components': fileURLToPath(new URL('./components', import.meta.url)),
      'Constants': fileURLToPath(new URL('./constants', import.meta.url)),
      'Views': fileURLToPath(new URL('./views', import.meta.url)),
      'Styles': fileURLToPath(new URL('./styles', import.meta.url)),
    }
  }
});
