import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development', // Moved inside the config
  plugins: [vue(), vueDevTools(),],
})

