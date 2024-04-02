<template lang="">
    <div class="w-[800px] mx-auto">
        <h1 class="text-5xl text-orange-500">{{meal.strMeal}}</h1>
        <img :src="meal.strMealThumb" alt="">

        <div class="grid grid-cols-1 md:grid-cols-3 text-lg">
            <div><strong clas="font-bold">Category:</strong> {{meal.strCategory }}</div>
            <div><strong clas="font-bold">Area:</strong> {{ meal.strArea }}</div>
            <div><strong clas="font-bold">Tags:</strong> {{ meal.strTags }}</div>
        </div>

        <div>
            {{ meal.strInstructions}}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold ">Ingredients</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind + 1}`]">
                        {{ ind + 1 }}.   {{ meal[`strIngredient${ind + 1}`] }}
                        </li>
                     </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold ">Measures</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strMeasure${ind + 1}`]">
                        {{ ind + 1 }}.   {{ meal[`strMeasure${ind + 1}`] }}
                        </li>
                     </template>
                </ul>
            </div>
        </div>
        <div class="p-3">
                    <a :href="meal.strYoutube">Youtube</a>
                </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})
</script>
<style lang="">
    
</style>