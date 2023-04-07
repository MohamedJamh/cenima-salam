<template >
    <section class="tw-bg-zinc-900 tw-text-white" >
        <div class="tw-flex tw-min-h-screen xl:tw-max-w-screen-2xl xl:tw-mx-auto xl:tw-border-x-2 xl:tw-border-zinc-700"
            >
            <main class="tw-flex-1 tw-py-10 tw-px-5 sm:tw-px-10">
                <navbar />
                <h2 class="tw-text-white tw-text-4xl tw-font-semibold tw-my-4">Premier Movies</h2>
                <moviebanner
                v-for="movie in this.$store.getters.getPremier"
                :movie="movie"
                />
            </main>

            <rightsidebar 
                :side-sections-data="[
                    
                    { 
                        'title' : 'Upcoming' , 
                        'movies' : this.$store.getters.getUpcoming,
                        'path' : '/Upcoming',
                        'show' : true
                    },
                    { 
                        'title' : 'Popular' , 
                        'movies' : this.$store.getters.getPopular,
                        'path' : '/Popular',
                        'show' : true
                    },
                ]"
            />
        </div>
    </section>
</template>
<script>
import navbar from '@/components/Navbar.vue'
import moviebanner from '@/components/MovieBanner.vue'
import rightsidebar from '@/components/RightSideBar.vue'
export default {
    async beforeCreate() {
        await this.$store.dispatch('checkAvailableData')
    },
    data(){
        return{
            
        }
    },
    components:{
        navbar,
        moviebanner,
        rightsidebar
    }
}
</script>
<style >
    
</style>