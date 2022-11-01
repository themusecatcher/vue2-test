import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/less/global.less' // global CSS
import { Toast, Loading, Alert, Confirm } from 'wc-messagebox'
import 'wc-messagebox/style.css'
// import Menu from 'ant-design-vue/lib/menu'
// import 'ant-design-vue/lib/menu/style'
import { Menu } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

Vue.use(Menu)
Vue.use(Toast)
Vue.use(Loading)
Vue.use(Alert)
Vue.use(Confirm)

Vue.prototype.$global = '在new Vue()时绑定到Vue的原型上以便全局使用'

Vue.config.productionTip = false // 默认为true，设置为 false 以阻止 vue 在启动时生成生产提示。

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
