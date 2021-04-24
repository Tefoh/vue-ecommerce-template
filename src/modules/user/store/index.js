export default {
  namespaced: true,
  state: () => ({
    user: { name: "tofiq", id: 1 },
    isLoggedIn: true
  }),
  getters: {
    name: (state, getters, rootState, rootGetters) => {
      return state.user.name
    }
  },
  mutations: {
    SET_USER(state) {
      state.user.name = 'mohammad'
    }
  },
  actions: {
    userLog(ctx, payload) {
      console.log(payload)
    }
  }
}