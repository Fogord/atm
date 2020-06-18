const state = () => ({
  currency: "grn",
  lastOperation: null,
  banknotes: [
    {
      name: "10",
      rating: 10,
      count: 20
    },
    {
      name: "20",
      rating: 20,
      count: 20
    },
    {
      name: "50",
      rating: 50,
      count: 20
    },
    {
      name: "100",
      rating: 100,
      count: 20
    },
    {
      name: "200",
      rating: 200,
      count: 20
    },
    {
      name: "500",
      rating: 500,
      count: 20
    }
  ],
  error: ""
});

// mutations
const mutations = {
  WITHDRAWAL(state, withdrawalObj) {
    state.banknotes[withdrawalObj.curency].count =
      state.banknotes[withdrawalObj.curency].count -
      withdrawalObj.banknoteCount;

    state.withdrawalCurency = withdrawalObj.curency;
    state.withdrawalCount = withdrawalObj.banknoteCount;

    const amount =
      state.banknotes[withdrawalObj.curency].rating *
      withdrawalObj.banknoteCount;
    const name = state.banknotes[withdrawalObj.curency].name;

    state.lastOperation = `You withdrawaled ${amount} ${state.currency} by ${name} banknotes`;
  },
  ERROR(state, error) {
    state.error = error;
  }
};

// actions
const actions = {
  withdrawal({ commit, state }, withdrawalObj) {
    return new Promise((resolve, reject) => {
      if (withdrawalObj.curency === null) {
        reject(new Error("Choose banknote"));
      }
      if (!isNaN(withdrawalObj.amount)) {
        let amoutCurency =
          state.banknotes[withdrawalObj.curency].count *
          state.banknotes[withdrawalObj.curency].rating;

        let avalibleAmoutCurency =
          +withdrawalObj.amount % state.banknotes[withdrawalObj.curency].rating;

        if (+withdrawalObj.amount <= 0) {
          reject(new Error("Change amount"));
        } else if (
          +withdrawalObj.amount <= amoutCurency &&
          avalibleAmoutCurency === 0
        ) {
          commit("WITHDRAWAL", {
            banknoteCount:
              +withdrawalObj.amount /
              state.banknotes[withdrawalObj.curency].rating,
            curency: withdrawalObj.curency
          });
          resolve();
        } else {
          reject(new Error("Change banknote or amount"));
        }
      } else {
        reject(new Error("Amount is NaN"));
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
