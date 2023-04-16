<template>
    <div class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-gap-4 tw-h-screen">
        <div class="tw-w-1/3 tw-hidden md:tw-block">
            <movieposter
                :img-path="showtime.movie.images[0].url"
            />
        </div>
        <div class="tw-w-2/3">
            <h1 class=" tw-capitalize tw-text-4xl tw-font-extrabold tw-text-white sm:tw-text-5xl sm:tw-tracking-tight lg:tw-text-6xl">{{ showtime.movie.title }}</h1>
            <p class="tw-mt-2 tw-max-w-3xl tw-text-xl tw-text-white">{{ showtime.movie.tagline }}</p>
            <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 lg:tw-items-center tw-my-2">
                <div class="tw-flex tw-items-center tw-gap-2">
                    <div class="">
                        <v-progress-circular
                        :model-value="showtime.movie.rate * 10"
                        color="green"
                        width="6"
                        size="large"
                        >{{ showtime.movie.rate }}</v-progress-circular>
                    </div>
                    <span v-for="genre in showtime.movie.genres">{{ genre }} ,</span>
                </div>
                <span class="tw-flex tw-item-center tw-gap-2">
                    <v-icon icon="mdi-clock-time-ten"></v-icon>
                    {{ showtime.movie.runtime }}
                </span>
                <span>( {{ showtime.movie.release_date }} )</span>
            </div>
            <h2 class="tw-mt-10 tw-font-bold tw-text-2xl">Overview</h2>
            <p class="tw-mt-2 tw-max-w-3xl tw-text-xl tw-text-white tw-text-justify">{{ showtime.movie.overview }}</p>
            <h2 class="tw-mt-6 tw-font-bold tw-text-xl">Available languages : </h2>
            <div class="tw-flex tw-gap-2 tw-my-2">
                <span>{{ showtime.movie.language }}</span>
            </div>
            <h2 class="tw-mt-6 tw-font-bold tw-text-xl">Production : </h2>
            <div class="tw-flex tw-gap-2 tw-my-2 tw-flex-wrap">
                <span v-for="company in showtime.movie.production_companies">{{ company }}</span>
            </div>
            <div class="tw-mt-8 tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-gap-5">
                <v-btn
                color="primary"
                class=" tw-text-base"
                :loading="load"
                height="50"
                prepend-icon="mdi-ticket"
                @click="load = true ;this.$emit('book')"
                >
                Book Your Ticket
                </v-btn>
                <div class="tw-px-5 tw-py-2 tw-text-base tw-font-bold tw-rounded-md tw-bg-white tw-text-red-700 tw-w-fit">
                    {{ showtime.date }} | {{ showtime.starts }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import movieposter from '@/components/MoviePoster.vue'
export default {
    name : 'showtimeDetails',
    props:['showtime'],
    data(){
        return {
            load : false
        }
    },
    components:{
        movieposter,
    },
    methods:{
    }
    
}
</script>
<style>
    
</style>