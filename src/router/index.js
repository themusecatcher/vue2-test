import Vue from 'vue'
import VueRouter from 'vue-router'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
// import RouteView from '@/layouts/RouteView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: { title: '首页' },
    redirect: '/common',
    component: () => import(/* webpackChunkName: "test" */ '../views/Home.vue'),
    children: [
      {
        path: '/common/:id',
        name: 'Common',
        meta: { title: '常用' },
        // props: true, // props设置为true时，路由参数route.params将会被设置为组件属性props
        // props: { name: 'curry', age: '30' }, // 设置为对象时，则isDeep将会被设置为组件属性
        props: route => ({ route: route, name: 'curry', age: '30' }),
        component: () => import(/* webpackChunkName: "test" */ '../views/Common.vue')
      },
      {
        path: '/spin',
        name: 'Spin',
        meta: { title: '加载中' },
        component: () => import(/* webpackChunkName: "test" */ '../views/SpinPage.vue')
      },
      {
        path: '/table',
        name: 'Table',
        meta: { title: '分页列表' },
        component: () => import(/* webpackChunkName: "test" */ '../views/TablePage.vue')
      },
      {
        path: '/modal',
        name: 'Modal',
        meta: { title: '对话框' },
        component: () => import(/* webpackChunkName: "test" */ '../views/ModalPage.vue')
      },
      {
        path: '/tip',
        name: 'Tip',
        meta: { title: '提示框' },
        component: () => import(/* webpackChunkName: "test" */ '../views/InfoTip.vue')
      },
      {
        path: '/lines',
        name: 'Lines',
        meta: { title: 'Lines' },
        component: () => import(/* webpackChunkName: "test" */ '../views/Lines.vue')
      },
      {
        path: '/swiper',
        name: 'Swiper',
        meta: { title: '触摸滑动插件', depth: 2 },
        component: () => import(/* webpackChunkName: "test" */ '@/views/Swiper.vue')
      },
      {
        path: '/tree',
        name: 'Tree',
        meta: { title: '树图' },
        component: () => import(/* webpackChunkName: "test" */ '@/views/Tree.vue')
      },
      {
        path: '/drag',
        name: 'Drag',
        meta: { title: '拖拽组件' },
        component: () => import(/* webpackChunkName: "test" */ '@/views/Draggable.vue')
      },
      {
        path: '/selector',
        name: 'Selector',
        meta: { title: '下拉组件', keepAlive: false, depth: 1 },
        component: () => import(/* webpackChunkName: "test" */ '@/views/Selector.vue')
      },
      {
        path: '/imgSlider',
        name: 'ImgSlider',
        meta: { title: '图片轮播组件' },
        component: () => import(/* webpackChunkName: "test" */ '@/views/ImgSlider.vue')
      },
      {
        path: '/steps',
        name: 'Steps',
        meta: { title: '步骤条组件' },
        component: () => import(/* webpackChunkName: "test" */ '@/views/Steps.vue')
      },
      { // 视频播放组件；序列化图片播放组件
        path: '/video',
        name: 'Video',
        meta: { title: '播放组件' },
        component: () => import(/* webpackChunkName: "test" */ '@/views/Video.vue')
      },
      {
        path: '/banner',
        name: 'Banner',
        meta: { title: 'banner组件' },
        component: () => import(/* webpackChunkName: "test" */ '@/views/Banner.vue')
      },
      {
        path: '/pdf',
        name: 'Pdf',
        meta: { title: 'pdf预览' },
        component: () => import(/* webpackChunkName: "test" */ '@/views/PdfView.vue')
      },
      {
        path: '/slider',
        name: 'Slider',
        meta: { title: '文字滚动' },
        component: () => import(/* webpackChunkName: "test" */ '@/views/Slider.vue')
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
  base: process.env.BASE_URL,
  routes
})
// hack router push callback
// 解决vue-router跳转相同路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
router.beforeEach((to, from, next) => {
  to.meta && to.meta.title && setDocumentTitle(`${to.meta.title} - ${domTitle}`)
  next()
})

export default router
