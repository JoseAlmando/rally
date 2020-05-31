import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: () => import(/* webpackChunkName: "Equipos" */ '../views/Equipos.vue')
  },
  {
    path: '/preguntas',
    name: 'Preguntas',
    component: () => import(/* webpackChunkName: "Preguntas" */ '../views/Preguntas.vue')
  },
  {
    path: '/ganadores',
    name: 'Ganadores',
    component: () => import(/* webpackChunkName: "Ganadores" */ '../views/Ganadores.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
