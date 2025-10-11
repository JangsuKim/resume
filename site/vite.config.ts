import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  // ✅ GitHub Pages용 base 경로
  base: '/JangsuKim/',

  plugins: [
    vue(),
    vueDevTools(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // ✅ 빌드 출력 위치 (루트의 docs 폴더)
  build: {
    outDir: '../docs',
    emptyOutDir: true, // 기존 빌드 결과 자동 정리 (선택사항)
  },
})
