import Vue from 'vue'
import VueRouter from 'vue-router'
// import RouteView from '@/layouts/RouteView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/components'
  },
  { // 常用组件
    path: '/components',
    name: 'Components',
    component: () => import(/* webpackChunkName: "test" */ '../views/Components.vue')
  },
  { // 走马灯
    path: '/carousel',
    name: 'Carousel',
    component: () => import(/* webpackChunkName: "test" */ '../views/Carousel.vue')
  },
  { // 轮播图
    path: '/swiper',
    name: 'Swiper',
    meta: { depth: 2 },
    component: () => import(/* webpackChunkName: "test" */ '@/views/Swiper.vue')
  },
  { // 树图
    path: '/tree',
    name: 'Tree',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Tree.vue')
  },
  { // 拖拽组件
    path: '/drag',
    name: 'Drag',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Draggable.vue')
  },
  { // 下拉组件
    path: '/selector',
    name: 'Selector',
    meta: { title: '下拉组件', keepAlive: true, depth: 1 },
    component: () => import(/* webpackChunkName: "test" */ '@/views/Selector.vue')
  },
  { // 图片轮播组件
    path: '/imgSlider',
    name: 'ImgSlider',
    component: () => import(/* webpackChunkName: "test" */ '@/views/ImgSlider.vue')
  },
  { // 步骤条组件
    path: '/steps',
    name: 'Steps',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Steps.vue')
  },
  { // 视频播放组件；序列化图片播放组件
    path: '/video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Video.vue')
  }
  // {
  //   path: '/500',
  //   component: () => import(/* webpackChunkName: "exception" */ '@/views/exception/500'),
  //   meta: { title: '500' }
  // },
  // {
  //   path: '/404',
  //   component: () => import(/* webpackChunkName: "exception" */ '@/views/exception/404'),
  //   meta: { title: '404' }
  // },
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  // console.log('to:', to)
  // console.log('from:', from)
  // console.log('next:', next)
  to.meta && (document.title = `${to.meta.title || to.name}`)
  next()
})
// hack router push callback
// 解决vue-router跳转相同路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
