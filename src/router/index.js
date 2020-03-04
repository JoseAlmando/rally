import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '../views/Login.vue')
  },
  {
    path: '/equipos',
    name: 'RG',
    component: () => import(/* webpackChunkName: "rg" */ '../views/RG.vue')
  },
  {
    path: '/preguntas',
    name: 'PR',
    component: () => import(/* webpackChunkName: "pr" */ '../views/PR.vue')
  },
  {
    path: '/ganadores',
    name: 'Res',
    component: () => import(/* webpackChunkName: "pr" */ '../views/Res.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
