<template>
<div>
  <NavBar></NavBar>
  <div style="margin-bottom:50px">asdasd</div>
  <router-view class="views"></router-view>
</div>
</template>





<script>
import NavBar from "./components/TopBar/TopNav.vue"
export default {
    components: {
      NavBar,
    }
}
</script>






<style lang="scss">

div{
    border: 5px solid black
}

</style>