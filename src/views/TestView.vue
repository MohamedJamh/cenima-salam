<template lang="">
    <div>
        <table 
            v-for="schema in schemas"
            class="tw-m-10"
        >

            <tr
              class="tw-flex tw-gap-1"
              v-for="(row,index) in ranks"
              :key="index"
              >
                <td
                class="tw-pr-3"
                >{{ row.row_label}}</td>
                <td
                  class="tw-h-6 tw-w-6 tw-border tw-text-center tw-cursor-pointer"
                  v-for="(bloc , index ) in schema['per_line']"
                  :class="showbloc(schema, index)"
                  :key="index"
                  @click="showSeatData(row.row_label,(index + 1),row.price,row.name)"
                  >{{index + 1}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    async created(){
        await this.getSchema()
        await this.getRows()
        
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
        showSeatData(row, seatNumber , price,type){
            let data = []
            data["seat"] = row + '' + seatNumber
            data["price"] = price
            data["type"] = type
            console.log(data)
        }
    }
}
</script>
<style lang="">
    
</style>