<template>
  <div>
    <Menu />
    <div class=" bg-gray-200">
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
                id="eliminar_pregunta"
                value="eliminar_pregunta"
                v-model="picked"
              />
              <label for="eliminar_pregunta" class="font-bold mb-2">
                Eliminar pregunta</label
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
                  <option disabled value="">
                    Estacion actual: {{ Estacion }}
                  </option>
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

          <form
            method="post"
            action
            @submit="formSubmitResponse"
            class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-2 mt-8"
          >
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
            <div class>
              <input
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                value="Registrar"
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
      error: [],
      response: [],
      picked: null,
      preguntas: [],
      PregSelect: null,
      Estacion: "Ninguna",
      preguntasId: [],
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
        if (response.data.length <= 0) {
          this.cantPreg = 1;
        }
        response.data.forEach((element) => {
          this.cantPreg = parseInt(element.ID, 10);
          this.cantPreg++;
          this.preguntas.push({ ID: element.ID, Preg: element.Preg });
        });
      })
      .catch((error) => {
        this.error.push(error);
        console.log(error);
        if (error.response.status == 401) {
          alert("Cierra e inicia seccion");
          window.localStorage.removeItem("_token");
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
      this.error = [];
      this.response = [];
    },
    selectPreg(e) {
      e.preventDefault();
      this.PreguntaID = this.PregSelect;

      axios
        .get(
          "http://localhost:1323/api/app/preguntas/" + this.PreguntaID,
          headers
        )
        .then((res) => {
          const preg = res.data;
          this.Preg = preg.Preg;
          axios
            .get(
              "http://localhost:1323/api/app/estacion/" + preg.EstacionID,
              headers
            )
            .then((res) => {
              alert("Abrir el despliegue de estaciones para ver la acual");
              this.Estacion = res.data.nombre;
            })
            .catch((err) => this.error.push(err));
        })
        .catch((err) => {
          this.error.push(err);
        });
      axios
        .get(
          "http://localhost:1323/api/app/preguntas/" + this.PreguntaID,
          headers
        )
        .then((response) => {
          let respuestas = response.data.Respuestas;
          this.respuestas2 = respuestas;
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
        .catch((error) => {
          this.error.push(error);
        });
    },
    formSubmitQuestion(e) {
      e.preventDefault();
      if (this.picked == "nueva_pregunta") {
        this.sendQuestion();
        alert("Pregunta insertada correctamente.");
      } else if (this.picked == "editar_pregunta") {
        this.updateQuestion();
        alert("Editamos");
      } else if (this.picked == "eliminar_pregunta") {
        this.deleteQuestion();
      }
      this.$forceUpdate();
    },
    formSubmitResponse(e) {
      e.preventDefault();
      if (this.picked == "nueva_pregunta") {
        this.sendAnswer1();
        this.sendAnswer2();
        this.sendAnswer3();
        this.sendAnswer4();
        alert("Respuestas insertadas correctamente.");
      } else if (this.picked == "editar_pregunta") {
        this.updateAnswer4();
        this.updateAnswer3();
        this.updateAnswer2();
        this.updateAnswer1();
        alert("Editamos");
      } else if (this.picked == "eliminar_pregunta") {
        this.deleteQuestion();
      }
      this.defaultData();
      this.$forceUpdate();
    },
    sendQuestion() {
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
    },
    sendAnswer1() {
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
    },
    sendAnswer2() {
      // Enviar resp 2
      axios
        .post(
          "http://localhost:1323/api/app/respuestas",
          {
            Resp: this.Resp2,
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
    },
    sendAnswer3() {
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
    },
    sendAnswer4() {
      // Enviar resp 4
      axios
        .post(
          "http://localhost:1323/api/app/respuestas",
          {
            Resp: this.Resp4,
            Valor: 5,
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
    },

    deleteQuestion() {
      this.PreguntaID = this.PregSelect;
      axios
        .delete(
          "http://localhost:1323/api/app/preguntas/" + this.PreguntaID,
          headers
        )
        .then((res) => {
          alert("eliminada xd");
        })
        .catch((error) => {
          alert("elim");
          this.error.push(error);
        });
      this.defaultData();
      this.$forceUpdate();
    },
    updateQuestion() {
      this.PreguntaID = this.PregSelect;
      axios
        .put(
          "http://localhost:1323/api/app/preguntas/" + this.PreguntaID,
          {
            Preg: this.Preg,
            EstacionID: parseInt(this.EstacionID, 10),
          },
          headers
        )
        .then((res) => res.data)
        .catch((err) => {
          this.error.push(err);
        });
    },
    updateAnswer4() {
      // Enviar resp 4
      axios
        .put(
          "http://localhost:1323/api/app/respuestas/" + this.preguntasId[0],
          {
            Resp: this.Resp4,
            Valor: 5,
            PreguntaID: this.PreguntaID,
          },
          headers
        )
        .then((response) => {
          let res = response.data;
        })
        .catch((error) => {
          this.error.push(error);
        });
    },
    updateAnswer3() {
      // Enviar resp 3
      axios
        .put(
          "http://localhost:1323/api/app/respuestas/" + this.preguntasId[3],
          {
            Resp: this.Resp3,
            Valor: 0,
            PreguntaID: this.PreguntaID,
          },
          headers
        )
        .then((response) => {
          let res = response.data;
        })
        .catch((error) => {
          this.error.push(error);
        });
    },
    updateAnswer2() {
      // Enviar resp 2
      axios
        .put(
          "http://localhost:1323/api/app/respuestas/" + this.preguntasId[2],
          {
            Resp: this.Resp2,
            Valor: 0,
            PreguntaID: this.PreguntaID,
          },
          headers
        )
        .then((response) => {
          let res = response.data;
        })
        .catch((error) => {
          this.error.push(error);
        });
    },
    updateAnswer1() {
      // Enviar resp 1
      axios
        .put(
          "http://localhost:1323/api/app/respuestas/" + this.preguntasId[1],
          {
            Resp: this.Resp1,
            Valor: 0,
            PreguntaID: this.PreguntaID,
          },
          headers
        )
        .then((response) => {
          let res = response.data;
        })
        .catch((error) => {
          this.error.push(error);
        });
    },
  },
};
</script>

/* */
