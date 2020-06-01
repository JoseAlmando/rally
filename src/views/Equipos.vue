<template>
  <div class="bg-gray-200">

    <div class="md:flex justify-center items-center h-screen bg-gray-200 w-full">
      <!--  Formulario -->
      <div class="md:w-5/12 p-4 py-0">
        <form action class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
          <div class="mb-4">
            <h1 class="text-center text-green-500 text-xl font-bold mb-2">Registro de equipos - Tres personas</h1>
          </div>
          <div class="mb-4">
            <the-mask
              mask="####-####"
              required
              v-model="mtr1"
              :maxlength="maxv"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="mtr1"
              type="text"
              placeholder="Matricula del primer integrante [0000-0000]"
            />
          </div>
          <div class="mb-4">
            <the-mask
              mask="####-####"
              required
              v-model="mtr2"
              :maxlength="maxv"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="matr2"
              type="text"
              placeholder="Matricula del segundo integrante [0000-0000]"
            />
          </div>
          <div class="mb-4">
            <the-mask
              mask="####-####"
              v-model="mtr3"
              :maxlength="maxv"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="matr3"
              type="text"
              placeholder="Matricula del tercer integrante [0000-0000]"
            />
          </div>
          <div class="mb-2">
            <button
              class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
              v-on:click="generearUser()"
            >Generar</button>
          </div>
        </form>
      </div>

      <!-- Panel -->
      <div class="bg-blue-901 opacity-80 shadow-md px-8 mr-4 pt-6 pb-8 mb-4 mt-10 md:w-3/12 ml-4 rounded ">
        <h2 class="text-center text-white text-xl font-bold mb-2">Código Grupo</h2>
        <p class="text-center text-red-901 text-xl font-bold mb-2">[ {{codigo}} ]</p>

        <h2 class="text-center text-white text-xl font-bold mb-2">Contraseña Grupo</h2>
        <p class="text-center text-red-901 text-xl font-bold mb-2">[ {{password}} ]</p>

        <h2 class="text-center text-white text-xl font-bold mb-2">Numero grupo</h2>
        <p class="text-center text-red-901 text-xl font-bold mb-2">[ {{nogrupo}} ]</p>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu";
export default {
  name: "RG",
  data() {
    return {
      codigo: "Código",
      password: "Contraseña",
      mtr1: null,
      mtr2: null,
      mtr3: null,
      nogrupo: 0,
      maxv: 9
    };
  },
  component: { Menu },
  methods: {
    generearUser() {
      var res = this.generarAleatorio();
      if (this.mtr1 && this.mtr2) {
        this.codigo = res;
        this.password = "pa" + this.generarAleatorio() + "ss";
      }
    },
    generarAleatorio() {
      var abc = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz";
      if (this.mtr3 == null) {
        return (
          this.mtr1.slice(2, 4) +
          abc[Math.floor(Math.random() * 50)] +
          abc[Math.floor(Math.random() * 50)] +
          this.mtr2[2] +
          this.mtr2[7] +
          abc[Math.floor(Math.random() * 50)] +
          abc[Math.floor(Math.random() * 50)]
        );
      } else {
        return (
          this.mtr1.slice(2, 4) +
          abc[Math.floor(Math.random() * 50)] +
          abc[Math.floor(Math.random() * 50)] +
          this.mtr2[2] +
          this.mtr2[7] +
          abc[Math.floor(Math.random() * 50)] +
          abc[Math.floor(Math.random() * 50)] +
          this.mtr3.slice(6, 8) +
          abc[Math.floor(Math.random() * 50)] +
          abc[Math.floor(Math.random() * 50)]
        );
      }
    }
  }
};
</script>