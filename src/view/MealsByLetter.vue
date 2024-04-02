<template lang="">
    <div>
        <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
        <div class="flex gap-2 justify-center text-2xl mt-4">
                <router-link :to="{name:'byLetter', params:{letter:item}}" class="hover:text-orange-500 transition-colors" v-for="item in letters" :key="item">
                    {{ item }}
                </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
            <MealItem v-for="(item, index) in meals" :key="index" :meal="item"></MealItem>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealItem from '../components/MealItem.vue'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const route = useRoute()
const meals = computed(() =>
    store.state.mealByLetter
)

watch(route, () => {
    store.dispatch("searchMealsByLetter", route.params.letter);
})
onMounted(() => {
    store.dispatch("searchMealsByLetter", route.params.letter);
});

</script>
<style lang="">
    
</style>