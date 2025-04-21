<template >
    <div class="products">
        <div class="product" v-for="product in products" :key="product.id">
            <img :src="product?.image" :alt="product?.title" width="300">
            <h2>{{ product?.title.slice(0,20)+"...."  }} <router-link :to="'/products/'+product.id">more</router-link></h2>
        </div>
    </div>
</template>
<script>
import api from "../../Utils/Axios.js"
export default {
    data(){
        return{
            products:[]
        }
    },
    methods:{
        async getAllProduct(){
            const response = await api.get('/products')
            this.products = response?.data
        }
    },
    mounted() {
        this.getAllProduct()
    },
}
</script>
<style >
    
</style>