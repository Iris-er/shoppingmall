import Vue from 'vue'
import Router from 'vue-router'
import User from './user'
Vue.use(Router)
const base = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home/Index.vue')
  }
]

let allRoutes = [
  base,
  User
]
const routes = allRoutes.reduce((a, b) => {
  return a.concat(b)
})

const router = new Router({
  routes
})
export default router
