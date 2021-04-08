import Vue from 'vue'                    // 引入 Vue 框架，来自 node_modules
import App from './App.vue'              // 引入 App.vue 组件 （根组件 src/App.vue）
import router from './router'            // 引入路由 （src/router）
import store from './store'              // 引入 store 资源 （src/store）               
import VueAxios from 'vue-axios'         // 引入 vue-axios Vue 集成的 axios 作用方法
import axios from 'axios'                // 引入 axios 插件

import '@/assets/javascript/flexible.js'  // 可视窗口适配方法
import '@/assets/styles/base.css'         // 初始化样式文件
import '@/assets/styles/iconFont.css'     // 引入字体图标样式

Vue.config.productionTip = false
Vue.prototype.axios = axios


new Vue({
  router,
  store,
	VueAxios,
  render: h => h(App)
}).$mount('#app')
