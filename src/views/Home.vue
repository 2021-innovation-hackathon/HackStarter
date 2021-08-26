<template>
  <div>
    <Main-img></Main-img>
    <dog-recipe></dog-recipe>
    <cat-recipe></cat-recipe>
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




  // 분석 테스트 시작 ! 
  setup() {



    return {

    }
  }
  // 분석 테스트 끝 

};
</script>
<style lang="scss" scoped>
</style>