import Vue from 'vue'
import App from './App.vue'
import '@/assets/less/common.less' // global CSS
import VueAmazingSelector from 'vue-amazing-selector'
import 'vue-amazing-selector/lib/selector.css' // 引入样式
Vue.use(VueAmazingSelector)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
