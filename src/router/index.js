import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () =>
      import(/* webpackChunkName: "Inicio" */ "../views/Inicio.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/equipos",
    name: "Equipos",
    component: () =>
      import(/* webpackChunkName: "Equipos" */ "../views/Equipos.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/preguntas",
    name: "Preguntas",
    component: () =>
      import(/* webpackChunkName: "Preguntas" */ "../views/Preguntas.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/ganadores",
    name: "Ganadores",
    component: () =>
      import(/* webpackChunkName: "Ganadores" */ "../views/Ganadores.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/estaciones",
    name: "Estaciones",
    component: () =>
      import(/* webpackChunkName: "Estaciones" */ "../views/Estaciones.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!!window.localStorage.getItem("_token")) {
      next();
    } else {
      // No autenticado
      router.replace("/login");
    }
  } else {
    next();
  }
});
export default router;
