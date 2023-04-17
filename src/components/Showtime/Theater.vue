<template >
    <div class="tw-flex tw-flex-col tw-justify-center tw-gap-5">
        <h1 class=" tw-text-base md:tw-text-4xl tw-font-semibold tw-text-center" >{{this.theater.name}} Theater</h1>
        <div class="tw-w-full tw-overflow-x-auto">
            <table class="tw-mx-auto ">
                <tr
                class="tw-flex tw-gap-1 md:tw-gap-3 md:tw-my-2"
                v-for="(row,index) in ranks"
                :key="index"
                >
                    <td
                    class="tw-w-8 tw-border-r md:tw-border-r-2 tw-text-lg md:tw-text-2xl"
                    :class="'tw-border-r-' + rowClassification(row.row_label)"
                    > <small>{{ row.row_label}}</small></td>
                    <td
                    class="tw-bg-zinc-800/80 tw-h-6 tw-w-6 md:tw-h-10 md:tw-w-10 tw-border tw-cursor-pointer tw-rounded tw-text-white/75 tw-border-slate-600 hover:tw-bg-green-400 hover:tw-border-green-500 hover:tw-text-white tw-text-xs md:tw-text-base tw-flex tw-items-center tw-justify-center"
                    v-for="(bloc , index ) in theater.schema.per_line"
                    :class="showbloc(theater.schema, index , row.row_label)"
                    :key="index"
                    @click="chooseSeat($event,row.row_label, index,row.price)"
                    >{{index + 1}}</td>
                </tr>
            </table>
        </div>
        <div class="tw-mx-auto tw-mt-5 md:tw-mt-20 tw-w-52 md:tw-w-96 tw-border-sky-400/50 tw-border-b-8 tw-rounded-b-lg tw-text-center tw-py-2 tw-text-sm">
            All eyes here
        </div>
        <div class="tw-text-center">
            <v-btn
            v-if="seatChosen"
            color="primary"
            height="40"
            class="tw-w-32"
            @click="this.$emit('pickSeat',{seatLabel,price})"
            >
            Next
            </v-btn>
            <small v-else>Choose your seat</small>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'showtimeTheater',
    props:['theater','tickets'],
    async created(){
        await this.getRows()
    },
    data(){
        return {
            ranks : null,
            seatChosen : false,
            seat : null,
            seatLabel : null,
            price : null
        }
    },
    methods:{
        async getRows(){
            const {data} = await axios.get('ranks')
            this.ranks = data.result
        },
        showbloc(schema, index , rowLabel){
            if(schema.layout_break.split(',').includes((index + 1).toString())){
                return 'tw-invisible'
            }else if(this.tickets.includes( rowLabel + '' + (index + 1) )){
                return 'tw-opacity-20'
            }
        },
        rowClassification(row){
            switch (row) {
                case 'A' :
                    return 'red-600'
                    break;
                case 'B' :
                    return 'red-600'
                    break;
                case 'C' :
                    return 'green-600'
                    break;
                case 'D' :
                    return 'green-600'
                    break;   
                case 'E' :
                    return 'yellow-300'
                    break;   
            }
        },
        chooseSeat(event,rowLabel, index , price){
            let seatLabel = rowLabel + '' + (index + 1)
            if(this.tickets.includes( seatLabel )){
                this.$store.dispatch('notify',{
                    type : 'error',
                    messages : ['Seat already reserved']
                })
            }else{
                if(this.seat){
                    this.seat.classList.remove('tw-bg-green-500')
                    this.seat.classList.add('tw-bg-zinc-800/80')
                } 
                this.seat = event.target
                this.seat.classList.remove('tw-bg-zinc-800/80')
                this.seat.classList.add('tw-bg-green-500')
                this.seatLabel = seatLabel
                this.price = price
                this.seatChosen = true
            }
        }
    }
}
</script>
<style >
    
</style>