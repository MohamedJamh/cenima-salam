<template >
    <div>
        {{ $store.state.test }}
        <h2>this is Home page 'yey'</h2>
        <router-link to="/about">Go to about</router-link>
    </div>
</template>
<script>
export default {
    created(){
        this.$store.dispatch('loggedIn')
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