<template >
    <div class="tw-overflow-x-scroll">
        <section class="tw-flex tw-items-center tw-justify-between">
            <h2 class=" tw-text-3xl tw-font-semibold" >All Available Tickets</h2>
        </section>
        <div class="tw-relative tw-w-full tw-overflow-x-scroll tw-shadow-md sm:tw-rounded-lg tw-my-10">
            <table class="tw-w-full tw-text-sm tw-text-left tw-text-gray-500">
                <thead class="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 ">
                    <tr>
                        <th
                          v-for="header in headers"
                          scope="col"
                          class="tw-px-6 tw-py-3">
                            {{ header }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                      v-for="ticket in tickets"
                      class="tw-bg-white tw-border-b">
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ ticket.user }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ ticket.movie.title }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ ticket.theater }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ ticket.seats }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ ticket.beverages }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ ticket.price }} DH
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    async created(){
        this.tickets = await this.getTickets().then(data=>{
            return data
        })
    },
    data(){
        return {
            tickets : null,
            headers:[
                'User',
                'Movie',
                'Theater',
                'Seat',
                'Beverage',
                'Paid'
            ],
        }
    },  
    methods:{
        async getTickets(){
            const {data} = await axios.get('tickets',{
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token') 
                }
            })
            if(data.status){
                return data.result
            }
        }
    }

}
</script>
<style >
    
</style>