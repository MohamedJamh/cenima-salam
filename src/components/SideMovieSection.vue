<template>
    <div class="tw-mt-10">
        <span class="tw-font-semibold tw-text-white">{{ this.title }}</span>
        <ul class="tw-mt-4 tw-text-gray-400 tw-text-xs tw-space-y-3">
            <li>
                <minimovieposter
                    v-for="(movie,index) in movies"
                    v-show="index < 3"
                    :key="index"
                    :title="movie.title"
                    :img-path="movie.images[0].url"
                    :genres="movie.genres"
                    :rate="movie.rate"
                />
            </li>
            <li class="tw-pt-1">
                <a href="#" class="tw-px-5 tw-py-2.5 tw-bg-red-600 hover:tw-bg-red-700 tw-rounded-lg tw-text-center tw-font-medium tw-block tw-text-white">See More</a>
            </li>
        </ul>
    </div>


</template>
<script>
import minimovieposter from '@/components/MiniMoviePoster.vue'

export default{
    name:'sidemoviesection',
    props:['title','movies','allMoviesPath'],
    components:{
        minimovieposter,
    }
}

</script>
<style></style>