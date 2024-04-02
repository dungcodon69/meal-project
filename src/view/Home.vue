<template lang="">
    <div class="p-8 pb-0 text-orange-500">
      <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
            <MealItem v-for="(item, index) in meals" :key="index" :meal="item"></MealItem>
    </div>
        
           

            
        
    
    


</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import MealItem from '../components/MealItem.vue'
import axiosClient from '../axiosClient';

const meals = ref([]);

onMounted(()=>{
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});



</script>
<style lang="">


</style>