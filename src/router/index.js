import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Base'),
    children: [
      { path: '', component: () => import('../views/home/Products') },
      { path: 'details/:idProduct', component: () => import('../views/home/Details')},
      { path: 'cart', component: () => import('../views/home/Cart') }
    ]
  },
  {
    path: '/login',
    component: () => import("../views/account/Login")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
