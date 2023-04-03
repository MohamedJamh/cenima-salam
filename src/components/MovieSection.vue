<template >
    <div class="tw-mt-9">
        <div class="tw-flex tw-items-center tw-justify-between">
            <span class="tw-font-semibold tw-text-white tw-text-base">{{ this.sectionTitle }}</span>
            <arrowcirclebutton link="/Login" />
        </div>
        <div 
        class="tw-mt-4 tw-gap-x-5 tw-gap-y-5 tw-grid tw-grid-cols-2 sm:tw-grid-cols-4" 
        v-if="this.componentName == 'long'">
            <movieposter
                v-for="(movie, index) in movies"
                v-show="index < this.nombrePoster"
                :key="index"
                :img-path="movie.images[0].url"
                :title="movie.title"
                :rate="movie.rate"
            />
        </div>
        <div 
        class="tw-mt-4 tw-gap-x-5 tw-gap-y-5 tw-grid tw-grid-cols-2 sm:tw-grid-cols-3"
        v-if="this.componentName == 'wide'">
            <widemovieposter
                v-for="(movie, index) in movies"
                v-show="index < this.nombrePoster"
                :key="index"
                :img-path="movie.images[1].url"
                :title="movie.title"
                :rate="movie.rate"
            />
        </div>
    </div>
</template>
<script>

import movieposter from '@/components/MoviePoster.vue'
import widemovieposter from '@/components/WideMoviePoster.vue'
import arrowcirclebutton from '@/components/ArrowSircleButton.vue'
export default {
    name:'moviesection',
    props: ['componentName','nombrePoster','sectionTitle','movies','allMoviesPath'],
    components:{
        movieposter,
        widemovieposter,
        arrowcirclebutton
    },
    computed:{
        numberCols(){
            return 'sm:tw-grid-cols-'+ this.nombrePoster
        }
    }

}
</script>
<style >
    
</style>