import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import VueDraggableResizable from "vue-draggable-resizable";
import "ant-design-vue/dist/antd.css";
import "@/assets/css/index.css";
import "@/assets/css/v2.css";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";
Vue.config.productionTip = false;
import * as vClickOutside from "v-click-outside-x";

Vue.use(Antd);
Vue.component("vue-draggable-resizable", VueDraggableResizable);
Vue.use(vClickOutside);
import "./plugins";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
