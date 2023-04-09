<template>
    <div class="tw-pt-4 tw-pl-2">
        <section class="tw-flex tw-items-center tw-justify-between">
            <h2 class=" tw-text-3xl tw-font-semibold" >All Genres</h2>
            <div>
                <v-row justify="center">
                    <v-dialog
                    v-model="dialog"
                    persistent
                    width="1024"
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn
                        color="primary"
                        v-bind="props"
                        >
                        Add Genre
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="text-h5">Genre</span>
                        </v-card-title>
                        <v-card-text>
                        <v-container>
                            <v-row>
                            
                            <v-col
                                cols="12"
                            >
                                <v-text-field
                                v-model="formRecord.name"
                                label="name"
                                ></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="btn-secondary"
                            variant="text"
                            @click="close()"
                        >
                            Close
                        </v-btn>
                        <v-btn
                            class="btn-secondary"
                            variant="text"
                            @click="updateGenre()"
                        >
                            Update
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-row>
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
                <tbody>
                    <tr
                      v-for="genre in genres"
                      class="tw-bg-white tw-border-b ">
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ genre.name }}
                        </th>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="prepareToEdit(genre)">
                                <v-icon
                                color="primary"
                                icon="mdi-movie-edit"
                                size="large"></v-icon>
                            </div>
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="deleteGenre(genre.id)">
                                <v-icon
                                color="primary"
                                icon="mdi-delete-empty"
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
        this.initialise()
    },
    data(){
        return {
            dialog : false,
            genres : null,
            headers:[
                'Name',
            ],
            formRecord : {
                id : null,
                name : null
            }
        }
    },
    methods:{
        async initialise(){
            this.genres = await this.$store.dispatch('getGenres').then(data =>{
                return data
            })
        },
        prepareToEdit(genre){
            this.formRecord.name = genre.name
            this.formRecord.id = genre.id
            this.dialog = true
        },
        async updateGenre(){
            const { data } = await axios.patch(`genres/${this.formRecord.id}`,{
                name : this.formRecord.name
            })
            if(data.status){
                //notification logic here
                console.log(data.message)
                this.initialise()
            }
            this.dialog = false
        },
        async deleteGenre(id){
            this.formRecord.id = id
            const { data } = await axios.delete(`genres/${this.formRecord.id}`)
            if(data.status){
                //notification logic here
                console.log(data)
                this.initialise()
            }
        },
        close(){
            this.formRecord.name = null
            this.formRecord.id = null
            this.dialog = false
        }
    }
}
</script>
<style>
    
</style>