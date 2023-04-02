<template >
    <router-link :to="this.link">
        <div class="tw-flex tw-items-center tw-space-x-2 tw-fill-gray-500">
            <svg class="tw-h-7 tw-w-7 tw-rounded-full tw-border tw-p-1 tw-border-white tw-fill-white hover:tw-border-red-600 hover:tw-bg-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>
            </svg>
        </div>
    </router-link>
</template>
<script>
export default {
    name:'arrow-circle-button',
    props:['link']
}
</script>
<style >
    
</style>