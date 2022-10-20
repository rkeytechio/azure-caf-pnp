import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HeaderLayout from "../layouts/HeaderLayout.vue";
import FooterLayout from "../layouts/FooterLayout.vue";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    components: { default: HomeView, header: HeaderLayout, footer: FooterLayout },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
