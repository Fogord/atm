import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import cash from "./modules/cash";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
    cash
  },
  strict: debug,
  plugins: []
});
