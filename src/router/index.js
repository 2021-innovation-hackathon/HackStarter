import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipe/list",
    name: "recipes",
    component: () =>
      import( "../views/RecipeList.vue"),
  },
  {
    path: "/recipe/post",
    name: "recipesPost",
    component: () =>
      import( "../views/RecipePost.vue"),
  },
  {
    path: "/recipe/view",
    name: "recipeView",
    component: () =>
      import( "../views/RecipeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
