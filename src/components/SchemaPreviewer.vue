<template lang="">
    <div>
        <table 
            v-for="schema in schemas"
            class="tw-my-10 tw-mx-auto"
        >
            <h2></h2>
            <p> <small> Name : {{ schema.name }} | Capacity : {{ schema.capacity }} seats</small></p>
            <tr
              class="tw-flex tw-gap-1 tw-my-1"
              v-for="(row,index) in ranks"
              :key="index"
              >
                <td
                class="tw-w-8 tw-border-r-2"
                :class="rowClassification(row.row_label)"
                > <small>{{ row.row_label}}</small></td>
                <td
                  class="tw-h-7 tw-w-7 tw-border tw-text-center tw-cursor-pointer tw-rounded tw-text-slate-300 tw-border-slate-300 hover:tw-bg-green-400 hover:tw-border-green-500 hover:tw-text-white tw-text-sm"
                  v-for="(bloc , index ) in schema['per_line']"
                  :class="showbloc(schema, index)"
                  :key="index"
                  @click="showSeatData(row.row_label,(index + 1),row.price,row.name)"
                  >{{index + 1}}</td>
            </tr>
        </table>
        <section class="tw-float-right">
            <div class="tw-flex tw-gap-1 tw-my-2">
                <div class="tw-h-6 tw-w-6 tw-bg-red-500 tw-rounded-sm"></div>Premium 200 DH*
            </div>
            <div class="tw-flex tw-gap-1 tw-my-2">
                <div class="tw-h-6 tw-w-6 tw-bg-green-500 tw-rounded-sm"></div>Classic 150 DH*
            </div>
            <div class="tw-flex tw-gap-1 tw-my-2">
                <div class="tw-h-6 tw-w-6 tw-bg-yellow-200 tw-rounded-sm"></div>Eco 80 DH*
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'schemaPreviewer',
    async created(){
        await this.getSchema()
        await this.getRows()
        console.log(this.schemas)
    },
    data(){
        return {
            schemas : null,
            ranks : null
        }
    },
    methods:{
        async getSchema(){
            const {data} = await axios.get('schemas')
            this.schemas = data.result
        },
        async getRows(){
            const {data} = await axios.get('ranks')
            this.ranks = data.result
        },
        showbloc(schema, index){
            if(schema.layout_break.split(',').includes((index + 1).toString())){
                return 'tw-invisible'
            }
        },
        rowClassification(row){
            switch (row) {
                case 'A' :
                    return 'tw-border-r-red-500'
                    break;
                case 'B' :
                    return 'tw-border-r-red-500'
                    break;
                case 'C' :
                    return 'tw-border-r-green-500'
                    break;  
                case 'D' :
                    return 'tw-border-r-green-500'
                    break;   
                case 'E' :
                    return 'tw-border-r-yellow-200'
                    break;   
            }
        }
        // showSeatData(row, seatNumber , price,type){
        //     let data = []
        //     data["seat"] = row + '' + seatNumber
        //     data["price"] = price
        //     data["type"] = type
        //     console.log(data)
        // }
    },
    computed:{
        
    }
}
</script>
<style lang="">
    
</style>