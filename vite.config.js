import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'

import path from 'path'

export default defineConfig({
  server: {
    https: true,
    host: `local.kellby.me`,
  },
  plugins: [
    basicSsl(),
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.jsx'],
      refresh: true,
    }),
    react({
      babel: {
        plugins: [
          `@babel/plugin-syntax-dynamic-import`,
          // `babel-plugin-styled-components`,
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      'tailwind.config.js': path.resolve(__dirname, `tailwind.config.js`),
      '@Components': `/resources/js/Components`,
      '@Contexts': `/resources/js/Contexts`,
      '@Layouts': `/resources/js/Layouts`,
      '@Pages': `/resources/js/Pages`,
      '@Lib': `/resources/js/Lib`,
      '@Styles': `/resources/js/Styles`,
      '@Utils': `/resources/js/Utils`,
      '@Hooks': `/resources/js/Hooks`,
    },
  },
  optimizeDeps: {
    include: `tailwind.config.js`,
  },
  build: {
    commonjsOptions: {
      include: [`tailwind.config.js`, `node_modules/**`],
      // transformMixedEsModules: true,
    },
  },
})
