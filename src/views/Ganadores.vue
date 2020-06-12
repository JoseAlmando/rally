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
                <tr v-for="dato in info.slice(0, 5)" :key="dato.id">
                  <td class="border px-4 py-2 px-4 py-2 text-center">
                    <strong>{{ dato.id }}</strong>
                  </td>
                  <td class="border px-4 py-2 px-4 py-2 text-center">
                    {{ dato.name }}
                  </td>
                  <td class="border px-4 py-2 px-4 py-2 text-center">
                    {{ dato.address.street }}
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

export default {
  name: "Ganadores",
  components: {
    Menu,
  },
  data() {
    return {
      datos: [
        {
          Grupo: "1",
          Tiempo: "x",
          Puntaje: "50",
        },
        {
          Grupo: "2",
          Tiempo: "x",
          Puntaje: "50",
        },
      ],
      info: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:1323/usuarios")
      .then((response) => (this.info = response.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
