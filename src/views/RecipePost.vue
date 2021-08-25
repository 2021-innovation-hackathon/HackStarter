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

    <div class="recipe-text vh-50" >
        Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    </div>



</template>
<script>
export default {
    
}
</script>
<style scoped>
.recipe-img img {
    width: 100%;
}
</style>