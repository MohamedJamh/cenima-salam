<template >
    <section class="tw-mt-9">
        <div class="tw-flex tw-items-center tw-justify-between">
            <span class="tw-font-semibold tw-text-white tw-text-base">{{ this.sectionTitle }}</span>
            <arrowSircleButton link="/Login" />
        </div>
        <div class="tw-mt-4 tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 tw-gap-x-5 tw-gap-y-5">
            <movieposter
            v-for="n in 4"
            :key="n"
                img-path=""
                title=""
                rate="" />
        </div>
    </section>
</template>
<script>

import movieposter from '@/components/MoviePoster.vue'
import arrowcirclebutton from '@/components/ArrowSircleButton.vue'
export default {
    name:'moviesection',
    props: ['sectionTitle','movies','allMoviesPath'],
    components:{
    movieposter,
    arrowcirclebutton,
}

}
</script>
<style >
    
</style>