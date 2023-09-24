import { defineConfig } from 'vite'
import { resolve } from 'path'

import pug from "vite-plugin-pug"

export default defineConfig({
  plugins: [pug()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'styles': resolve(__dirname, 'src/styles')
    }
  }
}) 