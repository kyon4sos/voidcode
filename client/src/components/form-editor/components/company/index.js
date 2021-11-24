import companyComp from "./index.vue";

const company = {
  install: (vue) => {
    vue.component(companyComp.name, companyComp);
  },
};

export default company;
