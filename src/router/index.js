import Vue from 'vue'
import VueRouter from 'vue-router'
import RouteView from '@/layouts/RouteView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/components',
    component: RouteView,
    children: [
      { // 常用组件
        path: '/components',
        name: 'Components',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Components.vue')
      },
      { // 走马灯
        path: '/carousel',
        name: 'Carousel',
        component: () => import(/* webpackChunkName: "about" */ '../views/Carousel.vue')
      },
      { // 轮播图
        path: '/swiper',
        name: 'Swiper',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Swiper.vue')
      },
      { // 树图
        path: '/tree',
        name: 'Tree',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Tree.vue')
      },
      { // 拖拽组件
        path: '/drag',
        name: 'Drag',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Draggable.vue')
      },
      { // 下拉组件
        path: '/selector',
        name: 'Selector',
        meta: { title: '下拉组件', keepAlive: true },
        component: () => import(/* webpackChunkName: "about" */ '@/views/Selector.vue')
      },
      { // 图片轮播组件
        path: '/imgSlider',
        name: 'ImgSlider',
        component: () => import(/* webpackChunkName: "about" */ '@/views/ImgSlider.vue')
      }
    ]
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
  console.log('to:', to)
  console.log('from:', from)
  // console.log('next:', next)
  to.meta && (document.title = `${to.meta.title}`)
  next()
})
// hack router push callback
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }
// router.beforeEach((to, from, next) => {
// })

export default router
