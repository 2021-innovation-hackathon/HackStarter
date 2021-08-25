<template>
  <div> 
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/logo.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/PetsRecipe_logo-001.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img src="../assets/logo.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

    <div class="content" style="height:1000px;">
        <div style="height:50%">
            서비스 이용 바로가기
            <router-link to="/recipes">
                <button> 레시피들보러가기</button>
            </router-link>

            <router-link to="/recipes/post">
                <button> 레시피 올리기 </button>
            </router-link>
        </div>
        <div style="height:50%">
            서비스 소개 및 사용법? 
        </div>
    </div>
</template>
<script>
export default {
  
};
</script>
<style lang="scss" scoped>

</style>