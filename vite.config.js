import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'
// import postcss from 'rollup-plugin-postcss'
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
    // postcss({
    //   minimize: true,
    //   extract: true,
    //   config: {
    //     path: "./postcss.config.js",
    //   },
    // }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components/main.js'),
      name: 'LuiVue',
    },
  },
  rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ['vue'],
    output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      globals: {
        vue: 'Vue',
      },
    },
  },
})
