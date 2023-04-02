<template >
    <div class=" tw-relative tw-rounded-xl tw-overflow-hidden">
        <div class="tw-flex tw-flex-col tw-rounded-xl tw-overflow-hidden tw-aspect-square tw-border tw-border-zinc-600">
            <img src="https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg" class="tw-h-4/5 tw-object-cover tw-w-full" alt="">
            <div class="tw-w-full tw-h-1/5 tw-bg-zinc-800 tw-text-white tw-px-3 tw-flex tw-items-center tw-justify-between tw-border-t-2 tw-border-t-red-600">
                <span class="tw-capitalize tw-font-medium tw-truncate">Tenet</span>
                <div class="tw-flex tw-space-x-2 tw-items-center tw-text-xs">
                    <span>7.4</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'widemovieposter',
    props:['imgPath','title','rate']
}
</script>
<style >
    
</style>