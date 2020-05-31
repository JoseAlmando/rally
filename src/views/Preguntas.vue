<template>
  <div class=" bg-gray-200">

     <div class="text-right bg-gray-200">
      <router-link to="/ganadores">
        <button class="bg-blue-901 border p-3 m-2 rounded">Ver ganadores</button>
      </router-link>
       <router-link to="/equipos">
        <button class="bg-blue-901 border p-3 m-2 rounded">Registrar equipos</button>
      </router-link>
    </div>

    <div class="flex justify-center items-center h-screen bg-gray-200 md:w-full">
      <div class="md:w-7/12 p-2">
        <form action class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 mt-10">
          <div class="mb-4">
            <h1 class="text-center text-green-500 text-xl font-bold mb-2">Registro de preguntas</h1>
          </div>

          <div class="flex justify-around mb-4">
            <div class="w-4/6">
              <label class="block text-gra  y-700 text-md font-bold mb-2" for="username">Pregunta</label>
              <input
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pregunta"
                type="text"
                placeholder="Pregunta"
              />
            </div>
            <div class="w-2/6 ml-2">
              <label class="block text-gray-700 text-md font-bold mb-2" for="estacion">Estación</label>
              <select
                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option v-for="(n,i) in noest" v-bind:key="i">
                  <span>{{ n }}</span>
                </option>
              </select>
            </div>
          </div>
          <label
            class="block text-gray-700 text-md font-bold mb-2"
            for="estacion"
          >Respuestas incorrectas</label>

          <div class="flex justify-between mb-4">
            <div class="w-4/12 mr-2">
              <input
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ri1"
                type="text"
                placeholder="Respuesta incorrecta 1"
              />
            </div>
            <div class="w-4/12">
              <input
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ri2"
                type="text"
                placeholder="Respuesta incorrecta 2"
              />
            </div>
            <div class="w-4/12 ml-2">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ri2"
                type="text"
                placeholder="Respuesta incorrecta 3"
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-md font-bold mb-2"
              for="estacion"
            >Respuesta Correcta</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ri2"
              type="text"
              placeholder="Respuesta correcta"
            />
          </div>
          <div class>
            <button
              class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >Registrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import axios from 'axios'
export default {
  name: "PR",
  components: {
    Menu
  },
  data() {
    return {
      noest: 8,
      error: []
    };
  },
  methods: {
    formSubmit(e){
      e.preventDefault();
      axios
      .post('',{
        
      } )
      .then(response => response.data)
      .catch(error => this.error.push(error))
    }
  },
};
</script>