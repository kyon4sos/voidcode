import {
  company,
  phone,
  table,
  tableConfiguration,
} from "@/components/form-editor/components/index.js";
import Vue from "vue";

const components = [company, phone, table, tableConfiguration];

components.forEach((com) => {
  Vue.use(com);
});
