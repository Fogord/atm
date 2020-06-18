const state = () => ({
  isSignin: false
});

// getters
const getters = {
  auth(state) {
    return state.isSignin;
  }
};

// mutations
const mutations = {
  LOGIN(state) {
    state.isSignin = true;
  },
  LOGOUT(state) {
    state.isSignin = false;
  }
};

// actions
const actions = {
  logIn({ commit }, pincode) {
    return new Promise((resolve, reject) => {
      if (pincode === "0000") {
        localStorage.setItem("isSignin", true);
        commit("LOGIN");
        resolve("result");
      } else {
        reject(new Error("Wrong pincode"));
      }
    });
  },
  logout({ commit }) {
    localStorage.removeItem("isSignin");
    commit("LOGOUT");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
