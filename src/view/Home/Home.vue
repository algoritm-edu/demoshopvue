<template >
    <div class="users">
        <div class="user" v-for="user in Users" :key="user.id">
            <img :src="`https://picsum.photos/id/${Math.floor(Math.random()*600)}/300/300`" :alt="user?.title" width="300">
            <h2>{{ user?.name.firstname }}</h2>
        </div>

        <button @click="paginatioMenu(1)">1</button>
    </div>
</template>
<script>
import api from "../../Utils/Axios.js"
export default {
    data(){
        return{
            Users:[],
            paginationNumber:1
        }
    },
    methods:{
        async getAllUsers(){
            const response = await api.get('/users')
            this.Users = response?.data

            console.log(response.data);
            
        },
        async paginatioMenu(pageNumber){
            const response = await api.get(`/users/${pageNumber}`)
            this.Users = response?.data
        }
    },
    mounted() {
        this.getAllUsers()
    },
}
</script>
<style >
    
</style>


