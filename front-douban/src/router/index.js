import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home_guide'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ('@/views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import ('@/views/Register')
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import ('@/views/Movie')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
