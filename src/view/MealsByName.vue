<template lang="">
    <div>
        <div class="flex p-8 justify-center">
                <input type="text" class="rounded border-2 w-full border-gray-200" placeholder="Search for meals.." v-model="keyword" @change="searchMeals">
        </div >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
            <MealItem v-for="(item, index) in meals" :key="index" :meal="item"></MealItem>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import store from '../store';
import { computed } from 'vue';
import { useRoute} from 'vue-router'
import { onMounted } from 'vue';
import MealItem from '../components/MealItem.vue'
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()

const keyword = ref('')
function searchMeals(){
    store.dispatch('searchMeals',keyword.value) 
}
onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value){
        searchMeals()
    }
})
</script>
<style lang="">
    
</style>