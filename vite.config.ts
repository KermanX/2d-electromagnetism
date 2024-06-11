import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItMdc from 'markdown-it-mdc'
import Inspect from 'vite-plugin-inspect'
import VuePluginKatex from './plugins/vue-plugin-katex'
import MarkdownItKatex from './plugins/markdown-it-katex'

export default defineConfig({
  base: '/2d-electromagnetism/',
  plugins: [
    Inspect(),
    VuePluginKatex(),
    Markdown({
      markdownItSetup(md) {
        md.use(MarkdownItKatex)
        md.use(MarkdownItMdc)
      }
    }),
    Vue({
      include: [/\.vue$/, /\.vue\?vue/, /\.vue\?v=/, /\.md$/, /\.md\?vue/],
    }),
    UnoCSS({

    }),
  ],
})
