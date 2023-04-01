<template >
    <div class=" tw-relative tw-rounded-xl tw-overflow-hidden">
        <img src="https://www.jolie.de/sites/default/files/styles/image_gallery360w/public/2020-02/leonardo-dicaprio-oscars.jpg?h=64dbc2fc&amp;itok=EH0B3oo4" class="tw-object-cover tw-h-full tw-w-full tw--z-10" alt="">
        <div class="tw-absolute tw-top-0 tw-h-full tw-w-full tw-bg-gradient-to-t tw-from-black/50 tw-p-3 tw-flex tw-flex-col tw-justify-between">
            <a href="#" class="tw-p-2.5 tw-bg-gray-800/80  tw-rounded-lg tw-text-white tw-self-end hover:tw-bg-red-600/80">
                <svg xmlns="http://www.w3.org/2000/svg" class="tw-h-4 tw-w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <div class="tw-self-center tw-flex tw-flex-col tw-items-center tw-space-y-2">
                <span class="tw-capitalize tw-text-white tw-font-medium tw-drop-shadow-md">Leonardo DiCaprio</span>
                <span class="tw-text-gray-100 tw-text-xs">+12 Movies</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'movieposter',
    props:['imgPath','title','rate']
}
</script>
<style >
    
</style>