<template>
    <header>
        제목 :  <input type="text"  class="w-50" v-model="title_">
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
        checkStatus_
        <div>
            <input type="text" v-model="checkStatus_.animal">
        </div>
            <br>
<!-- 나이 -->
        <div>
            <input type="text" v-model="checkStatus_.age">
        </div>
            <br>
<!-- 상태 -->
        <div>
            <input type="text" v-model="checkStatus_.status">
        </div>
      
<!-- 레시피 옵션 끝  -->

    <div class="recipe-img w-80 vh-75  container">
        <img :src="img_[current_step]" alt="">

        <div class="input-group mb-3">
            <input type="file" ref="imgFile" class="form-control" id="inputGroupFile01" @change="previewImg">
        </div>
    </div>


<div class="mb-3">
  <!-- 현재 스텝 -->
  <label for="exampleFormControlTextarea1" class="form-label" value="asd">STEP : {{ titleStep}} </label>
  <!-- 레시피 설명부분 -->
  <textarea v-model="steps_[current_step]" class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
  <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-secondary" @click="preStep" ref="preStepDisabled" :disabled="current_step < 1">이전 스텝으로! ◀</button>
      <button type="button" class="btn btn-secondary" @click="nextStep">다음 스텝으로! ▶</button>
  </div>
</div>

</template>
<script>
import { ref ,  computed } from "vue"
import {useStore} from "vuex";

export default {
    setup() {
        const store = useStore();
        console.log(store.state.replacestate.steps);
        console.log(store.state.replacestate);
        console.log(store.state.replacestate);

        const title_ = ref(store.state.replacestate.title);
        const steps_ = ref(store.state.replacestate.steps); 
        const img_   = ref(store.state.replacestate.img);
        const checkStatus_ = ref(store.state.replacestate.checkStatus);

        console.log(title_)
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

        const nextStep = () => {
            current_step.value += 1; 
        };

        const preStep = () => {
            current_step.value -= 1 
        }; 
        
        //레시피 설명문 위 title 자연스럽게 처리
        const titleStep = computed (()=>
            current_step.value <2 ? (current_step.value ? "레시피 재료":"레시피 소개") :current_step.value-1
        );

        //레시피 사진 스토리지 업로드


        //레시피 사진 바꾸면 화면에 렌더링.
        // 구조 steps_img[0] = img.result  (짝수)
        //      steps_img[1] = files[0]     (홀수)

        // to-do : 체크박스 한줄당 하나씩은 체크해야 submit 버튼 열리게 만들기.
        return {
            current_step,
            nextStep,
            preStep,
            titleStep,
            title_,
            steps_, 
            img_,
            checkStatus_,
        }
    },
    
    
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