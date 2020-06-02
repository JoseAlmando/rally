<template>
  <div class="text-right bg-white">
    <router-link to="/login">
      <button
        v-if="isLogin == false"
        class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        @click="logout"
      >
        Entar
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isLogin: this.isLoginF(),
    };
  },
  methods: {
    isLoginF() {
      if (!!window.localStorage.getItem("_token")) {
        return true;
      }
      return false;
    },
    logout() {
      window.localStorage.removeItem("_token");
      this.$router.push("/");
    },
  },
};
</script>
