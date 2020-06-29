<template>
  <div class=" bg-gray-200">
    <Menu />
    <div
      class="flex justify-center items-center h-screen bg-gray-200 md:w-full"
    >
      <div class="md:w-7/12 p-2">
        <form
          method="post"
          action
          @submit="formSubmit"
          class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 mt-10"
        >
          <div class="mb-4">
            <h1 class="text-center text-green-500 text-xl font-bold mb-2">
              Registro de Estaciones
            </h1>
          </div>

          <div class="mb-4">
            <label
              class="block text-gra  y-700 text-md font-bold mb-2"
              for="username"
              >Estacion</label
            >
            <input
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pregunta"
              type="text"
              placeholder="Puede digitar con numero o primera estacion, segunda estacion..."
              v-model="estacionDatos.Nombre"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gra  y-700 text-md font-bold mb-2"
              for="username"
              >Descripcion</label
            >
            <textarea
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pregunta"
              type="text"
              placeholder="Datos sobre la estacion"
              v-model="estacionDatos.Description"
            />
          </div>

          <div>
            <input
              class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
              value="Registrar estacion"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "../components/Menu";
export default {
  name: "Estaciones",
  components: {
    Menu,
  },
  data() {
    return {
      estacionDatos: {
        Nombre: null,
        Description: null,
      },
      response: [],
      err: [],
    };
  },
  methods: {
    formSubmit(e) {
      let vm = this;
      const token = window.localStorage.getItem("_token");
      let headers = {
        headers: { Authorization: "Bearer " + token },
      };
      e.preventDefault();
      axios
        .post(
          "http://localhost:1323/api/app/estacion",
          vm.estacionDatos,
          headers
        )
        .then((res) => {
          vm.response = res.data;
          console.log(vm.response);
        })
        .catch((err) => {
          vm.err.push(err);
          console.log(vm.err);
        });
    },
  },
};
</script>
