<template>
  <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-primary">
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">

          </li>
          <div class="temp">
              <Auth ></Auth>
          </div>
          <div>
              <Login ></Login>
          </div>
          
        </ul>
      </div>
    </div>
  </nav>

  
</template>

<script>
import Login from "./login.vue"
import Auth from "./auth.vue"
export default {
  components:{
    Login,
    Auth,
  },
};
</script>

<style>
.temp{
  display: block;
  margin-left: auto 0;
}

</style>