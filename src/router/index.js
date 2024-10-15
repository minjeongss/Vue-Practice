import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Detail from "../pages/Detail.vue";
import CloudEdit from "../pages/CloudEdit.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "", name: "home", component: Home },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
    {
      path: "/cloudEdit",
      name: "cloudEdit",
      component: CloudEdit,
    },
  ],
});

export default router;
