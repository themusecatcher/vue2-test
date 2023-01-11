import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/globalUse.js' // global use
import '@/assets/less/global.less' // global CSS

Vue.prototype.$global = '在new Vue()时绑定到Vue的原型上以便全局使用'

Vue.config.productionTip = false // 默认为true，设置为 false 以阻止 vue 在启动时生成生产提示。

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
