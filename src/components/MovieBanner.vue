<template >
    <section>
        <div 
        class="tw-flex tw-flex-col tw-justify-between tw-mt-4 tw-bg-black/10 tw-bg-blend-multiply tw-rounded-3xl tw-h-96 tw-overflow-hidden tw-bg-cover tw-bg-top tw-px-7 tw-pt-4 tw-pb-6 tw-text-white" 
        :style="{backgroundImage: 'url(https://image.tmdb.org/t/p/original/'+ movie.images[1].url +')'}">
            <div></div>
            <div class="tw-bg-gradient-to-r tw-from-black/30 tw-to-transparent tw--mx-7 tw--mb-6 tw-px-7 tw-pb-6 tw-pt-2">
                <span class="tw-uppercase tw-text-3xl tw-font-semibold tw-drop-shadow-lg">{{ movie.title }}</span>
                <p class="tw-text-sm tw-text-gray-300">{{ movie.tagline }}</p>
                <div class="tw-text-xs tw-text-gray-300 tw-mt-2">
                    <a class="tw-mx-1" v-for="genre in movie.genres">{{genre}}</a>
                </div>
                <div class="tw-mt-4 tw-flex tw-space-x-3 tw-items-center">
                    <a href="#" class="tw-px-5 tw-py-2.5 tw-bg-red-600 hover:tw-bg-red-700 tw-rounded-lg tw-text-xs tw-inline-block">Watch</a>
                    <a href="#" title="Add movie to your watchlist" class="tw-p-2.5 tw-bg-gray-800/80 tw-rounded-lg hover:tw-bg-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="tw-h-4 tw-w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'moviebanner',
    props:['movie'],
    created(){

    }
}
</script>
<style >
    
</style>