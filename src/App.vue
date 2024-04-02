<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
            <router-link :to="{name:'home'}" class=" inline-flex items-center px-5 hover:bg-purple-200 transition-colors text-orange-500 font-bold">Home</router-link>

            <div class="flex items-center gap-2">
                <router-link :to="{name:'byName'}" class="px-5 hover:bg-orange-500 hover:text-white h-full flex items-center transition-colors">Search Meals</router-link>
                <router-link :to="{name:'byLetter'}" class="px-5 hover:bg-orange-500 hover:text-white h-full flex items-center transition-colors">Meals by Letter</router-link>
                <router-link :to="{name:'ingredients'}" class="px-5 hover:bg-orange-500 hover:text-white h-full flex items-center transition-colors">Meals by Ingredients</router-link>
            </div>

        </header>
        <div class="max-w-[1200px] mx-auto">
            <router-view></router-view>
        </div>
    
</template>

<script setup>

</script>

<style scoped>

</style>
