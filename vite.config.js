import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import WindiCSS from 'vite-plugin-windicss'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    VitePWA({
      manifest: {},
      workbox: {
        // Custom cach strategy config to include in auto generated sw.js
        // runtimeCaching: [
        //   {
        //     urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        //     handler: 'CacheFirst',
        //     options: {
        //       cacheName: 'vue-images',
        //     },
        //   },
        // ],
      },
    }),
  ],
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
