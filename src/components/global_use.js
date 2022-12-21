import Vue from 'vue'

import { Toast, Loading, Alert, Confirm } from 'wc-messagebox'
import 'wc-messagebox/style.css'
/*
  按需加载方法1：可以通过以下的写法来按需加载组件
*/
// import Menu from 'ant-design-vue/lib/menu'
// import 'ant-design-vue/lib/menu/style' // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
/*
  按需加载方法2：安装开发依赖yarn add babel-plugin-import -D // 编译过程中自动转换为按需引入的方式
  加入这个插件后，你可以仍然这么写：import { Button } from 'ant-design-vue'
*/
import {
  Menu,
  Button,
  Cascader
} from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

Vue.use(Menu)
Vue.use(Button)
Vue.use(Cascader)

Vue.use(Toast)
Vue.use(Loading)
Vue.use(Alert)
Vue.use(Confirm)

process.env.NODE_ENV !== 'production' && console.warn('[antd-pro] NOTICE: Antd use lazy-load.')
