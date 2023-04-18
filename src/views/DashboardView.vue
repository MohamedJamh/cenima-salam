<template>
    <div class="tw-flex tw-min-h-screen xl:tw-max-w-screen-2xl xl:tw-mx-auto xl:tw-border-x-2 xl:tw-border-gray-200 ">
        <aside class="tw-w-1/6 tw-py-10 tw-pl-10 tw-min-w-min tw-border-r tw-border-gray-300  tw-hidden md:tw-block">
            <div class="tw-font-bold tw-text-lg tw-flex tw-items-center tw-gap-x-3">
                <svg class="tw-h-8 tw-w-8 tw-fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 15.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4Zm11.96-4.45c.58 6.26-4.64 11.48-10.9 10.9 -4.43-.41-8.12-3.85-8.9-8.23 -.26-1.42-.19-2.78.12-4.04 .14-.58.76-.9 1.31-.7v0c.47.17.75.67.63 1.16 -.2.82-.27 1.7-.19 2.61 .37 4.04 3.89 7.25 7.95 7.26 4.79.01 8.61-4.21 7.94-9.12 -.51-3.7-3.66-6.62-7.39-6.86 -.83-.06-1.63.02-2.38.2 -.49.11-.99-.16-1.16-.64v0c-.2-.56.12-1.17.69-1.31 1.79-.43 3.75-.41 5.78.37 3.56 1.35 6.15 4.62 6.5 8.4ZM5.5 4C4.67 4 4 4.67 4 5.5 4 6.33 4.67 7 5.5 7 6.33 7 7 6.33 7 5.5 7 4.67 6.33 4 5.5 4Z"></path>
                </svg>        
                <div class="tw-tracking-wide ">CenimaSalam<span class="tw-text-red-600">.</span></div>
            </div> 
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
            currentNav : 0,
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
                { name : 'Logout' , icon : 'logout' },
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