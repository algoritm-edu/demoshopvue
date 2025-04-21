<template >
    <header>
            <div class="container">
                <nav class="header__nav" style="display:flex; gap:40px;">
                    <router-link v-for="data in navbarlink" :to="data.link">{{ data.title }}</router-link>
                </nav>
            </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            navbarlink:[
                {
                    link:"/",
                    title:"Home",
                    active:true
                },
                {
                    link:"/about",
                    title:"About",
                    active:false
                },
                {
                    link:"/product",
                    title:"Product",
                    active:true
                },

            ]
        }
    },
}
</script>
<style >
    
</style>