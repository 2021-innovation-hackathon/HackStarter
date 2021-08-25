<template>
    <header>
        제목 :  <input type="text" class="w-50">
    </header> 
    


    <!-- 조리과정 1단계 -> 2단계 -> 3단계.... 표현 -->
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">레시피 설명</li>
            <li class="breadcrumb-item">재료 설명</li>
            <li class="breadcrumb-item active" aria-current="page">{{current_step + 1}} 단계</li>
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
  <!-- 현재 스텝 -->
  <label for="exampleFormControlTextarea1" class="form-label" value="asd">STEP : {{ titleStep}} </label>
  <!-- 레시피 설명부분 -->
  <textarea v-model="steps[current_step]" class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
  <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-secondary" @click="preStep" ref="preStepDisabled" :disabled="current_step < 1">이전 스텝으로! ◀</button>
      <button type="button" class="btn btn-primary" > 업로드 ✔</button>
      <button type="button" class="btn btn-secondary" @click="nextStep">다음 스텝으로! ▶</button>
  </div>
</div>


</template>
<script>
// import firebase from "firebase"
import {ref , reactive, watch, computed} from "vue"
export default {
    setup() {
        //현제 스텝단계
        const current_step = ref(0);
       // const preStepDisabled = ref(0);
        /*  스텝별 데이터 저장소 
            1st  : 레시피 소개, 
            2nd  : 레시피 재료,
            steps= [
                {
                    사진 : "", 
                    내용 : "", 
                 }, 
                {...step2 }, {...step3 },  {...step4  }
            ]
        */
        const steps = reactive([
            
        ]);
        console.log(steps[current_step.value]);

        const nextStep = () => {
            console.log("nextstep");
            current_step.value += 1; 
            console.log(steps);
        };
        const preStep = () => {
            console.log("preStep");
            current_step.value -= 1 
        }; 
        
        watch(current_step, () => {
            if(current_step.value != 0 ){
                return;
            }
        });
        
        //레시피 설명문 위 title 자연스럽게 처리
        const titleStep = computed (()=>
            current_step.value <2 ? (current_step.value ? "레시피 재료":"레시피 소개") :current_step.value-1
        )

        return {
            current_step,
            steps,
            nextStep,
            preStep,
            titleStep,
        }
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