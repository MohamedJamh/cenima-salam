<template >
    <section >
        <div class="tw-flex tw-min-h-screen xl:tw-max-w-screen-2xl xl:tw-mx-auto xl:tw-border-x-2 xl:tw-border-zinc-700"
            >
            <main class="tw-flex-1 tw-py-10 tw-px-5 sm:tw-px-10">
                <h2 class="tw-text-white tw-text-4xl tw-font-semibold">Popular Movies</h2>
                <moviebanner
                v-for="movie in this.$store.getters.getPopular"
                :movie="movie"
                />
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
import rightsidebar from '@/components/RightSideBar.vue'

export default {
    async created() {
        await this.$store.dispatch('checkAvailableData')
        
        this.asideSecitonsData[0].movies = this.$store.getters.getPremier
        this.asideSecitonsData[1].movies = this.$store.getters.getUpcoming
        
    },
    data(){
        return{
            
        }
    },
    components:{
        moviebanner,
        rightsidebar
    }
}
</script>
<style >
    
</style>