import { defineConfig } from 'vite'
import path from 'path'

import pug from 'vite-plugin-pug'
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
          dest: '',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        'sign-in': path.resolve(__dirname, 'src/pages/SignIn/index.html'),
        'sign-up': path.resolve(__dirname, 'src/pages/SignUp/index.html'),
        'not-found': path.resolve(__dirname, 'src/pages/NotFound/index.html'),
        'server-error': path.resolve(__dirname, 'src/pages/ServerError/index.html'),
        settings: path.resolve(__dirname, 'src/pages/Settings/index.html'),
        chat: path.resolve(__dirname, 'src/pages/Chat/index.html'),
      },
    },
  },
})
