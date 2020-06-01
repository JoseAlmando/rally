import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authentication: false,
  },
  mutations: {
    setAuthentication(state, status) {
      state.authentication = status;
    },
  },
  actions: {},
  modules: {},
});
