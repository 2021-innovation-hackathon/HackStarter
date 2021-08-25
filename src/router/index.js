import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/recipe/List",
  //   name: "recipes",
  //   component: () =>
  //     import( "../views/RecipeList.vue"),
  // },
  {
    path: "/recipe/post",
    name: "recipesPost",
    component: () =>
      import( "../views/RecipePost.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
