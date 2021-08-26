<template>
    <header>
        제목 :  <input type="text"  class="w-50" v-model="title">
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
                <input class="form-check-input" type="checkbox" value="dog" id="dog" v-model="checkStatus.animal"/>
                <label class="form-check-label" for="dog">
                    강아지 🐕
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="cat" id="cat" v-model="checkStatus.animal">
                <label class="form-check-label" for="cat">
                    고양이 🐈
                </label>
            </div>
            <br>

<!-- 나이 -->
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="pet-age" id="default" value="default" checked v-model="checkStatus.age">
                <label class="form-check-label" for="default">
                    상관 없어요!
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="pet-age" id="low" value="young" v-model="checkStatus.age">
                <label class="form-check-label" for="low">
                    나이가 어려요!
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="pet-age" id="high" value="old" v-model="checkStatus.age">
                <label class="form-check-label" for="high">
                    나이가 많아요!
                </label>
            </div>
            <br>
<!-- 상태 -->

            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="sick" id="sick" v-model="checkStatus.status">
                <label class="form-check-label" for="sick">
                    처방식
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="diet" id="diet" v-model="checkStatus.status">
                <label class="form-check-label" for="diet">
                    다이어트
                </label>
            </div>
<!-- 레시피 옵션 끝  -->

    <div class="recipe-img w-80 vh-75  container">
        <img src="" alt="" ref="imgView">

        <div class="input-group mb-3">
            <input type="file" ref="imgFile" class="form-control" id="inputGroupFile01" @change="previewImg">
        </div>
    </div>


<div class="mb-3">
  <!-- 현재 스텝 -->
  <label for="exampleFormControlTextarea1" class="form-label" value="asd">STEP : {{ titleStep}} </label>
  <!-- 레시피 설명부분 -->
  <textarea v-model="steps[current_step]" class="form-control" id="exampleFormControlTextarea1" rows="7" v-show="current_step!=1">
  </textarea>
  



<div class="input-group" v-for="i in count" :key=i v-show="current_step==1">
  <span class="input-group-text">재료. {{i}}</span>
    <input type="text" placeholder="재료명..." class="form-control" v-model="comp[i]">
    <span class="input-group-text">무게</span>
    <input type="number" placeholder="몇 그람인가요??" class="form-control" v-model="mess[i]">
    <span class="input-group-text">g(그람)</span>
</div>
<button @click="add" v-show="current_step==1">재료 추가하기!</button>




  <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-secondary" @click="preStep" ref="preStepDisabled" :disabled="current_step < 1">이전 스텝으로! ◀</button>
      <button type="button" class="btn btn-primary" @click="submitRecipe" > 업로드 ✔</button>
      <button type="button" class="btn btn-secondary" @click="nextStep">다음 스텝으로! ▶</button>
  </div>
