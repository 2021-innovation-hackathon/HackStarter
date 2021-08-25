<template>
  <TopNav></TopNav>
  <div style="margin-bottom:50px">asdasd</div>
  <router-view class="views"></router-view>
  <Footer></Footer>
</template>





<script>
import TopNav from "./components/TopBar/TopNav.vue"
import Footer from "./components/Footer/Footer.vue"
export default {
    components: {
      TopNav,
      Footer,
    }
}
</script>






<style lang="scss">

div{
    border: 5px solid black
}

</style>