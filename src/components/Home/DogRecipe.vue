<template>
  <div>강아지 레시피 Peview</div>

  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <!-- 1st  -->
      <div class="carousel-item active" data-bs-interval="3000">
        <div class="page-box">
          
<!-- 카드1 -->
<div class="card" style="width: 25%;">
  <img src="../../assets/logo.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
<!-- 카드1 -->

<!-- 카드2 -->
<div class="card" style="width: 25%;">
  <img src="../../assets/logo.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
<!-- 카드2 -->

<!-- 카드3 -->
<div class="card" style="width: 25%;">
  <img src="../../assets/logo.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
<!-- 카드3 -->

<!-- 카드4 -->
<div class="card" style="width: 25%;">
  <img src="../../assets/logo.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
<!-- 카드4 -->


        </div>
      </div>
      <!-- 1st  -->

      <!-- 2nd -->
      <div class="carousel-item"  data-bs-interval="3000">
        <div class="page-box">

<!-- 카드1 -->
<div class="card" style="width: 25%;">
  <img src="../../assets/Pet_Img2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
<!-- 카드1 -->
<!-- 카드2 -->
<div class="card" style="width: 25%;">
  <img src="../../assets/Pet_Img2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
<!-- 카드2 -->
<!-- 카드3 -->
<div class="card" style="width: 25%;">
  <img src="../../assets/Pet_Img2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
<!-- 카드3 -->
<!-- 카드4 -->
<div class="card" style="width: 25%;">
  <img src="../../assets/Pet_Img2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
</div>
<!-- 카드4 -->


        </div> 
      </div>
      <!-- 2nd -->

    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
img {
  background: brown;
}
.page-box {
  display: flex;
  justify-content: space-between;
}
</style>