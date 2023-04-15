<template>
    <section class="tw-bg-zinc-900 tw-text-white" >
        <div class="tw-flex tw-min-h-screen xl:tw-max-w-screen-2xl xl:tw-mx-auto xl:tw-border-x-2 xl:tw-border-zinc-700">
            <main class="tw-flex-1 tw-py-10 tw-px-5 sm:tw-px-10">
                    <navbar />
                    <moviebanner
                    :movie="popular[0]"
                    />
                    
                    <moviesection
                    component-name="long"
                    :nombre-poster="4"
                    section-title="Premier"
                    :movies="premier"
                    all-movies-path="Showtimes" />

                <section class="tw-mt-9">
                    <moviesection 
                    component-name="wide"
                    :nombre-poster="3"
                    section-title="Upcoming"
                    :movies="upcoming"
                    all-movies-path="/Upcoming" />
                </section>
            </main>

            <rightsidebar 
                
                :side-sections-data="[
                    { 
                        'title' : 'Popular' , 
                        'movies' : popular,
                        'path' : '/Popular',
                        'show' : true
                    },
                    // { 
                    //     'title' : 'Favorit' , 
                    //     'movies' : null,
                    //     'path' : '/my-favorit',
                    //     'show' : this.$store.getters.getUser,
                    //     'message' : 'Login to add movies to the favorit list'
                    // }
                ]"
            />
        </div>
    </section>
</template>
<script>
import navbar from '@/components/Navbar.vue'
import moviebanner from '@/components/MovieBanner.vue'
import moviesection from '@/components/MovieSection.vue'
import rightsidebar from '@/components/RightSideBar.vue'

export default {
    async created(){
        this.popular = await this.$store.dispatch('getPopularMovies').then(data => {
            return data
        })
        this.premier = await this.$store.dispatch('getPremierMovies').then(data => {
            return data
        })
        this.upcoming = await this.$store.dispatch('getUpcomingMovies').then(data => {
            return data
        })
    },
    data(){
        return {
            popular : null,
            premier : null,
            upcoming : null,
        }
    },
    components:{
        navbar,
        moviebanner,
        moviesection,
        rightsidebar
    },
    methods:{

    }
}
</script>
<style lang="">
    
</style>