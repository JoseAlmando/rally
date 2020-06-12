<template>
  <div>
    <Menu />
    <div class="bg-gray-200">
      <div
        class="md:flex justify-center items-center h-screen bg-gray-200 w-full"
      >
        <!--  Formulario -->
        <div class="md:w-5/12 p-4 py-0">
          <form
            @submit="registrarEquipo"
            action
            method="post"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10"
          >
            <div class="mb-4">
              <h1 class="text-center text-green-500 text-xl font-bold mb-2">
                Registro de equipos - Tres personas
              </h1>
            </div>
            <div class="mb-4">
              <the-mask
                mask="####-####"
                required
                v-model="equipoDetalle.MatriculaE1"
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
                v-model="equipoDetalle.MatriculaE2"
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
                v-model="equipoDetalle.MatriculaE3"
                :maxlength="maxv"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                id="matr3"
                type="text"
                placeholder="Matricula del tercer integrante [0000-0000]"
              />
            </div>
            <div class="mb-2">
              <input
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                value="Crear equipo"
              />
            </div>
          </form>
        </div>

        <!-- Panel -->
        <div
          class="bg-blue-901 opacity-80 shadow-md px-8 mr-4 pt-6 pb-8 mb-4 mt-10 md:w-3/12 ml-4 rounded "
        >
          <h2 class="text-center text-white text-xl font-bold mb-2">
            Código Grupo
          </h2>
          <p class="text-center text-red-901 text-xl font-bold mb-2">
            [ {{ equipoDetalle.CodigoGrupo }} ]
          </p>

          <h2 class="text-center text-white text-xl font-bold mb-2">
            Contraseña Grupo
          </h2>
          <p class="text-center text-red-901 text-xl font-bold mb-2">
            [ {{ equipoDetalle.password }} ]
          </p>

          <h2 class="text-center text-white text-xl font-bold mb-2">
            Numero grupo
          </h2>
          <p class="text-center text-red-901 text-xl font-bold mb-2">
            [ {{ nogrupo }} ]
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu";

import axios from "axios";
export default {
  name: "RG",
  components: {
    Menu,
  },
  data() {
    return {
      equipoDetalle: {
        MatriculaE1: null,
        MatriculaE2: null,
        MatriculaE3: null,
        CodigoGrupo: null,
        password: null,
      },
      nogrupo: 0,
      maxv: 9,
      respuesta: [],
      err: [],
    };
  },
  methods: {
    generearUser() {
      if (this.equipoDetalle.MatriculaE1 && this.equipoDetalle.MatriculaE2) {
        return this.generarAleatorio();
      }
    },
    generarAleatorio() {
      var abc = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz";
      if (this.equipoDetalle.MatriculaE3 == null) {
        return (
          this.equipoDetalle.MatriculaE1.slice(2, 4) +
          abc[Math.floor(Math.random() * 50)] +
          abc[Math.floor(Math.random() * 50)] +
          this.equipoDetalle.MatriculaE2[2] +
          this.equipoDetalle.MatriculaE2[7] +
          abc[Math.floor(Math.random() * 50)] +
          abc[Math.floor(Math.random() * 50)]
        );
      } else {
        return (
          this.equipoDetalle.MatriculaE1.slice(2, 4) +
          abc[Math.floor(Math.random() * 50)] +
          abc[Math.floor(Math.random() * 50)] +
          this.equipoDetalle.MatriculaE2[2] +
          this.equipoDetalle.MatriculaE2[7] +
          abc[Math.floor(Math.random() * 50)] +
          abc[Math.floor(Math.random() * 50)] +
          this.equipoDetalle.MatriculaE1.slice(6, 8) +
          abc[Math.floor(Math.random() * 50)] +
          abc[Math.floor(Math.random() * 50)]
        );
      }
    },
    registrarEquipo(e) {
      e.preventDefault();
      this.equipoDetalle.CodigoGrupo = this.generearUser();
      this.equipoDetalle.password = "pa" + this.generearUser() + "as";
      const token = window.localStorage.getItem("_token");
      axios
        .post("http://localhost:1323/api/app/equipo", this.equipoDetalle, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          this.respuesta = res.data;
          console.log(this.respuesta);
        })
        .catch((err) => {
          this.err.push(err);
        });
    },
  },
};
</script>
