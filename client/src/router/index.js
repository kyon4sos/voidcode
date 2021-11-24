import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/app",
    name: "app",
    component: () => import("@/views/Render.vue"),
  },
  {
    path: "/newapp",
    name: "newapp",
    component: () => import("@/layout/HeaderLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/NewApp.vue"),
      },
    ],
  },
  {
    path: "/page-edit",
    name: "pageEdit",
    component: () => import("@/layout/EditLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/PageEdit.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
