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
                                hide-details
                                v-model="formRecord.name"
                                label="name"
                                ></v-text-field>
                                <validationError 
                                v-if="v$.formRecord.name.$error" 
                                :message="v$.formRecord.name.$errors[0].$message" />
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
                            v-if="dialogAction == 'update'"
                            class="btn-secondary"
                            variant="text"
                            @click="updateGenre()"
                        >
                            Update
                        </v-btn>
                        <v-btn
                            v-else
                            class="btn-secondary"
                            variant="text"
                            @click="addGenre()"
                        >
                            Add
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
                                icon="mdi-pencil-outline"
                                size="large"></v-icon>
                            </div>
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="deleteGenre(genre.id)">
                                <v-icon
                                color="primary"
                                icon="mdi-delete-empty-outline"
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
import { useVuelidate } from '@vuelidate/core'
import { required, requiredIf } from '@vuelidate/validators'
import validationError from '@/components/ValidationError.vue'

export default {
    async created(){
        this.initialise()
    },
    setup: () => ({ v$: useVuelidate() }),
    data(){
        return {
            dialog : false,
            dialogAction : 'add',
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
    components:{
        validationError
    },
    validations(){
        return {
            formRecord : {
                name: { required },
            }
        }
    },
    methods:{
        async initialise(){
            this.genres = await this.$store.dispatch('getGenres')
            .then(data =>{
                return data
            })
        },
        async validateForm(){
            const result = await this.v$.$validate()
            if (!result) return false
            return true
        },
        prepareToEdit(genre){
            this.formRecord.name = genre.name
            this.formRecord.id = genre.id
            this.dialogAction = 'update'
            this.dialog = true
        },
        async updateGenre(){
            if(await this.validateForm()){
                const { data } = await axios.patch(`genres/${this.formRecord.id}`,{
                    name : this.formRecord.name
                })
                let type = 'error'
                if(data.status){
                    type = 'success'
                    this.initialise()
                }
                this.$store.dispatch('notify',{
                    type : type,
                    messages : [data.message]
                })
                this.close()
            }
        },
        async deleteGenre(id){
            this.formRecord.id = id
            const { data } = await axios.delete(`genres/${this.formRecord.id}`)
            let type = 'error'
            if(data.status){
                type = 'success'
                this.initialise()
            }
            this.$store.dispatch('notify',{
                type : type,
                messages : [data.message]
            })
        },
        async addGenre(){
            if(await this.validateForm()){
                const { data } = await axios.post(`genres`,{
                    name : this.formRecord.name
                })
                let type = 'error'
                if(data.status){
                    type = 'success'
                    this.initialise()
                }
                this.$store.dispatch('notify',{
                    type : type,
                    messages : [data.message]
                })
                this.close()
            }
        },
        close(){
            this.formRecord.name = ''
            this.formRecord.id = ''
            this.v$.$reset()
            this.dialogAction = 'add'
            this.dialog = false
        }
    }
}
</script>
<style>
    
</style>