import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  server: {
    port: 3010,
  },
  resolve: {
    alias: {
      // Added to handle template for the FadeBanner component
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
})
