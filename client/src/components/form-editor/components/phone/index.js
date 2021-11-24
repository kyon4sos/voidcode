import Comp from "./index.vue";

const address = {
  install: (vue) => {
    vue.component(Comp.name, Comp);
  },
};

export default address;
