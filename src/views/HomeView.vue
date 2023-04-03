<template lang="">
    <section class="tw-bg-zinc-900">
        <div class="tw-flex tw-min-h-screen xl:tw-max-w-screen-2xl xl:tw-mx-auto xl:tw-border-x-2 xl:tw-border-zinc-700"
            v-if=(popular)
            >
            <main class="tw-flex-1 tw-py-10 tw-px-5 sm:tw-px-10">
                <section>
                    <nav class="tw-flex tw-space-x-6 tw-text-white tw-font-medium">
                        <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">TV Series</a>
                        <a href="#" class="tw-text-white tw-font-semibold">Movies</a>
                        <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">Animes</a>
                    </nav>
                    <moviebanner
                    :movie="popular[0]"
                    />
                    
                    <moviesection
                    component-name="long"
                    :nombre-poster="4"
                    section-title="Premier"
                    :movies="premier"
                    all-movies-path="" />
                </section>

                

                <section class="tw-mt-9">
                    <moviesection 
                    component-name="wide"
                    :nombre-poster="3"
                    section-title="Upcoming"
                    :movies="upcoming"
                    all-movies-path="" />
                </section>
            </main>

            <rightsidebar 
            
            />
        </div>
    </section>
</template>
<script>
import axios from 'axios'
import moviebanner from '@/components/MovieBanner.vue'
import moviesection from '@/components/MovieSection.vue'
import rightsidebar from '@/components/RightSideBar.vue'

export default {
    async created(){
        await this.getPopularMovies()
        await this.getPremierMovies()
        await this.getUpcomingMovies()
    },
    data(){
        return {
            popular : null,
            premier: null,
            upcoming: null,
        }
    },
    components:{
        moviebanner,
        moviesection,
        rightsidebar
    },
    methods:{
        async getPopularMovies(){
            const response = await axios.get('movie')
            this.popular = await response.data.result
            this.$store.commit('storeMovies',[response.data.result,'popular'])
        },
        async getPremierMovies(){
            const response = await axios.get('movie/premier')
            this.premier = await response.data.result
            this.$store.commit('storeMovies',[response.data.result,'premier'])

        },
        async getUpcomingMovies(){
            const response = await axios.get('movie/upcoming')
            this.upcoming = await response.data.result
            this.$store.commit('storeMovies',[response.data.result,'upcoming'])
        }
    }
}
</script>
<style lang="">
    
</style>