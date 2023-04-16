<template >
    <div 
    class=" tw-relative tw-rounded-xl tw-overflow-hidden"
    >
        <img :src="imgPath" class="tw-object-cover tw-h-full tw-w-full tw--z-10" alt="">
        <div class="tw-absolute tw-top-0 tw-h-full tw-w-full tw-bg-gradient-to-t tw-from-black/50 tw-p-3 tw-flex tw-flex-col tw-justify-between">
            <div></div>
            <div class="tw-self-center tw-flex tw-flex-col tw-items-center tw-space-y-2">
                <span v-if="title" class="tw-capitalize tw-text-white tw-font-medium tw-drop-shadow-md">{{ title }}</span>
                <span v-if="rate" class="tw-text-gray-100 tw-text-xs">+{{ rate }}</span>
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