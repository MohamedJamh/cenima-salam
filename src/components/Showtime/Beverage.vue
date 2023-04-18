<template >
    <div>
        <h1 class=" tw-text-base md:tw-text-4xl tw-font-semibold tw-text-center" >Choose Your Beverage</h1>
        <div class=" tw-cursor-pointer tw-mt-10 tw-gap-x-5 tw-gap-y-5 tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-5">
            <div
            v-for="beverage in beverages"
            class="tw-relative tw-rounded-xl tw-overflow-hidden">
                <div class="tw-flex tw-flex-col tw-flex-wrap tw-rounded-xl tw-overflow-hidden tw-border tw-border-zinc-100/20">
                    <img :src=" beverage.image.url " class="tw-h-4/5 tw-object-cover tw-w-full tw-aspect-square tw-bg-top tw-border-red-500" alt="">
                    <div class="tw-px-2 tw-py-3">
                        <p class="tw-capitalize tw-font-medium tw-truncate">{{ beverage.title }}</p>
                        <p class="tw-capitalize tw-font-light tw-truncate">{{ beverage.description }}</p>
                        <div class="tw-flex tw-space-x-2 tw-items-center tw-text-sm tw-pr-4">
                            <span>{{ beverage.type.name }}</span>
                            <span>{{ beverage.price }} DH</span>
                            <v-checkbox
                            v-model="selectedBeverage"
                            hide-details
                            class="tw-m-0 tw-p-0"
                            label="pick"
                            :value="beverage.id"
                            ></v-checkbox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tw-text-center tw-my-5">
            <v-btn
            :loading="load"
            color="secondary"
            height="40"
            class="tw-w-32 tw-font-bold"
            @click="getTicket()"
            >
            Get Ticket
            </v-btn>
        </div>
    </div>
</template>
<script>
export default {
    props:['beverages'],
    created(){
        
    },
    data(){
        return {
            load:false,
            beverageChoosen : false,
            selectedBeverage : []
        }
    },
    methods:{
        getTicket(){
            this.load = true
            if(this.selectedBeverage.length <= 2){
                this.$emit('addBeverage',this.selectedBeverage)
            }else{
                this.$store.dispatch('notify',{
                    type : 'error',
                    messages : ['Max beverage exceeded']
                })
            }
            this.load = false
        }
    }
}
</script>
<style >
    
</style>