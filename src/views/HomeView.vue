<template >
    <main class="tw-container tw-mx-auto tw-px-32">
        <nav class="tw-flex tw-space-x-6 tw-text-gray-400 tw-font-medium">
            <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">TV Series</a>
            <a href="#" class="tw-text-gray-700 dark:tw-text-white tw-font-semibold">Movies</a>
            <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">Animes</a>
        </nav>
        <moviebanner />
        <moviesection
        title="Popular"
        movies=""
        all-movies-path="" />
    </main>
</template>
<script>
import moviebanner from '@/components/MovieBanner.vue'
import moviesection from '@/components/MovieSection.vue'

export default {
    components:{
        moviebanner,
        moviesection
    },
    created(){
        // this.$store.dispatch('loggedIn')
    },
    data(){
        return {
            model :null
        }
    }
}
</script>
<style>
    
</style>