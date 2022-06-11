import { createApp } from 'vue'
// @ts-ignore
import App    from './App.vue'
import router from './router'
import { createStore } from 'vuex'
// import store  from './store/index'
import Antd from 'ant-design-vue';
import apps from './micro-app'
import 'ant-design-vue/dist/antd.css';
import { registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
import './actions'

// 注册微应用
registerMicroApps(apps)

// 全局的未捕获异常处理器
addGlobalUncaughtErrorHandler(event => {
  console.log(event)
})
const app = createApp(App)
app.use(router)
    .use(Antd).mount('#app')