</div>
<button @click="asdf">asdfasdfasdf</button>
</template>
<script>
import firebase from "firebase"
import { ref , reactive,  computed} from "vue"
export default {
    setup() {
        //파이어베이스 이닛
        const db = firebase.firestore();
        const storage = firebase.storage();

        const asdf = () => { console.log(URLList)};
//재료 입력////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const count = ref(1);
    const comp  = reactive([

    ])
    const mess = reactive([

    ])
    const compMess = reactive({});
    const add = () => {
      console.log(comp[1])
      var temp = comp[count.value]; 
    compMess[temp] = mess[count.value];
      count.value+=1
      console.log(compMess);

    };
//재료 입력////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



        //레시피 제목
        const title = ref("제목 입력해주세요!");

        //이미지 파일 바인딩
        const imgFile = ref(null);
        //현제 스텝단계
        const current_step = ref(0);
        const imgView = ref(null);
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
            "여기에 순서대로 레시피를 적어주세요!"
        ]);
        const steps_img = reactive ([

        ]);
        const img_toUpload = reactive([

        ]);
        const URLList = reactive([

        ]);
        const checkStatus = reactive({
            animal : ['dog'],
            age    : 'default' ,
            status : [],
        });
        
        console.log(steps[current_step.value]);

        const nextStep = () => {
            console.log(img_toUpload);
            current_step.value += 1; 
            console.log(URLList[-1])
            if(steps_img[current_step.value*2]){
                var reader = new FileReader();
                reader.onload = function() { 
                    imgView.value.setAttribute("src",  steps_img[current_step.value*2].result); 
                }; 
                reader.readAsDataURL(steps_img[current_step.value*2+1]);
            }
        };
        const preStep = () => {
            console.log("preStep");
            current_step.value -= 1 

            if(steps_img[current_step.value*2]){
                var reader = new FileReader();
                reader.onload = function() { 
                    imgView.value.setAttribute("src",  steps_img[current_step.value*2].result); 
                }; 
                reader.readAsDataURL(steps_img[current_step.value*2+1]);
                console.log(steps_img)
            }
        }; 
        
        //레시피 설명문 위 title 자연스럽게 처리
        const titleStep = computed (()=>
            current_step.value <2 ? (current_step.value ? "레시피 재료":"레시피 소개") :current_step.value-1
        );

        //레시피 업로드
        const upLoadRecipe = () => {
            
            img_toUpload.forEach((file, index)=>{
                var storageRef = storage.ref();
                var savePath = storageRef.child('img/'+ file.name );
                var upload = savePath.put(file);
                upload.on('state_changed', 
                    null,
                    (err) => {
                        console.log("upload 실패 ")
                        console.log(err)
                    }, () => {
                        upload.snapshot.ref.getDownloadURL().then((url) => {
                            URLList[index] = url;
                            console.log(URLList[index]);
                        });
                    }
                )
            })  
            
            // !!!!!! 이부분 문제가 forEach가 끝나고 아래 함수가 시작해야하는데 동시에 시작되는 거 같음... 
            setTimeout(function() {
                console.log("@", URLList.length);
                console.log("@", URLList.length);
                console.log(URLList[1]);
                console.log(URLList);
                if(URLList[-1]){
                    console.log("마지막 URL 있음")
                } else{
                    URLList[URLList.length-1] ="https://firebasestorage.googleapis.com/v0/b/petsrecipes.appspot.com/o/img%2FPetsRecipe_logo-001%20(2).png?alt=media&token=f1b34f13-bac9-4895-9a6f-b6ee06207044"
                    console.log(URLList);
                }


                for(var i = URLList.length-1; i >=0; i--){
                        for(var j = i-1 ; j>=0 ; j--){
                            if(URLList[j]){
                                console.log("asdasd");
                                continue;                             
                            } else {
                                URLList[j] = URLList[i];
                            }
                    }
                }
                uploadDB();
            }, 5000);
            
                
        
            

            
            // upload.on('state_changed', 
            //     null,
            //     (err) => {
            //         console.log("upload 실패 ")
            //         console.log(err)
            //     }, () => {
            //         upload.snapshot.ref.getDownloadURL().then((url) => {
            //             console.log(url);
            //         });
            //     }
            // )
        }
        const uploadDB = () => {
            db.collection("/recipes").add({
                "title":title.value,
                "img": URLList,
                "steps":steps,
                checkStatus,
                "Date": new Date(),
                compMess,
            }); 
        }
        const submitRecipe = () => {
            console.log(checkStatus.animal); 
            console.log(checkStatus.age); 
            console.log(checkStatus.status); 
            upLoadRecipe();
        }

        //레시피 사진 스토리지 업로드


        //레시피 사진 바꾸면 화면에 렌더링.
        // 구조 steps_img[0] = img.result  (짝수)
        //      steps_img[1] = files[0]     (홀수)
        const previewImg = (e) =>{
            var reader = new FileReader();

             
            steps_img[current_step.value*2+1] = e.target.files[0];
            img_toUpload[current_step.value] =e.target.files[0];

            reader.onload = function(e) { 
                steps_img[current_step.value*2]=e.target; 
                imgView.value.setAttribute("src",  steps_img[current_step.value*2].result); 

                
            }; 
            reader.readAsDataURL(steps_img[current_step.value*2+1]);
            console.log(steps_img)
        };
        // to-do : 체크박스 한줄당 하나씩은 체크해야 submit 버튼 열리게 만들기.
        return {
            current_step,
            steps,
            nextStep,
            preStep,
            titleStep,
            checkStatus,
            submitRecipe,
            db,
            title,
            upLoadRecipe,
            storage,
            imgFile,
            uploadDB,
            steps_img, 
            previewImg,
            imgView,
            img_toUpload,
            URLList,
            add,
            comp,
            count,
            mess,
            compMess,
            asdf,
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