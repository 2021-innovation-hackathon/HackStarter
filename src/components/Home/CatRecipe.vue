<template>
    <div>
       고양이 레시피 Preview 
    </div>
  <div
    id="carouselExampleCaptionsCat"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptionsCat"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptionsCat"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <!-- 1st  -->
      <div class="carousel-item active"  data-bs-interval="3000">
        <div class="page-box">
          
<!-- 카드1 -->
<div class="card" style="width: 25%;">
  <img src="https://firebasestorage.googleapis.com/v0/b/petsrecipes.appspot.com/o/img%2F2981_web_original_1513131564916716.jpg?alt=media&token=3d5283a2-deca-4791-aa27-450ffe628b43" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">...제목...</h5>
  </div>
</div>
<!-- 카드1 -->

<!-- 카드2 -->
<div class="card" style="width: 25%;">
  <img src="https://firebasestorage.googleapis.com/v0/b/petsrecipes.appspot.com/o/img%2FKakaoTalk_20210824_182310526.png?alt=media&token=3755e6e4-e225-4831-97d7-3d30fbc44858" class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">...제목...</h5>
  </div>
</div>
<!-- 카드2 -->

<!-- 카드3 -->
<div class="card" style="width: 25%;">
  <img src="https://firebasestorage.googleapis.com/v0/b/petsrecipes.appspot.com/o/img%2FKakaoTalk_20210824_182334788.png?alt=media&token=eec8dba6-73f9-48e3-82c6-fc10fd0e3e43" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">...제목...</h5>
  </div>
</div>
<!-- 카드3 -->

<!-- 카드4 -->
<div class="card" style="width: 25%;">
  <img src="https://firebasestorage.googleapis.com/v0/b/petsrecipes.appspot.com/o/img%2FKakaoTalk_20210824_182341240.png?alt=media&token=7bf5f544-4f37-415d-8cf7-df1f12b4f6a1" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">...제목...</h5>
  </div>
</div>
<!-- 카드4 -->


        </div>
      </div>
      <!-- 1st  -->

      <!-- 2nd -->
      <div class="carousel-item" data-bs-interval="3000">
        <div class="page-box">

<!-- 카드1 -->
<div class="card" style="width: 25%;">
  <img src="https://firebasestorage.googleapis.com/v0/b/petsrecipes.appspot.com/o/img%2FKakaoTalk_20210824_184148783.png?alt=media&token=906c059e-0952-4c7b-9c2b-b0af596a2abd" class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">...제목...</h5>
  </div>
</div>
<!-- 카드1 -->
<!-- 카드2 -->
<div class="card" style="width: 25%;">
  <img src="https://firebasestorage.googleapis.com/v0/b/petsrecipes.appspot.com/o/img%2Fmain.png?alt=media&token=1e08845a-033c-4d10-89b8-d211fc563000" class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">...제목...</h5>
  </div>
</div>
<!-- 카드2 -->
<!-- 카드3 -->
<div class="card" style="width: 25%;">
  <img src="../../assets/Pet_Img2.jpg" class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">...제목...</h5>
  </div>
</div>
<!-- 카드3 -->
<!-- 카드4 -->
<div class="card" style="width: 25%;">
  <img src="../../assets/Pet_Img3.jpg" class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">...제목...</h5>
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
      data-bs-target="#carouselExampleCaptionsCat"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptionsCat"
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