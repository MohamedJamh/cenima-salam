<template >
    <div class="tw-container tw-mx-auto">
        <section>
                <nav class="tw-flex tw-space-x-6 tw-text-gray-400 tw-font-medium">
                    <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">TV Series</a>
                    <a href="#" class="tw-text-gray-700 dark:tw-text-white tw-font-semibold">Movies</a>
                    <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">Animes</a>
                </nav>

                <div class="tw-flex tw-flex-col tw-justify-between tw-mt-4 tw-bg-black/10 tw-bg-blend-multiply tw-rounded-3xl tw-h-80 tw-overflow-hidden tw-bg-cover tw-bg-center tw-px-7 tw-pt-4 tw-pb-6 tw-text-white" style="background-image: url('images/inception.jpg');">
                    <!-- <img class="object-cover w-full h-full" src="images/inception.jpg" alt=""> -->
                    <div class="tw-flex tw--space-x-1 tw-items-center">
                        <img class="tw-rounded-full tw-w-7 tw-h-7 tw-shadow-lg tw-border tw-border-white" src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsrj8csk" alt="" srcset="">
                        <img class="tw-rounded-full tw-w-7 tw-h-7 tw-shadow-lg tw-border tw-border-white" src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsrj8cck" alt="" srcset="">
                        <img class="tw-rounded-full tw-w-7 tw-h-7 tw-shadow-lg tw-border tw-border-white" src="https://api.lorem.space/image/face?w=32&amp;h=32&amp;hash=zsfj8cck" alt="" srcset="">
                        <span class="tw-pl-4 tw-text-xs tw-drop-shadow-lg">+8 friends are watching</span>
                    </div>
                    <div class="tw-bg-gradient-to-r tw-from-black/30 tw-to-transparent tw--mx-7 tw--mb-6 tw-px-7 tw-pb-6 tw-pt-2">
                        <span class="tw-uppercase tw-text-3xl tw-font-semibold tw-drop-shadow-lg">Inception</span>
                        <div class="tw-text-xs tw-text-gray-200 tw-mt-2">
                            <a href="#" class="">Action</a>,
                            <a href="#" class="">Adventure</a>,
                            <a href="#" class="">Sci-Fi</a>
                        </div>
                        <div class="tw-mt-4 tw-flex tw-space-x-3 tw-items-center">
                            <a href="#" class="tw-px-5 tw-py-2.5 tw-bg-red-600 hover:tw-bg-red-700 tw-rounded-lg tw-text-xs tw-inline-block">Watch</a>
                            <a href="#" class="tw-p-2.5 tw-bg-gray-800/80 tw-rounded-lg hover:tw-bg-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="tw-h-4 tw-w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
</template>
<script>
export default {
    created(){
        // this.$store.dispatch('loggedIn')
    },
    data(){
        return {
            user: null
        }
    }
}
</script>
<style>
    
</style>