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
#app{
  background: #F7EFEE;
  text-decoration: none;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  font-family: 'Gaegu', cursive;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
}

a{
  style:none;
}
</style>