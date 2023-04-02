<template >
    <div class="tw-mt-9">
        <div class="tw-flex tw-items-center tw-justify-between">
            <span class="tw-font-semibold tw-text-white tw-text-base">{{ this.sectionTitle }}</span>
            <arrowcirclebutton link="/Login" />
        </div>
        <div class="tw-mt-4 tw-grid tw-grid-cols-2 tw-gap-x-5 tw-gap-y-5" :class="numberCols">
            <component
                :is="this.componentName"
                v-for="n in this.nombrePoster"
                :key="n"
                img-path=""
                title=""
                rate=""
            ></component>
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