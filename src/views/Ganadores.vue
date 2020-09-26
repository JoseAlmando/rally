<template>
  <div>
    <Menu />
    <div>
      <div class="flex items-center h-screen justify-center bg-gray-200">
        <div class="w-7/12 max-w-2xl">
          <div class="mb-4">
            <h1
              class="text-center bg-green-400 text-white text-xl font-bold mb-2"
            >
              Ganadores
            </h1>
          </div>
          <form action class="bg-white shadow-md rounded px-6 pt-6 pb-8">
            <table class="table-fixed w-full h-full">
              <thead>
                <tr>
                  <th
                    class="w-4/12 px-4 py-2 bg-green-400 justify-center text-green-100 text-center"
                  >
                    No. Grupos
                  </th>
                  <th
                    class="w-4/12 px-4 py-2 bg-green-400 justify-center text-green-100 text-center"
                  >
                    Puntaje
                  </th>
                  <th
                    class="w-4/12 px-4 py-2 bg-green-400 justify-center text-green-100 text-center"
                  >
                    Tiempo
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="dato in info.slice(0, 10)" :key="dato.id">
                  <td class="border px-4 py-2 px-4 py-2 text-center">
                    <strong>{{ dato.ID }}</strong>
                  </td>
                  <td class="border px-4 py-2 px-4 py-2 text-center">
                    {{ dato.Puntaje }}
                  </td>
                  <td class="border px-4 py-2 px-4 py-2 text-center">
                    {{ dato.Transcurso }}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import axios from "axios";
const token = window.localStorage.getItem("_token");
var headers = {
  headers: { Authorization: "Bearer " + token },
};
export default {
  name: "Ganadores",
  components: {
    Menu,
  },
  data() {
    return {
      info: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:1323/api/app/ganadores", headers)
      .then((response) => 
        this.info = response.data
      )
      .catch((error) => {
        if (error.response.status == 401) {
          alert("Cierra e inicia seccion");
          window.localStorage.removeItem("_token");
          error = [];
        }
      });
  },
};
</script>
