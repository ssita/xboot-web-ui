import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
// 按需加载插件
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    VueJsx(),
    Components({
    resolvers: [AntDesignVueResolver()],})
  ],
  server: {
    proxy: {
      '/v1': {
        target: 'http://127.0.0.1',
        changeOrigin: true
      }
    },
    open: true,
    port: 8023
  }
})
