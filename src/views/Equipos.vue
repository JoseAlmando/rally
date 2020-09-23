<template>
  <div>
    <Menu />
    <div class="bg-gray-200">
      <div
        class="flex justify-center flex-col items-center h-screen bg-gray-200 md:w-full"
      >
        <div class="mb-2 flex justify-between w-4/12">
          <div class="mx-1">
            <input
              type="radio"
              id="nuevo_equipo"
              value="nuevo_equipo"
              v-model="picked"
            />
            <label for="nuevo_equipo" class="font-bold mb-2">
              Nuevo equipo</label
            >
          </div>

          <!-- <div class="mx-1">
            <input
              type="radio"
              id="editar_equipo"
              value="editar_equipo"
              v-model="picked"
            />
            <label for="editar_equipo" class="font-bold mb-2">
              Editar equipo</label
            >
          </div> -->

          <div class="mx-1">
            <input
              type="radio"
              id="eliminar_equipo"
              value="eliminar_equipo"
              v-model="picked"
            />
            <label for="eliminar_equipo" class="font-bold mb-2">
              Eliminar equipo</label
            >
          </div>
        </div>

        <!--  -->
        <div
          v-if="picked != 'nuevo_equipo' && picked != null"
          class="flex justify-around w-6/12"
        >
          <select
            required
            v-model="equipoSeleccionado"
            class="block appearance-none w-8/12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option
              v-for="equipo in equipos"
              v-bind:key="equipo.ID"
              v-bind:value="equipo.ID"
            >
              <span> {{ equipo.ID }} - {{ equipo.Matriculas }} </span>
            </option>
          </select>
          <button
            class="bg-green-500 w-3/12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="selectEquipo"
          >
            Seleccionar
          </button>
        </div>
        <!--  -->
        <div class="md:flex ">
          <!--  Formulario -->
          <div class="md:w-4/7 p-4 py-0">
            <form
              @submit="formSubmit"
              action
              method="post"
              class="bg-white shadow-md rounded px-8 pt-6 pb-10 mb-4 mt-10"
            >
              <div class="mb-4">
                <h1 class="text-center text-green-500 text-xl font-bold mb-2">
                  Registro de equipos - Tres personas
                </h1>
              </div>
              <div class="mb-4">
                <the-mask
                  masked
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
                  masked
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
                  masked
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
                  v-if="picked == 'nuevo_equipo' && picked != null"
                  class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                  value="Crear equipo"
                />
                <input
                  v-if="picked == 'editar_equipo' && picked != null"
                  class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                  value="Editar equipo"
                />
                <input
                  v-if="picked == 'eliminar_equipo' && picked != null"
                  class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                  value="Eliminar equipo"
                />
              </div>
            </form>
          </div>

          <!-- Panel -->
          <div
            class="bg-blue-901 opacity-80 shadow-md px-8 mr-4 pt-6 pb-8 mb-4 mt-10 md:w-3/7 ml-4 rounded items-center justify-center"
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
              [ {{ equipoDetalle.ContraGrupo }} ]
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
  </div>
</template>

<script>
import Menu from "../components/Menu";

import axios from "axios";
var token = window.localStorage.getItem("_token");
var headers = {
  headers: { Authorization: "Bearer " + token },
};
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
        ContraGrupo: null,
      },
      nogrupo: 0,
      maxv: 9,
      err: [],
      picked: null,
      equipoSeleccionado: null,

      equipos: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:1323/api/app/equipo", headers)
      .then((response) => {
        response.data.forEach((element) => {
          this.equipos.push({
            ID: element.ID,
            Matriculas:
              element.MatriculaE1 +
              " " +
              element.MatriculaE2 +
              " " +
              element.MatriculaE3,
          });
        });
      })
      .catch((err) => {
        this.err.push(err);
        console.log("A ver " + err.response.status);
        if (err.response.status == 401) {
          alert("Cierra e inicia seccion");
          window.localStorage.removeItem("_token");
          err = [];
        }
      });
  },
  methods: {
    defaultData() {
      this.equipoDetalle.MatriculaE1 = null;
      this.equipoDetalle.MatriculaE2 = null;
      this.equipoDetalle.MatriculaE3 = null;
    },
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
    formSubmit(e) {
      e.preventDefault();
      if (this.picked == "nuevo_equipo") {
        this.sendEquipo();
      } else if (this.picked == "editar_equipo") {
        // this.updateEquipo();
      } else if (this.picked == "eliminar_equipo") {
        this.deleteEquipos();
        alert("Equipo eliminado.");
      }
      this.$forceUpdate();
    },
    async sendEquipo() {
      this.equipoDetalle.CodigoGrupo = this.generearUser();
      this.equipoDetalle.ContraGrupo = "pa" + this.generearUser() + "as";

      await axios
        .post(
          "http://localhost:1323/api/app/equipo",
          this.equipoDetalle,
          headers
        )
        .then((res) => {
          this.nogrupo = parseInt(res.data.ID, 10);
          alert("Equipo insertado correctamente.");
          this.defaultData();
        })
        .catch((err) => {
          this.err.push(err);
          alert("Una de las tres matriculas pertenece a otro equipo");
        });
      this.refreshData();
    },

    selectEquipo() {
      axios
        .get(
          "http://localhost:1323/api/app/equipo/" + this.equipoSeleccionado,
          headers
        )
        .then((res) => {
          let eq = res.data;
          this.equipoDetalle.MatriculaE1 = eq.MatriculaE1;
          this.equipoDetalle.MatriculaE2 = eq.MatriculaE2;
          this.equipoDetalle.MatriculaE3 = eq.MatriculaE3;
          this.equipoDetalle.CodigoGrupo = eq.CodigoGrupo;
          this.equipoDetalle.ContraGrupo = eq.ContraGrupo;
          this.nogrupo = eq.ID;
        })
        .catch((err) => this.err.push(err));
    },

    deleteEquipos() {
      axios
        .delete(
          "http://localhost:1323/api/app/equipo/" + this.equipoSeleccionado,
          headers
        )
        .then((res) => {
          this.defaultData();
          this.equipoDetalle.CodigoGrupo = null;
          this.equipoDetalle.ContraGrupo = null;
          this.nogrupo = 0;
          this.refreshData();
        })
        .catch((err) => err.response.status);
    },

    refreshData() {
      axios
        .get("http://localhost:1323/api/app/equipo", headers)
        .then((response) => {
          this.equipos = [];
          response.data.forEach((element) => {
            this.equipos.push({
              ID: element.ID,
              Matriculas:
                element.MatriculaE1 +
                " " +
                element.MatriculaE2 +
                " " +
                element.MatriculaE3,
            });
          });
        });
    },
  },
};
</script>
