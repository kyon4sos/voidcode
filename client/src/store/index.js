import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: {},
    showPanel: false,
    elements: [],
    paperWidth: 800,
    paperHeight: 600,
  },
  mutations: {
    setShowPanel(state, data) {
      state.showPanel = data;
    },
    setCurrent(state, cur) {
      state.current = cur;
    },
    setStyle(state, style) {
      const idx = state.elements.findIndex((e) => e.id == state.current["id"]);
      console.log(idx);
      if (idx != -1) {
        state.elements[idx].style = style;
      }
    },
    setElements(state, data) {
      state.elements.push(data);
    },
    setPaperWidth(state, width) {
      state.paperWidth = width;
    },
    setPaperHeight(state, width) {
      state.paperHeight = width;
    },
  },
  actions: {},
  modules: {},
});
