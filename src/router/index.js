import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop/:shopIndex',
    name: 'Shop',
    component:()=>import('../views/shop/Shop.vue')
  },
  {
    path: '/pay',
    name: 'Pay',
    component: ()=>import('../views/pay/Pay.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
