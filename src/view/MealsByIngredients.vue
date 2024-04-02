<template lang="">
    <div>
        <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
            <MealItem v-for="(item, index) in meals" :key="index" :meal="item"></MealItem>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import axiosClient from '../axiosClient';
import store from '../store';
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue';

const ingredients = ref([])
const route = useRoute()
const meals = computed(() => store.state.mealByIngredients)
const ingredient = computed(() => store.state.ingredient)


onMounted(() => {
    store.dispatch('searchMealsByIngredients', route.params.ingredient)
})
</script>
<style lang="">
</style>