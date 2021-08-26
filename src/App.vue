<template>
  <TopNav></TopNav>
  <div style="margin-bottom:50px">asdasd</div> 
  <router-view class="views"></router-view>
  <!-- <button @click="test"> test</button> -->
  <Footer></Footer>
</template>





<script>
// import axios from "axios"
import TopNav from "./components/TopBar/TopNav.vue"
import Footer from "./components/Footer/Footer.vue"
export default {
    components: {
      TopNav,
      Footer,
    },
    // methods: {
    //   test() {
    //     axios.post("https://reqres.in/api/register", {
    // "email": "eve.holt@reqres.in",

    // "password": "pistol"

    //     }).then( (res) => {
    //       console.log(res.data);
    //     }).catch((res) => {
    //       console.log(res);
    //     })
    //   }
    // },
}
</script>






<style lang="scss">

div{
    // border: 5px solid black
}

</style>