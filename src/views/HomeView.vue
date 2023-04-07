<template lang="">
    <section class="tw-bg-zinc-900 tw-text-white" >
        <div class="tw-flex tw-min-h-screen xl:tw-max-w-screen-2xl xl:tw-mx-auto xl:tw-border-x-2 xl:tw-border-zinc-700"
            v-if="this.$store.getters.getPremier"
            >
            <main class="tw-flex-1 tw-py-10 tw-px-5 sm:tw-px-10">
                
                <navbar />
                <section>
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
                        'title' : 'Popular' , 
                        'movies' : this.$store.getters.getPopular,
                        'path' : '/Popular',
                        'show' : true
                    },
                    { 
                        'title' : 'Favorit' , 
                        'movies' : this.$store.getters.getUpcoming,
                        'path' : '/my-favorit',
                        'show' : this.$store.getters.getUser,
                        'message' : 'Login to add movies to the favorit list'
                    }
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
    async beforeCreate(){
        await this.$store.dispatch('checkAvailableData')
    },
    data(){
        return {
            
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