import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipes",
    name: "recipes",
    component: () =>
      import( "../views/Recipe.vue"),
  },
  {
    path: "/recipes/post",
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
