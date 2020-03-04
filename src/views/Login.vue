<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="w-full max-w-md">
      <form action class="bg-white shadow-md rounded px-8 pt-6 pb-8" @submit="formSubmit" method="post">
        <div class="mb-4">
          <h1 class="text-center text-green-500 text-xl font-bold mb-2">LogIn de inicio</h1>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Nombre de usuario</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-green-600 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Usuario"
            v-model="username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Contraseña</label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            v-model="userpass"
          />
          <p class="text-red-500 text-xs italic">Por favor, digite su contraseña.</p>
        </div>
        <div class>
          <input
            class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
            value="Enviar"
          >
        </div>
      </form>

      <strong v-for="x in res" :key="x">{{x.id}} </strong>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data(){
    return{
      username: null,
      userpass: null,
      res: null
    }
  },
  methods: {
    formSubmit(e){
      e.preventDefault();
      axios
      .post('https://reqres.in/api/users',{
          name: this.username,
          job: this.userpass
      } )
      .then(res => response.data)
      .catch(error => this.error.push(error));

      alert(res);
    }
  },
}
</script>