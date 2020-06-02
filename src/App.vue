<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>
<script>
import Menu from "./components/Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
</style>
