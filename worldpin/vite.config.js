import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoprefixer from 'autoprefixer'

import tailwindConfig from './tailwind.config'
import tailwind from 'tailwindcss'

// https://vitejs.dev/config/

// https://vitejs.dev/config/
export default defineConfig({
  
  base: '',
  plugins: [svelte()],

  server: {
    hmr: {
      clientPort: process.env.HMR_HOST ? 443 : 5173,
      host: process.env.HMR_HOST
        ? process.env.HMR_HOST.substring("https://".length)
        : "localhost",
    },
  },
  css: {
    postcss: {
      plugins: [ tailwind(tailwindConfig), autoprefixer],
    }
  },

  
})