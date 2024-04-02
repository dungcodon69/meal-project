<template lang="">
    <div  class="bg-white shadow rounded-xl hover:scale-105 transition-all">
                <router-link :to="{name:'mealDetails',params: {id : meal.idMeal}}"><img :src="meal.strMealThumb" :alt="meal.strTags" class="rounded-t-xl w-full h-48 object-cover"></router-link>
                
                <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
                <p class="p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nam, perspiciatis laudantium ab aliquid ad accusantium numquam natus quo ratione necessitatibus corrupti reprehenderit alias nobis quis! Minus voluptates ad ab!</p>
                <div class="p-3">
                    <a :href="meal.strYoutube">Youtube</a>
                </div>
            </div>
</template>
<script setup>
const { meal } = defineProps({
    meal: {
        required:true,
        type:Object
    }
})

</script>
<style lang="">
    
</style>