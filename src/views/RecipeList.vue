<template>
    <div >

<!-- 레시피 모아보기 + 레시피 등록 버튼</h1> -->
    <div class="top"> 
        <span> 레시피 모아보기 </span>    
        <button> 레시피 등록 </button>
    </div>    



        <!-- 검색 필터 </h2> -->
    <div class="filter container">
        <div class="align-middle container">
            <input type="text" class="form-control col-3" id="inputPassword2" placeholder="조리법 검색하기! 🔍" style="width:60%">
            <button type="submit" class="btn btn-primary mb-3"> 검색 </button>
        </div>

        <div class="align-middle">
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
        </div>


        <!--  애완동물의 나이  -->
        <div class="align-middle">
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
        </div>

        <!-- 애완동물 상태 (처방식, 다이어트 .... ) -->
        <div class="align-middle">
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
        </div>
    </div>
        <!-- <h3> 검색 정렬</h3> -->
    <div class="array">
        <select class="form-select form-select-sm">
            <option selected>최신 순</option>
            <option value="1">추천 순</option>
        </select>
    </div>



        <!-- <h2> 검색 결과들 무한 스크롤</h2> -->
    <div class="post-list"></div>



    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.top{
    display: flex;
    justify-content:space-between;
}
.filter{
    
}
.array{

}
.post-list{

}
.align-middle{
    display:flex;
    justify-content: space-evenly;
}
.array{
    display: flex;
    justify-content: flex-end;
}
.array select {
    width:20%;
}
</style>