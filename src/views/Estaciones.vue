<template>
  <div class=" bg-gray-200">
    <Menu />
    <div class="flex justify-center items-center flex-col h-screen md:w-full">
      <div class="mb-2 flex justify-around w-8/12">
        <div class="mx-1">
          <input
            type="radio"
            id="nueva_estacion"
            value="nueva_estacion"
            v-model="picked"
          />
          <label for="nueva_estacion" class="font-bold mb-2">
            Nueva estacion</label
          >
        </div>

        <div class="mx-1">
          <input
            type="radio"
            id="editar_estacion"
            value="editar_estacion"
            v-model="picked"
          />
          <label for="editar_estacion" class="font-bold mb-2">
            Editar estacion</label
          >
        </div>
        <div class="mx-1">
          <input
            type="radio"
            id="eliminar_estacion"
            value="eliminar_estacion"
            v-model="picked"
          />
          <label for="eliminar_estacion" class="font-bold mb-2">
            Eliminar estacion</label
          >
        </div>
      </div>
      <div
        v-if="picked != 'nueva_estacion' && picked != null"
        class="flex justify-around w-7/12"
      >
        <select
          required
          v-model="EstacionSeleccionada"
          class="block appearance-none w-8/12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option
            v-for="estacion in estaciones"
            v-bind:key="estacion.ID"
            v-bind:value="estacion.ID"
          >
            <span>{{ estacion.Estacion }}</span>
          </option>
        </select>
        <button
          class="bg-green-500 w-3/12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="selectEstacion"
        >
          Seleccionar
        </button>
      </div>

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
              id="NombreEstacion"
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
              :maxlength="250"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="DescripcionEstacion"
              placeholder="Datos sobre la estacion"
              v-model="estacionDatos.Descripcion"
            />
          </div>

          <div class="flex justify-around">
            <div class="w-full">
              <input
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                value="Registrar estacion"
                v-if="picked == 'nueva_estacion' && picked != null"
              />
              <input
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                value="Editar estacion"
                v-if="picked == 'editar_estacion' && picked != null"
              />
              <input
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                value="Eliminar estacion"
                v-if="picked == 'eliminar_estacion' && picked != null"
              />
            </div>

            <!-- <button
              class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-4/12 mx-1"
              @click="dataDefault"
              type="button"
            >
              Limpiar formulario
            </button> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "../components/Menu";
const token = window.localStorage.getItem("_token");
var headers = {
  headers: { Authorization: "Bearer " + token },
};
export default {
  name: "Estaciones",
  components: {
    Menu,
  },
  data() {
    return {
      estacionDatos: {
        Nombre: null,
        Descripcion: null,
      },
      estaciones: [],
      EstacionSeleccionada: null,
      picked: null,
      response: [],
      err: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:1323/api/app/estacion", headers)
      .then((response) => {
        response.data.forEach((element) => {
          this.estaciones.push({
            ID: element.ID,
            Estacion: element.nombre,
          });
        });
      })
      .catch((err) => {
        console.log("A ver " + err.response.status);
        if (err.response.status == 401) {
          alert("Cierra e inicia seccion");
          window.localStorage.removeItem("_token");
          err = [];
        }
        this.err.push(err);
      });
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      if (this.picked == "nueva_estacion") {
        this.sendEstacion();
      } else if (this.picked == "editar_estacion") {
        if (this.EstacionSeleccionada != null) {
          this.updateEstacion();
          alert("actuzli");
        } else {
          alert("Debes seleccionar una estacion");
        }
      } else if (this.picked == "eliminar_estacion") {
        if (this.EstacionSeleccionada != null) {
          this.deleteEstacion();
          alert("ELiminada");
        } else {
          alert("Debes seleccionar una estacion");
        }
      }

      this.$forceUpdate();
    },
    sendEstacion() {
      axios
        .post(
          "http://localhost:1323/api/app/estacion",
          this.estacionDatos,
          headers
        )
        .then((res) => {
          this.response = res.data;
          console.log(this.response);
          alert("Estacion insertada brou");
          this.refreshData();
          this.dataDefault();
        })
        .catch((err) => {
          this.err.push(err);
        });
    },
    dataDefault() {
      this.estacionDatos.Nombre = null;
      this.estacionDatos.Descripcion = null;
    },
    selectEstacion() {
      axios
        .get(
          "http://localhost:1323/api/app/estacion/" + this.EstacionSeleccionada,
          headers
        )
        .then((res) => {
          let estacion = res.data;
          this.estacionDatos.Nombre = estacion.nombre;
          this.estacionDatos.Descripcion = estacion.Descripcion;
        })
        .catch((err) => {
          this.err.push(err);
        });
    },
    updateEstacion() {
      axios
        .put(
          "http://localhost:1323/api/app/estacion/" + this.EstacionSeleccionada,
          this.estacionDatos,
          headers
        )
        .then((res) => {
          res.data;
          this.refreshData();
        })
        .catch((err) => this.err.push(err));
    },
    deleteEstacion() {
      axios
        .delete(
          "http://localhost:1323/api/app/estacion/" + this.EstacionSeleccionada,
          headers
        )
        .then((res) => {
          this.refreshData();
          this.dataDefault();
        })
        .catch((err) => {
          this.err.push(err);
        });
    },
    refreshData() {
      axios
        .get("http://localhost:1323/api/app/estacion", headers)
        .then((response) => {
          this.estaciones = [];
          response.data.forEach((element) => {
            this.estaciones.push({
              ID: element.ID,
              Estacion: element.nombre,
            });
          });
        });
    },
  },
};
</script>
