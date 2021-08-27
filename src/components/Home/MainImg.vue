<template >
  <div class="container bg">
    <div
      id="carouselExampleControls"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img
            src="../../assets/PetsRecipe_logo-0011.png"
            class="d-block w-100 logo"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="../../assets/Pet_Img.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img
            src="../../assets/Pet_Img2.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img
            src="../../assets/Pet_Img3.jpg"
            class="d-block w-100"
            alt="..."
          />
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
</template>


<script>
export default {};
</script>


<style scoped>

img {
  max-height: 70vh;
}
.logo{
    background: brown;
}

</style>