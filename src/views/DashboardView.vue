<template>
    <div class="tw-flex tw-min-h-screen xl:tw-max-w-screen-2xl xl:tw-mx-auto xl:tw-border-x-2 xl:tw-border-gray-200 ">
        <aside class="tw-w-1/6 tw-py-10 tw-pl-10 tw-min-w-min tw-border-r tw-border-gray-300  tw-hidden xl:tw-block">
            <router-link to="/home">
                <div class="">
                    <img class="tw-h-20" src="@/assets/img/cenimasalam.png" alt="">
                </div> 
            </router-link>
            <div class="tw-mt-12 tw-flex tw-flex-col tw-gap-y-4 tw-text-gray-500 tw-fill-gray-500 tw-text-sm">
                <div class="tw-text-gray-400/70 tw-font-medium tw-uppercase">Menu</div>
                <a
                  v-for="(nav, index) in menuNav"
                  :key="index"
                  class="tw-flex tw-items-center tw-space-x-2 tw-py-1  tw-pr-20 hover:tw-border-r-4  hover:tw-border-r-red-500"
                  :class="activeNavClass(index)"
                  @click.prevent="currentNav = index"
                  href="#">
                    <v-icon
                      :color="activeNavClass(index,'icon')"
                      :icon="'mdi-'+ nav.icon"
                      size="large"></v-icon>
                    <span>{{ nav.name }} </span>
                </a>
                <a
                  class="tw-flex tw-items-center tw-space-x-2 tw-py-1  tw-pr-20 hover:tw-border-r-4  hover:tw-border-r-red-500"
                  @click.prevent="this.$store.dispatch('logout')"
                  href="#">
                    <v-icon
                      icon="mdi-logout"
                      size="large"></v-icon>
                    <span>logout</span>
                </a>
            </div>
        </aside>
        <div class=" tw-flex-1 tw-py-10  tw-px-5 sm:tw-px-10 ">
            <component class="tw-w-full" :is="menuNav[currentNav].component"></component>
        </div>
    </div>
</template>
<script>
import movies from '@/components/Dashboard/Movies.vue'
import moviesTrash from '@/components/Dashboard/MoviesTrash.vue'
import showtimes from '@/components/Dashboard/Showtimes.vue'
import tickets from '@/components/Dashboard/Tickets.vue'
import schemas from '@/components/Dashboard/Schemas.vue'
import genres from '@/components/Dashboard/Genres.vue'
import beverage from '@/components/Dashboard/Beverage.vue'
import beverageTypes from '@/components/Dashboard/BeverageTypes.vue'
import theaters from '@/components/Dashboard/Theaters.vue'

export default {
    beforeCreate(){
        if(!this.$store.getters.getUser) this.$router.push('/home')
    },
    components:{
        movies,
        moviesTrash,
        showtimes,
        tickets,
        theaters,
        schemas,
        genres,
        beverage,
        beverageTypes
    },
    data () {
        return {
            currentNav : 7,
            menuNav : [
                { name : 'Movies' , icon : 'filmstrip' , component : 'movies' },
                { name : 'Movies Trash' , icon : 'movie-open-remove' , component : 'moviesTrash' },
                { name : 'ShowTimes' , icon : 'video-vintage' , component : 'showtimes'  },
                { name : 'Tickets' , icon : 'ticket-account', component: 'tickets' },
                { name : 'Theater' , icon : 'theater', component: 'theaters'  },
                { name : 'Schema' , icon : 'view-carousel', component: 'schemas' },
                { name : 'Genres' , icon : 'lock-pattern', component: 'genres' },
                { name : 'Beverages' , icon : 'food', component: 'beverage' },
                { name : 'Beverage Types' , icon : 'cookie', component: 'beverageTypes'  },
                { name : 'Settings' , icon : 'cog' },
            ]
        }
    },
    methods:{
        activeNavClass(index , type){
            if(index == this.currentNav){
                switch (type) {
                    case 'icon':
                        return 'primary'
                    default:
                        return 'tw-border-r-4 tw-border-r-red-600 tw-font-semibold'
                }
            }
        }
    }
    
}
</script>
<style>
    
</style>