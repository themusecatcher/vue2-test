import Vue from 'vue'
import App from './App.vue'
import '@/assets/less/common.less' // global CSS

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
