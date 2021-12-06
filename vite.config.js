import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'
const path = require('path')

export default defineConfig({
  plugins: [
    eslintPlugin(),
    vue(),
    visualizer({
      filename: './dist/report.html',
      open: true,
      brotliSize: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components/main.js'),
      name: 'LuiVue',
      fileName: (format) => `lui-vue.${format}.js`
    },
  },
  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      },
    },
  },
})
