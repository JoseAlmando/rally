<template>
  <div class="flex justify-between items-center px-4 pb-2 bg-white mt-2 mb-2">
    <div>
      <router-link to="/">
        <h1 class="text-center text-green-500 text-2xl font-bold">
          Rally ITESA
        </h1>
      </router-link>
    </div>
    <div class="flex">
      <div class="mx-1">
        <router-link to="/equipos"
          ><button
            class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="isLoginF2"
          >
            Equipos
          </button></router-link
        >
      </div>
      <div class="mx-1">
        <router-link to="/preguntas"
          ><button
            class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="isLoginF2"
          >
            Preguntas
          </button></router-link
        >
      </div>
      <div class="mx-1">
        <router-link to="/ganadores"
          ><button
            class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="isLoginF2"
          >
            Ganadores
          </button></router-link
        >
      </div>
      <div class="mx-1">
        <router-link to="/estaciones"
          ><button
            class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="isLoginF2"
          >
            Estaciones
          </button></router-link
        >
      </div>
      <div class="mx-1">
        <router-link to="/login">
          <button
            v-if="isLogin == false"
            class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="logout"
          >
            Entrar
          </button>
        </router-link>
      </div>
      <div class="mx-1">
        <router-link to="/login">
          <button
            v-if="isLogin"
            class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="logout"
          >
            Salir
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isLogin: this.isLoginF(),
    };
  },
  methods: {
    isLoginF() {
      if (!!window.localStorage.getItem("_token")) {
        return true;
      }
      return false;
    },
    logout() {
      window.localStorage.removeItem("_token");
      this.$router.push("/");
    },
    isLoginF2() {
      if (this.isLogin == false) {
        alert("Debes entrar como administrador (click en entrar)");
      }
    },
  },
};
</script>
