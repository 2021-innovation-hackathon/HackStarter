<template>
    <header>
        제목 :  <input type="text" class="w-50">
    </header> 
    


    <!-- 조리과정 1단계 -> 2단계 -> 3단계.... 표현 -->
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">레시피 설명</li>
            <li class="breadcrumb-item">재료 설명</li>
            <li class="breadcrumb-item active" aria-current="page">1단계</li>
        </ol>
    </nav>

    <!-- 레시피 옵션선택 -->
<!-- 강아지 - 고양이  -->
<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="" id="dog">
                <label class="form-check-label" for="dog">
                    강아지 🐕
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="" id="cat">
                <label class="form-check-label" for="cat">
                    고양이 🐈
                </label>
            </div>
            <br>

<!-- 나이 -->
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="pet-age" id="default" value="option1" checked>
                <label class="form-check-label" for="default">
                    상관 없어요!
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="pet-age" id="low" value="option1" >
                <label class="form-check-label" for="low">
                    나이가 어려요!
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="pet-age" id="high" value="option1" >
                <label class="form-check-label" for="high">
                    나이가 많아요!
                </label>
            </div>
            <br>
<!-- 상태 -->

            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="" id="hult">
                <label class="form-check-label" for="hult">
                    처방식
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="" id="diet">
                <label class="form-check-label" for="diet">
                    다이어트
                </label>
            </div>
<!-- 레시피 옵션 끝  -->

    <div class="recipe-img w-80 vh-75  container">
        <img src="../assets/Pet_Img2.jpg" alt="">
        <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupFile01">Upload</label>
            <input type="file" class="form-control" id="inputGroupFile01">
        </div>

    </div>




<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">STEP 1.</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
  <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-secondary">이전 스텝으로! ◀</button>
      <button type="button" class="btn btn-primary"> 업로드 ✔</button>
      <button type="button" class="btn btn-secondary">다음 스텝으로! ▶</button>
  </div>
</div>


</template>
<script>
// import firebase from "firebase"

export default {
    setup() {
        /*
            steps= [
                {
                    photo: "", 
                    content: "", 
                 }, 
                {...step2 }, {...step3 },  {...step4  }
            ]
        */
        const steps = [
                
        ],
    },
    // setup() {
    //     const db= firebase.firestore();
    //     db.collection("/recipes/recipe/step").add({
    //         aa:"asdf",
    //     })
    // }
}
</script>
<style scoped>
.recipe-img img {
    width: 100%;
}
.recipe-text{
    height: 600px;
}
</style>