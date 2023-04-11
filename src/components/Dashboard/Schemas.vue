<template lang="">
    <div>
        <h2 class="tw-text-3xl tw-font-semibold" >All Schemas</h2>
        <table 
            v-for="schema in schemas"
            class="tw-my-10 tw-mx-auto"
        >
            <h2></h2>
            <p><small> Name : {{ schema.name }} | Capacity : {{ schema.capacity }} seats</small></p>
            <tr
              class="tw-flex tw-gap-1 tw-my-1"
              v-for="(row,index) in ranks"
              :key="index"
              >
                <td
                class="tw-w-8 tw-border-r-2"
                :class="'tw-border-r-' + rowClassification(row.row_label)"
                > <small>{{ row.row_label}}</small></td>
                <td
                  class="tw-h-7 tw-w-7 tw-border tw-text-center tw-cursor-pointer tw-rounded tw-text-slate-300 tw-border-slate-300 hover:tw-bg-green-400 hover:tw-border-green-500 hover:tw-text-white tw-text-sm"
                  v-for="(bloc , index ) in schema['per_line']"
                  :class="showbloc(schema, index), 'tw-border-r' + rowClassification(row.row_label)"
                  :key="index"
                  @click="showSeatDetails(row.row_label,(index + 1),row.price,row.name)"
                  >{{index + 1}}</td>
            </tr>
        </table>
        <section class="tw-float-right tw-text-sm">
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
            <div class="text-center">
                <v-dialog
                transition="dialog-bottom-transition"
                v-model="seatInfo"
                width="300"
                >
                <v-card>
                    <v-card-text>
                    <div class="tw-flex tw-items-center tw-justify-around">
                        <div class="tw-text-6xl">
                            <v-icon color="success" icon="mdi-sofa-single"></v-icon>
                        </div>
                        <div class="tw-capitalize">
                            <p><span class="tw-font-medium">Seat : </span>{{ this.seat.label }}</p>
                            <p><span class="tw-font-medium">Type : </span>{{ this.seat.type }}</p>
                            <p><span class="tw-font-medium">Price : </span>{{ this.seat.price }}DH</p>
                        </div>
                    </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn color="primary" block @click="seatInfo = false">Close Dialog</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'schemaPreviewer',
    async created(){
        await this.getSchema()
        await this.getRows()
    },
    data(){
        return {
            seatInfo : false,
            seat : {
                label : null,
                type : null,
                price : null,
            },
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
        showSeatDetails(row, seatNumber , price,type){
            this.seat.label = '' + row + seatNumber
            this.seat.type = type
            this.seat.price = price
            this.seatInfo = true
        }
    },
    computed:{
        
    }
}
</script>
<style lang="">
    
</style>