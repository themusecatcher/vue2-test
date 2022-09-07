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
      {
        path: '/components',
        name: 'Components',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Components.vue')
      },
      {
        path: '/carousel',
        name: 'Carousel',
        component: () => import(/* webpackChunkName: "about" */ '../views/Carousel.vue')
      },
      {
        path: '/swiper',
        name: 'Swiper',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Swiper.vue')
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
// router.beforeEach((to, from, next) => {
//   to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`)
//   next()
// })
// hack router push callback
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }
// router.beforeEach((to, from, next) => {
// })

export default router
