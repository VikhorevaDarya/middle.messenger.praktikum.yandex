import { defineConfig } from 'vite'
import { resolve } from 'path'

import pug from "vite-plugin-pug"
import rollup from 'rollup-plugin-pug'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    pug({ localImports: true }),
    rollup(),
    viteStaticCopy({
      targets: [
        {
          src: 'static',
          dest: ''
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'styles': resolve(__dirname, 'src/styles')
    }
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'sign-in': resolve(__dirname, 'src/pages/SignIn/index.html'),
        'sign-up': resolve(__dirname, 'src/pages/SignUp/index.html'),
        'not-found': resolve(__dirname, 'src/pages/NotFound/index.html'),
        'server-error': resolve(__dirname, 'src/pages/ServerError/index.html'),
        'settings': resolve(__dirname, 'src/pages/Settings/index.html'),
        'chat': resolve(__dirname, 'src/pages/Chat/index.html'),
      }}
  }
}) 
