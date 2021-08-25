<template>
    <div class="content">
        <div> 사이드 바 </div>
        <SearchBar></SearchBar>
        <div> 검색창</div>
        <Menu></Menu>
    </div>
</template>
<script>
import SearchBar from "../components/recipes/RecipeSearch.vue";
import Menu from "../components/recipes/RecipesMenu.vue";

export default {
    components:{
       SearchBar, 
       Menu, 
    }
}
</script>
<style lang="">
    
</style>