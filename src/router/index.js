import {createRouter, createWebHistory} from 'vue-router'
import Home from '../view/Home/Home.vue'
import Product from '../view/Product/Product.vue'


const routes = [
    {
        path:"/",
        name:"Home",
        component:Home,
    },
    {
        path:"/product",
        name:"Product",
        component:Product
    }
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router
 