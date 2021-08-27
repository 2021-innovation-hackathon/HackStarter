<template>

  <nav class="navbar fixed-top navbar-expand-md navbar-dark ">
  <div class="title">밥은 먹고 다니냥개</div>
    <div class="container-fluid">
      <router-link class="navbar-brand logo-parent" to="/">
        <img
          src="../../assets/PetsRecipe_logo-001.png"
          alt=""
          width="40"
          height="40"
          class="logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 parent-div-box">
          <router-link to="/recipe/list" class="nav-link active fontc" aria-current="page" href="#"
            style="color: crimson;">레시피 목록</router-link
          >
          <router-link to="/recipe/post" class="nav-link fontc" href="#" style="color: crimson;">레시피 작성</router-link>
          <li class="nav-item dropdown"></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
$primary: chocolate;
.parent-div-box{
  height: 100%;
  width:100%;
  justify-content: flex-end
}
nav{
  width: 100vw;
  background: #FCE2EF;
}
.title{
  z-index: 100000;
  display: fixed;
  font-family: 'Gugi', cursive;
      width: 100%;
    position: fixed;
    text-align: center;
        z-index: -11;
}
</style>