import { createStore } from 'vuex';

export default createStore({
  state: {
    pageYOffset: 0,
  },
  mutations: {
    setPageYOffset(state, offset) {
      state.pageYOffset = offset;
    },
  },
  actions: {
    receivePageYOffset({ commit }, offset) {
      commit('setPageYOffset', offset);
    },
  },
  getters: {
    getPageYOffset(state) {
      return state.pageYOffset;
    },
  },
});
