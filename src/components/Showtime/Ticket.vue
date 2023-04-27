<template >
    <div class="">
        <div class=" tw-border-2 tw-mx-auto tw-w-96 tw-rounded-3xl tw-h-fit tw-bg-white/90 tw-text-black tw-overflow-hidden">
            <div class="">
                <img class="tw-h-20 tw-mx-auto" src="@/assets/img/cenimasalam.png" alt="">
            </div>
            <h2 class="tw-text-center tw-my-2 tw-font-bold tw-capitalize">{{ ticket.movie.title }}</h2>
            <div class="tw-overflow-hidden tw-max-h-[500px] tw-border-black/50 tw-border-y tw-border-dashed" >
                <img :src="ticket.movie.images" alt="">
            </div>
            <div class="tw-px-4 tw-py-4">
                <table class="tw-w-full tw-font-semibold tw-table-fixed">
                    <tr>
                        <td class=" tw-text-start tw-text-xs tw-w-52">Name</td>
                        <td class=" tw-text-start tw-text-xs">Paid</td>
                        <td class=" tw-text-start tw-text-xs">Beverage</td>
                    </tr>
                    <tr>
                        <td class="tw-text-xl tw-font-bold">{{ ticket.user }}</td>
                        <td class="tw-text-xl tw-font-bold">{{ ticket.price }}</td>
                        <td class="tw-text-xl tw-font-bold">{{ ticket.beverages }}</td>
                    </tr>
                    <tr>
                        <td class=" tw-text-start tw-text-xs tw-pt-3">Theater</td>
                        <td class=" tw-text-start tw-text-xs tw-pt-3">Row</td>
                        <td class=" tw-text-start tw-text-xs tw-pt-3">Seat</td>
                    </tr>
                    <tr>
                        <td class="tw-text-xl tw-font-bold">{{ ticket.theater }}</td>
                        <td class="tw-text-xl tw-font-bold">{{ ticket.seats[0] }}</td>
                        <td class="tw-text-xl tw-font-bold">{{ ticket.seats[1] + '' + ticket.seats[2] }}</td>
                    </tr>
                    <tr>
                        <td class=" tw-text-start tw-text-xs  tw-pt-3">Date</td>
                        <td class=" tw-text-start tw-text-xs tw-pt-3">Time</td>
                    </tr>
                    <tr class="">
                        <td class="tw-text-xl tw-font-bold">{{ ticket.showtime.date }}</td>
                        <td colspan="2" class="tw-text-xl tw-font-bold">{{ ticket.showtime.starts }}</td>
                    </tr>
                </table>
            </div>
            <div class=" tw-py-3 tw-text-center tw-border-t-2 tw-border-black tw-border-dashed tw-flex tw-items-center tw-justify-around">
                <div class="tw-font-black tw-text-4xl">
                    <span class="tw-block">Scan</span>
                    <span class="tw-block">Me</span>
                </div>
                <qrcode-vue :value="ticket.id + ''" size="150" level="H" />
            </div>
        </div>
        <div class="tw-text-center tw-py-4">
            <router-link class="" to="/Showtimes">
                <v-btn
                color="primary"
                >Go Back</v-btn>
            </router-link>
        </div>
    </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
export default{
    name : 'showtimeTicket',
    props:['ticket'],
    created(){
        
    },
    components:{
        QrcodeVue
    }
}
</script>
<style >
    
</style>