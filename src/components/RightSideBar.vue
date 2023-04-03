<template>
    <aside class="tw-w-1/5 tw-py-10 tw-px-10 tw-min-w-min tw-border-l tw-border-zinc-700 tw-hidden lg:tw-block">
        <searchbar

        />
        <sidemoviesection
            title="Popular"
            :movies="this.$store.getters.getPopular"
            all-movies-path=""
        />

        <sidemoviesection
            v-if="this.$store.state.user"
            title="Favorites"
            movies=""
            all-movies-path=""
        />
    </aside>
</template>
<script>
import searchbar from '@/components/SearchBar.vue'
import sidemoviesection from '@/components/SideMovieSection.vue'
export default{
    name: "rightsidebar",
    components: { 
        searchbar,
        sidemoviesection
    }
}
</script>
<style>

</style>