<template >
    <div>
        {{ this.$store.getters.getPopular }}
    </div>
</template>
<script>
export default {
    created(){
        console.log(this.$store.state.popularMovies)
    }
    
}
</script>
<style >
    
</style>