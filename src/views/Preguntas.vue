<template>
  <div>
    <Menu />
    <div class="bg-gray-200">
      <div
        class="flex justify-center items-center h-screen bg-gray-200 md:w-full"
      >
        <div class="md:w-7/12 p-2">
          <div class="mb-2 flex justify-around">
            <div class="mx-1">
              <input
                type="radio"
                id="nueva_pregunta"
                value="nueva_pregunta"
                v-model="picked"
              />
              <label for="nueva_pregunta" class="font-bold mb-2"
                >Nueva pregunta</label
              >
            </div>

            <div class="mx-1">
              <input
                type="radio"
                id="editar_pregunta"
                value="editar_pregunta"
                v-model="picked"
              />
              <label for="editar_pregunta" class="font-bold mb-2"
                >Editar pregunta</label
              >
            </div>
            <div class="mx-1">
              <input
                type="radio"
                id="eliminar_pregunta"
                value="eliminar_pregunta"
                v-model="picked"
              />
              <label for="eliminar_pregunta" class="font-bold mb-2"
                >Eliminar pregunta</label
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
            @submit="formSubmitQuestion"
            class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 mt-8"
          >
            <div class="mb-4">
              <h1 class="text-center text-green-500 text-xl font-bold mb-2">
                Registro de preguntas
              </h1>
            </div>
            <div class="flex justify-around mb-4">
              <div class="w-4/6">
                <label
                  class="block text-gra y-700 text-md font-bold mb-2"
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
                  <option disabled value
                    >Estacion actual: {{ Estacion }}</option
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
            <div>
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
                    id="respuesta_1"
                    v-model="Resp1"
                    type="text"
                    placeholder="Respuesta incorrecta 1"
                  />
                </div>
                <div class="w-4/12">
                  <input
                    required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="respuesta_2"
                    v-model="Resp2"
                    type="text"
                    placeholder="Respuesta incorrecta 2"
                  />
                </div>
                <div class="w-4/12 ml-2">
                  <input
                    required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="respuesta_3"
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
                  id="respuesta_4"
                  v-model="Resp4"
                  type="text"
                  placeholder="Respuesta correcta"
                />
              </div>
            </div>
            <div class>
              <input
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                value="Registrar pregunta"
                v-if="picked == 'nueva_pregunta' && picked != null"
              />
              <input
                v-if="picked == 'eliminar_pregunta' && picked != null"
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                value="Eliminar"
              />
              <input
                v-if="picked == 'editar_pregunta' && picked != null"
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                value="Editar"
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
var host = "http://localhost:1323";
var respuestas2 = null;
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
      err: [],
      res: [],
      picked: null,
      preguntas: [],
      PregSelect: null,
      Estacion: "Ninguna",
      preguntasId: [],
    };
  },
  mounted() {
    // Obtener estaciones
    axios
      .get(`${host}/api/app/estacion`, headers)
      .then((res) => {
        res.data.forEach((element) => {
          this.estaciones.push({
            ID: element.ID,
            Estacion: element.nombre,
          });
        });
      })
      .catch((err) => {
        this.err.push(err);
      });
    // Obtener preguntas
    axios
      .get(`${host}/api/app/preguntas`, headers)
      .then((res) => {
        if (res.data.length <= 0) {
          this.cantPreg = 1;
        }
        res.data.forEach((element) => {
          this.cantPreg = parseInt(element.ID, 10);
          this.cantPreg++;
          this.preguntas.push({ ID: element.ID, Preg: element.Preg });
        });
      })
      .catch((err) => {
        if (err.res.status == 401) {
          alert("Cierra e inicia seccion");
          window.localStorage.removeItem("_token");
          err = [];
        }
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
      this.err = [];
      this.res = [];
    },

    async selectPreg(e) {
      e.preventDefault();
      this.PreguntaID = this.PregSelect;
      this.preguntasId = [];
      await axios
        .get(
          `${host}/api/app/preguntas/` + this.PreguntaID,
          headers
        )
        .then((res) => {
          this.Preg = res.data.Preg;
          // Get ESTACION
          axios
            .get(
              `${host}/api/app/estacion/` + res.data.EstacionID,
              headers
            )
            .then((res) => {
              alert("Abrir el despliegue de estaciones para ver la acual");
              this.Estacion = res.data.nombre;
            })
            .catch((err) => this.err.push(err));

          let respuestas = res.data.Respuestas;
          let i = 0;
          respuestas.forEach((element) => {
            if (element.Valor == 5) {
              this.Resp4 = element.Resp;
              this.preguntasId.push(parseInt(element.ID, 10));
              respuestas.splice(i, 1);
            }
            i++;
          });
          this.Resp1 = respuestas[0].Resp;
          this.preguntasId.push(parseInt(respuestas[0].ID, 10));
          this.Resp2 = respuestas[1].Resp;
          this.preguntasId.push(parseInt(respuestas[1].ID, 10));
          this.Resp3 = respuestas[2].Resp;
          this.preguntasId.push(parseInt(respuestas[2].ID, 10));
        })
        .catch((err) => this.err.push(err));
    },

    async formSubmitQuestion(e) {
      e.preventDefault();
      if (this.picked == "nueva_pregunta") {
        await this.sendQuestion();
      } else if (this.picked == "editar_pregunta") {
        await this.updateQuestion();
      } else if (this.picked == "eliminar_pregunta") {
        await this.deleteQuestion();
      }
      this.refreshData();
    },

    async sendQuestion() {
      // Enviar pregunta
      await axios
        .post(
          `${host}/api/app/preguntas`,
          {
            Preg: this.Preg,
            EstacionID: parseInt(this.EstacionID, 10),
          },
          headers
        )
        .then((res) => {
          var ID = res.data.ID;
          // Send the first Answer
          axios
            .post(
              `${host}/api/app/respuestas`,
              {
                Resp: this.Resp1,
                Valor: 0,
                PreguntaID: ID,
              },
              headers
            )
            .then((res) => res.data);
          //Send the second Answer
          axios
            .post(
              `${host}/api/app/respuestas`,
              {
                Resp: this.Resp2,
                Valor: 0,
                PreguntaID: ID,
              },
              headers
            )
            .then((res) => res.data);
          //Send the thirty Answer
          axios
            .post(
              `${host}/api/app/respuestas`,
              {
                Resp: this.Resp3,
                Valor: 0,
                PreguntaID: ID,
              },
              headers
            )
            .then((res) => res.data);
          //Send the Fourth Answer
          axios
            .post(
              `${host}/api/app/respuestas`,
              {
                Resp: this.Resp4,
                Valor: 5,
                PreguntaID: ID,
              },
              headers
            )
            .then((res) => res.data);
        })
        .catch((err) => this.err.push(err));
      alert("Pregunta insertada correctamente.");
      this.defaultData();
    },

    deleteQuestion() {
      this.PreguntaID = this.PregSelect;
      axios
        .delete(
          `${host}/api/app/preguntas/` + this.PreguntaID,
          headers
        )
        .then((res) => alert("Pregunta eliminada correctamente."))
        .catch((err) => this.err.push(err));
      this.defaultData();
    },

    async updateQuestion() {
      this.PreguntaID = this.PregSelect; 
      await axios
        .put(
          `${host}/api/app/preguntas/` + this.PreguntaID,
          {
            Preg: this.Preg,
            EstacionID: parseInt(this.EstacionID, 10),
          },
          headers
        )
        .then((res) => {
       
          axios
            .put(
              `${host}/api/app/respuestas/` +
                parseInt(this.preguntasId[0], 10),

              {
                Resp: this.Resp4,
                Valor: 5,
                PreguntaID: this.PreguntaID,
              },
              headers
            )
            .then((res) => res.data);
          //
       
          axios
            .put(
              `${host}/api/app/respuestas/` +
                parseInt(this.preguntasId[3], 10),

              {
                Resp: this.Resp3,
                Valor: 0,
                PreguntaID: this.PreguntaID,
              },
              headers
            )
            .then((res) => res.data);
          //
          

          axios
            .put(
              `${host}/api/app/respuestas/` +
                parseInt(this.preguntasId[2], 10),

              {
                Resp: this.Resp2,
                Valor: 0,
                PreguntaID: this.PreguntaID,
              },
              headers
            )
            .then((res) => res.data);
          //
      
          axios
            .put(
              `${host}/api/app/respuestas/` +
                parseInt(this.preguntasId[1], 10),

              {
                Resp: this.Resp1,
                Valor: 0,
                PreguntaID: this.PreguntaID,
              },
              headers
            )
            .then((res) => res.data);
        })

        .catch((err) => {
          this.err.push(err);
        });
    },

    refreshData() {
      axios
        .get(`${host}/api/app/preguntas`, headers)
        .then((res) => {
          this.preguntas = [];
          res.data.forEach((element) => {
            this.preguntas.push({ ID: element.ID, Preg: element.Preg });
          });
        });
    },
  },
};
</script>
