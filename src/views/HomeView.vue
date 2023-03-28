<template >
    <div>
        <h2>this is Home page 'yey'</h2>
        <router-link to="/about">Go to about</router-link>
    </div>
</template>
<script>
export default {
    created(){
        if(!localStorage.getItem('token')){
            this.$router.push('login')
        }
    },
    data(){
        return {
            user: null
        }
    }
}
</script>
<style>
    
</style>