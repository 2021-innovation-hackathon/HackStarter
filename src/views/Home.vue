<template>
  <div>
    <Main-img></Main-img>
    <dog-recipe></dog-recipe>
    <cat-recipe></cat-recipe>

    <div> FireBase Test</div>

    <div> FireBase Test</div>
  </div>
</template>
<script>
import MainImg from "../components/Home/MainImg.vue";
import DogRecipe from "../components/Home/DogRecipe.vue"
import CatRecipe from "../components/Home/CatRecipe.vue"

export default {
  components: {
    MainImg,
    DogRecipe,
    CatRecipe,
  },

};
</script>
<style lang="scss" scoped>
</style>