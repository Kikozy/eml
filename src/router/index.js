import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop/:shop_id',
    name: 'Shop',
    component:()=>import('../views/shop/Shop.vue')
  },
  {
    path: '/pay/:shop_id',
    name: 'Pay',
    component: ()=>import('../views/pay/Pay.vue')
  },
  {
    path: '/History',
    name: 'History',
    component: ()=>import('../views/history/History.vue')
  },
  {
    path: '/My',
    name: 'My',
    component: ()=>import('../views/my/My.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
