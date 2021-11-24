import Comp from "./index.vue";

const table = {
  install: (vue) => {
    vue.component(Comp.name, Comp);
  },
};

export default table;
