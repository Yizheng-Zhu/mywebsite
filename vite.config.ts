import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

// 如果你后面要发 GitHub Pages，且仓库不是 username.github.io，
// 记得把 base 改为 '/<你的仓库名>/'。现在可以先不写，等部署前再补。
export default defineConfig({
  plugins: [
    react(),
    mdx()
  ],
  base: '/mywebsite/' // 部署到GitHub Pages时需要设置
})
