<template>
  <div>
    <Menu />
    <div class="flex items-center justify-center h-screen bg-gray-200">
      <div class="w-full max-w-md">
        <form
          action
          class="bg-white shadow-md rounded px-8 pt-6 pb-8"
          @submit="formSubmit"
          method="post"
        >
          <div class="mb-4">
            <h1 class="text-center text-green-500 text-xl font-bold mb-2">
              LogIn de inicio
            </h1>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
              >Nombre de usuario</label
            >
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-green-600 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Usuario"
              v-model="LoginDetail.username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
              >Contraseña</label
            >
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              v-model="LoginDetail.password"
            />
            <p class="text-red-500 text-xs italic">
              Por favor, digite su contraseña.
            </p>
          </div>
          <div class>
            <input
              class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
              value="Acceder"
            />
            
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import axios from "axios";
export default {
  name: "Login",
  components: {
    Menu,
  },
  data() {
    return {
      LoginDetail: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      console.log(this.LoginDetail);
      axios
        .post("http://localhost:1323/api/loginmaestros", this.LoginDetail)
        .then((res) => {
          const token = res.data.token;
          window.localStorage.removeItem("_token");
          window.localStorage.setItem("_token", token);
          this.$router.push("/");
        })
        .catch((err) => {
          var errors = err.response;
          console.log(errors);
          window.localStorage.removeItem("_token");
          alert("Usuario y/o contrase;a incorrecto.");
        });
    },
  },
};
</script>
