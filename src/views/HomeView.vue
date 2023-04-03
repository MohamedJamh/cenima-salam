<template lang="">
    <section >
        <div class="tw-flex tw-min-h-screen xl:tw-max-w-screen-2xl xl:tw-mx-auto xl:tw-border-x-2 xl:tw-border-zinc-700"
            >
            <main class="tw-flex-1 tw-py-10 tw-px-5 sm:tw-px-10">
                <section>
                    <router-link to="/Popular">tttt</router-link>
                    <nav class="tw-flex tw-space-x-6 tw-text-white tw-font-medium">
                        <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">TV Series</a>
                        <a href="#" class="tw-text-white tw-font-semibold">Movies</a>
                        <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">Animes</a>
                    </nav>
                    <moviebanner
                    :movie="this.$store.getters.getPopular[0]"
                    />
                    
                    <moviesection
                    component-name="long"
                    :nombre-poster="4"
                    section-title="Premier"
                    :movies="this.$store.getters.getPremier"
                    all-movies-path="" />
                </section>

                <section class="tw-mt-9">
                    <moviesection 
                    component-name="wide"
                    :nombre-poster="3"
                    section-title="Upcoming"
                    :movies="this.$store.getters.getUpcoming"
                    all-movies-path="" />
                </section>
            </main>

            <rightsidebar 
                
                :side-sections-data="[
                    { 
                        'title' : 'Premier' , 
                        'movies' : this.$store.getters.getPremier,
                        'path' : '/Premier',
                        'show' : true
                    },
                    { 
                        'title' : 'Upcoming' , 
                        'movies' : this.$store.getters.getUpcoming,
                        'path' : '/Upcoming',
                        'show' : true
                    }
                ]"
            />
        </div>
    </section>
</template>
<script>
import moviebanner from '@/components/MovieBanner.vue'
import moviesection from '@/components/MovieSection.vue'
import rightsidebar from '@/components/RightSideBar.vue'

export default {
    async beforeCreate(){
        await this.$store.dispatch('checkAvailableData')
    },
    data(){
        return {
            
        }
    },
    components:{
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