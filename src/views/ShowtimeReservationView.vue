<template >
    <section class="tw-bg-gray-900 tw-text-white tw-h-screen">
            <div class="tw-relative tw-bg-cover tw-bg-center tw-w-full tw-min-h-screen" v-if="showtime" :style="{backgroundImage: 'url('+ showtime.movie.images[1].url +')'}">
                <div class="tw-bg-gray-900/90 tw-min-h-screen">
                    <div class="tw-container tw-mx-auto">
                        <component 
                        class=" tw-pt-40"
                        :is="components[componentIndex].name" 
                        v-bind="components[componentIndex].props"
                        v-on="components[componentIndex].events"
                        ></component>
                    </div>
                </div>
            </div>
    </section>
</template>
<script>
import axios from 'axios'
import showtimeDetails from '@/components/Showtime/Details.vue'
import showtimeTheater from '@/components/Showtime/Theater.vue'

export default {
    props : ['id'],
    async created() {
        this.showtime = this.components[0].props.showtime = await this.getShowtime().then(data => {
            return data
        })

    }, 
    data(){
        return {
            showtime : null,
            componentIndex : 0,
            components:[
                {
                    name : 'showtimeDetails',
                    props : {
                        showtime : null,
                    },
                    events : {
                        book : async function() {
                            this.components[1].props.theater = await this.getTheater().then(data => {
                                return data
                            })
                            this.components[1].props.tickets = this.showtime.tickets
                            this.componentIndex = 1
                        }.bind(this)
                    }
                },
                {
                    name : 'showtimeTheater',
                    props : {
                        theater : null,
                        tickets : null
                    },
                    events:{
                        pickSeat : function(data){
                            this.ticket.seat = data.seatLabel
                            this.ticket.price = data.price
                        }.bind(this)
                    }
                }
            ],
            ticket : {
                seat : null,
                price : null,
                user_id: null, 
                showtime_id: null
            }
        }
    },
    components:{
        showtimeDetails,
        showtimeTheater
    },
    computed:{
        showtimeId(){
            return this.$route.params.id
        }
    },
    methods:{
        async getShowtime(){
            const { data } = await axios.get(`showtimes/${this.showtimeId}`)
            if(data.status){
                return data.result
            }
        },
        async getTheater(){
            const { data } = await axios.get(`theaters/${this.showtime.theater.theater_id}`)
            if(data.status){
                return data.result
            }
        }
    }

}
</script>
<style >

</style>