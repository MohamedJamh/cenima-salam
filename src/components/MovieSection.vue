<template >
    <section class="tw-mt-9">
        <div class="tw-flex tw-items-center tw-justify-between">
            <span class="tw-font-semibold tw-text-gray-700 tw-text-base">{{ this.sectionTitle }}</span>
            <router-link to="/Login">
                <div class="tw-flex tw-items-center tw-space-x-2 tw-fill-gray-500">
                    <svg class="tw-h-8 tw-w-8 tw-rounded-full tw-border tw-p-1 tw-border-red-600 tw-fill-red-600 hover:tw-fill-white hover:tw-bg-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>
                    </svg>
                </div>
            </router-link>
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
export default {
    name:'moviesection',
    props: ['sectionTitle','movies','allMoviesPath'],
    components:{
        movieposter
    }

}
</script>
<style >
    
</style>