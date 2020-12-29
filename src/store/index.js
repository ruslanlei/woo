import { createStore } from 'vuex';

export default createStore({
  state: {
    pageYOffset: 0,
    activeSection: null,
  },
  mutations: {
    setPageYOffset(state, offset) {
      state.pageYOffset = offset;
    },
    setActiveSection(state, sectionName) {
      state.activeSection = sectionName;
    },
  },
  actions: {
    receivePageYOffset({ commit }, offset) {
      commit('setPageYOffset', offset);
    },
    receiveActiveSection({ commit }, sectionName) {
      commit('setActiveSection', sectionName);
    },
  },
  getters: {
    getPageYOffset(state) {
      return state.pageYOffset;
    },
    getActiveSection(state) {
      return state.activeSection;
    },
  },
});
