<template >
    <div class="tw-h-screen tw-flex tw-flex-col tw-justify-center tw-gap-5">
        <h1 class="tw-text-4xl tw-font-semibold tw-text-center" >{{this.theater.name}} Theater</h1>
        <div>
            <table class="tw-mx-auto">
                <tr
                class="tw-flex tw-gap-3 tw-my-2"
                v-for="(row,index) in ranks"
                :key="index"
                >
                    <td
                    class="tw-w-8 tw-border-r-2 tw-text-2xl"
                    :class="'tw-border-r-' + rowClassification(row.row_label)"
                    > <small>{{ row.row_label}}</small></td>
                    <td
                    class="tw-bg-zinc-800/80 tw-h-10 tw-w-10 tw-border tw-cursor-pointer tw-rounded tw-text-white/75 tw-border-slate-600 hover:tw-bg-green-400 hover:tw-border-green-500 hover:tw-text-white tw-text-base tw-flex tw-items-center tw-justify-center"
                    v-for="(bloc , index ) in theater.schema.per_line"
                    :class="showbloc(theater.schema, index , row.row_label)"
                    :key="index"
                    @click="chooseSeat($event,row.row_label, index)"
                    >{{index + 1}}</td>
                </tr>
            </table>
            <div class="tw-mx-auto tw-mt-20 tw-w-96 tw-border-sky-400/50 tw-border-b-8 tw-rounded-b-lg tw-text-center tw-py-2 tw-text-sm">
                All eyes here
            </div>
            <div>
                <v-btn
                v-if="seatChosen"
                color="primary"
                height="50"

                >
                Next
                </v-btn>
            </div>
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
        console.log(this.tickets)
    },
    data(){
        return {
            ranks : null,
            seatChosen : false,
            seat : null,
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
        chooseSeat(event,rowLabel, index){
            if(this.tickets.includes( rowLabel + '' + (index + 1))){
                this.$store.dispatch('notify',{
                    type : 'error',
                    messages : ['Seat already reserved']
                })
            }else{
                const seat = event.target
                seat.classList.add('tw-bg-green-500')
                console.log(seat)
                this.seatChosen = true
                // console.log('yey')
            }
        }
    }
}
</script>
<style >
    
</style>