import { createRouter,createWebHistory } from "vue-router"
import Home from '../view/Home.vue'
import MealsByIngredients from '../view/MealsByIngredients.vue'
import MealsByLetter from '../view/MealsByLetter.vue'
import MealsByName from '../view/MealsByName.vue'
import MealDetails from '../view/MealDetails.vue'
import Ingredients from '../view/Ingredients.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/byLetter/:letter?',
        name:'byLetter',
        component:MealsByLetter
    },
    {
        path:'/byName/:name?',
        name:'byName',
        component:MealsByName
    },
    {
        path:'/ingredients/',
        name:'ingredients',
        component:Ingredients
    },
    {
        path:'/byIngredients/:ingredient?',
        name:'byIngredients',
        component:MealsByIngredients
    },
    {
        path:'/meal/:id?',
        name:'mealDetails',
        component:MealDetails
    },
    
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router