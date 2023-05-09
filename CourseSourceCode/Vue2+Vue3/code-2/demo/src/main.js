import Vue from 'vue' // ES6导入方式
import App from './App.vue' // 导入根组件APP
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false // 阻止启动生产消息

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
