<template >
    <section class="tw-bg-zinc-900 tw-text-white tw-h-screen">
            <div class="tw-relative tw-bg-cover tw-bg-center tw-w-full tw-h-screen" style="background-image: url('https://image.tmdb.org/t/p/w1280/vSUls0b7dNhC7tJoExF1MBYWWyh.jpg');">
                <div class="tw-bg-black/80 tw-h-screen">
                    <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-gray-900 tw-to-transparent"></div>
                    <div class="tw-relative tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-24">
                        <div class="tw-w-52 tw-h-96 tw-bg-green-300">
                            
                        </div>
                        <h1 class="tw-text-4xl tw-font-extrabold tw-text-white sm:tw-text-5xl sm:tw-tracking-tight lg:tw-text-6xl">Title</h1>
                        <p class="tw-mt-6 tw-max-w-3xl tw-text-xl tw-text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="tw-absolute tw-inset-0 tw-shadow-inner"></div>
                </div>
            </div>
    </section>
</template>
<script>
export default {
    props : ['id'],
    created(){
        this.movie
    },
    data(){
        return {
            showtime : null,
        }
    },
    computed:{
        showtimeId(){
            return this.$route.params.id
        }
    }

}
</script>
<style >
    /* .shadow-inner {
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    } */
</style>