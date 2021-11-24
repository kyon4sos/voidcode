import Comp from "./index.vue";

const Container = {
  install: (vue) => {
    vue.component(Comp.name, Comp);
  },
};

export default Container;
