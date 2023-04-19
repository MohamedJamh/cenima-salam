<template >
    <div>
        <section class="tw-flex tw-justify-between">
            <h2 class=" tw-text-3xl tw-font-semibold" >All Trashed Movies</h2>
            <div>
                <v-btn
                color="primary"
                class="tw-mx-2"
                @click="forceDeleteAllMovies()"
                >
                Delete All
                </v-btn>
                <v-btn
                color="primary"
                class="tw-mx-2"
                @click="restoreAll()"
                >
                Restore All
                </v-btn>
            </div>
        </section>
        <div class="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg tw-my-10">
            <table class="tw-w-full tw-text-sm tw-text-left tw-text-gray-500 ">
                <thead class="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 ">
                    <tr>
                        <th
                          v-for="header in headers"
                          scope="col"
                          class="tw-px-6 tw-py-3">
                            {{ header }}
                        </th>
                        <th scope="col" class="tw-px-6 tw-py-3">
                            <span class="tw-sr-only">Edit</span>
                        </th>
                        <th scope="col" class="tw-px-6 tw-py-3">
                            <span class="tw-sr-only">Delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    <tr class="tw-text-center" v-if="trash.length == 0" >
                        <td class="tw-py-8 tw-text-2xl" colspan="8">Empty Trash</td>
                    </tr>
                    <tr
                      v-else
                      v-for="movie in trash"
                      class="tw-bg-white tw-border-b ">
                        <td
                          scope="row"
                          class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap ">
                            <div class="tw-h-28 tw-w-20 tw-rounded-md tw-overflow-hidden">
                                <img :src="movie.images[0]?.url " class="" alt="">
                            </div>
                        </td>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ movie.title }}
                        </th>
                        <td scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                            {{ movie.status.toUpperCase() }}
                        </td>
                        <td scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ movie.release_date }}
                        </td>
                        <td scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ movie.language }}
                        </td>
                        <td scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ movie.deleted_at.split('T')[0] }}
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="">
                                <v-icon
                                color="primary"
                                icon="mdi-restart"
                                @click="restoreMovie(movie.id)"
                                size="large"></v-icon>
                            </div>
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="">
                                <v-icon
                                color="primary"
                                icon="mdi-delete-alert-outline"
                                @click="forceDeleteMovie(movie.id)"
                                size="large"></v-icon>
                            </div>
                        </td>
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
        this.getTrashedMovies()
    },
    data(){
        return {
            trash : null,
            headers:[
                'Poster',
                'Title',
                'Status',
                'Release Date',
                'Language',
                'Deleted At',
            ],
        }
    },
    methods:{
        async getTrashedMovies(){
            const {data} = await axios.get('movies/trashed')
            if(data.status){
                this.trash = data.result
            }
        },
        async restoreMovie(movieId){
            const {data} = await axios.get(`movies/trashed/${movieId}/restore`)
            let type = 'error'
            if(data.status){
                type = 'success'
            }
            this.getTrashedMovies()
            this.$store.dispatch('notify',{
                type : type,
                messages : [data.message]
            })
        },
        async forceDeleteMovie(movieId){

            const {data} = await axios.delete(`movies/trashed/${movieId}/delete`)
            let type = 'error'
            if(data.status){
                type = 'success'
            }
            this.getTrashedMovies()
            console.log(movieId)
            console.log(data.result)
            this.$store.dispatch('notify',{
                type : type,
                messages : [data.message]
            })
        },
        async restoreAll(){
            const {data} = await axios.get(`movies/trashed/restore`)
            let type = 'error'
            if(data.status){
                type = 'success'
            }
            this.getTrashedMovies()
            this.$store.dispatch('notify',{
                type : type,
                messages : [data.message]
            })
        },
        async forceDeleteAllMovies(){
            const {data} = await axios.delete(`movies/trashed/delete`)
            let type = 'error'
            if(data.status){
                type = 'success'
            }
            this.getTrashedMovies()
            this.$store.dispatch('notify',{
                type : type,
                messages : [data.message]
            })
        },
        
    }
}
</script>
<style >
    
</style>