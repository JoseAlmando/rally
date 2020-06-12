<template>
  <div>
    <Menu />
    <div class=" bg-gray-200">
      <div
        class="flex justify-center items-center h-screen bg-gray-200 md:w-full"
      >
        <div class="md:w-7/12 p-2">
          <div class="mb-4 flex justify-between">
            <div class="mx-1">
              <input
                type="radio"
                id="nueva_pregunta"
                value="nueva_pregunta"
                v-model="picked"
              />
              <label for="nueva_pregunta" class="font-bold mb-2">
                Nueva pregunta</label
              >
            </div>
            <div class="mx-1">
              <input
                type="radio"
                id="editar_pregunta"
                value="editar_pregunta"
                v-model="picked"
              />
              <label for="editar_pregunta" class="font-bold mb-2">
                Editar pregunta</label
              >
            </div>
            <div class="mx-1">
              <input
                type="radio"
                id="borrar_pregunta"
                value="borrar_pregunta"
                v-model="picked"
              />
              <label for="borrar_pregunta" class="font-bold mb-2">
                Borrar pregunta</label
              >
            </div>
            <div class="mx-1">
              <input
                type="radio"
                id="obtener_pregunta"
                value="obtener_pregunta"
                v-model="picked"
              />
              <label for="obtener_pregunta" class="font-bold mb-2">
                Obtener todas las preguntas</label
              >
            </div>
          </div>
          <div
            v-if="picked != 'nueva_pregunta' && picked != null"
            class="flex justify-around"
          >
            <select
              required
              v-model="PregSelect"
              class="block appearance-none w-8/12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option
                v-for="pregunta in preguntas"
                v-bind:key="pregunta.ID"
                v-bind:value="pregunta.ID"
              >
                <span>{{ pregunta.Preg }}</span>
              </option>
            </select>
            <button
              class="bg-green-500 w-3/12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="selectPreg"
            >
              Seleccionar
            </button>
          </div>

          <form
            method="post"
            action
            @submit="formSubmit"
            class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 mt-10"
          >
            <div class="mb-4">
              <h1 class="text-center text-green-500 text-xl font-bold mb-2">
                Registro de preguntas
              </h1>
            </div>
            <div class="flex justify-around mb-4">
              <div class="w-4/6">
                <label
                  class="block text-gra  y-700 text-md font-bold mb-2"
                  for="username"
                  >Pregunta</label
                >
                <input
                  required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="pregunta"
                  type="text"
                  placeholder="Pregunta"
                  v-model="Preg"
                />
              </div>
              <div class="w-2/6 ml-2">
                <label
                  class="block text-gray-700 text-md font-bold mb-2"
                  for="estacion"
                  >Estación</label
                >
                <select
                  required
                  v-model="EstacionID"
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option
                    v-for="elemento in estaciones"
                    v-bind:key="elemento.ID"
                    v-bind:value="elemento.ID"
                  >
                    <span>{{ elemento.Estacion }}</span>
                  </option>
                </select>
              </div>
            </div>
            <label
              class="block text-gray-700 text-md font-bold mb-2"
              for="estacion"
              >Respuestas incorrectas</label
            >

            <div class="flex justify-between mb-4">
              <div class="w-4/12 mr-2">
                <input
                  required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="ri1"
                  v-model="Resp1"
                  type="text"
                  placeholder="Respuesta incorrecta 1"
                />
              </div>
              <div class="w-4/12">
                <input
                  required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="ri2"
                  v-model="Resp2"
                  type="text"
                  placeholder="Respuesta incorrecta 2"
                />
              </div>
              <div class="w-4/12 ml-2">
                <input
                  required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="ri2"
                  v-model="Resp3"
                  type="text"
                  placeholder="Respuesta incorrecta 3"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-md font-bold mb-2"
                for="estacion"
                >Respuesta Correcta</label
              >
              <input
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ri2"
                v-model="Resp4"
                type="text"
                placeholder="Respuesta correcta"
              />
            </div>
            <div class>
              <input
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                value="Registrar pregunta"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import axios from "axios";
var token = window.localStorage.getItem("_token");
var headers = {
  headers: { Authorization: "Bearer " + token },
};
export default {
  name: "Preguntas",
  components: {
    Menu,
  },
  data() {
    return {
      Preg: null,
      EstacionID: null,
      Resp1: null,
      Resp2: null,
      Resp3: null,
      Resp4: null,
      cantPreg: 0,
      estaciones: [],
      error: [],
      response: [],
      picked: null,
      preguntas: [],
      PregSelect: null,
    };
  },
  mounted() {
    // Obtener numero de estaciones
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
        this.error.push(err);
      });
    // Obtener numero de pregunta
    axios
      .get("http://localhost:1323/api/app/preguntas", headers)
      .then((response) => {
        response.data.forEach((element) => {
          this.cantPreg = parseInt(element.ID, 10);
          this.cantPreg++;
          this.preguntas.push({ ID: element.ID, Preg: element.Preg });
        });
      })
      .catch((error) => {
        this.error.push(error);
      });
  },
  methods: {
    defaultData() {
      this.Preg = null;
      this.EstacionID = null;
      this.Resp1 = null;
      this.Resp2 = null;
      this.Resp3 = null;
      this.Resp4 = null;
      this.cantPreg = 0;
      this.estaciones = [];
      this.error = [];
      this.response = [];
    },
    formSubmit(e) {
      e.preventDefault();
      // Enviar pregunta
      axios
        .post(
          "http://localhost:1323/api/app/preguntas",
          {
            Preg: this.Preg,
            EstacionID: parseInt(this.EstacionID, 10),
          },
          headers
        )
        .then((response) => response.data)
        .catch((error) => this.error.push(error));
      // Enviar resp 1
      axios
        .post(
          "http://localhost:1323/api/app/respuestas",
          {
            Resp: this.Resp1,
            Valor: 0,
            PreguntaID: this.cantPreg,
          },
          headers
        )
        .then((response) => {
          let res = response.data;
        })
        .catch((error) => {
          this.error.push(error);
        });
      // Enviar resp 2
      axios
        .post(
          "http://localhost:1323/api/app/respuestas",
          { Resp: this.Resp2, Valor: 0, PreguntaID: this.cantPreg },
          headers
        )
        .then((response) => {
          let res = response.data;
        })
        .catch((error) => {
          this.error.push(error);
        });
      // Enviar resp 3
      axios
        .post(
          "http://localhost:1323/api/app/respuestas",
          {
            Resp: this.Resp3,
            Valor: 0,
            PreguntaID: this.cantPreg,
          },
          headers
        )
        .then((response) => {
          let res = response.data;
        })
        .catch((error) => {
          this.error.push(error);
        });
      // Enviar resp 4
      axios
        .post(
          "http://localhost:1323/api/app/respuestas",
          { Resp: this.Resp4, Valor: 5, PreguntaID: this.cantPreg },
          headers
        )
        .then((response) => {
          let res = response.data;
        })
        .catch((error) => {
          this.error.push(error);
        });
      alert("Pregunta insertada correctamente.");
      this.defaultData();
    },
    selectPreg(e) {
      e.preventDefault()
      this.PreguntaID = this.PregSelect;
      console.log(this.PreguntaID)
      axios
        .get(
          "http://localhost:1323/api/app/reguntas/:id",
          this.PreguntaID,
          headers
        )
        .then((res) => {
          res.data.forEach((element) => {
            this.Preg = element.Preg;
          });
        })
        .catch((err) => {
          console.log(err)
        });
    },
  },
};
</script>

/* */
