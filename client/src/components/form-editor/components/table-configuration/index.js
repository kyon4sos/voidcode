import Comp from "./index.vue";

const tableConfiguration = {
  install: (vue) => {
    vue.component(Comp.name, Comp);
  },
};

export default tableConfiguration;
