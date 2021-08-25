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
import firebase from "firebase"

export default {
  components: {
    MainImg,
    DogRecipe,
    CatRecipe,
  },
  setup() {
    const db = firebase.firestore();
    db.collection('recipes').get().then((res)=>{
      res.forEach((ress) => {
        console.log(ress.data())
      })
    })
  }
};
</script>
<style lang="scss" scoped>
</style>