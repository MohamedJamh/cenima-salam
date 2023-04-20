<template >
    <div>
        <section class="tw-flex tw-items-center tw-justify-between">
            <h2 class=" tw-text-3xl tw-font-semibold" >All Showtimes</h2>
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
                        Add Showtime
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Showtime</span>
                        </v-card-title>
                        <v-card-text>
                        <v-container>
                            <v-row>
                            
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                    hide-details
                                    v-model="formRecord.date"
                                    label="Date"
                                    type="Date"
                                    :min="new Date().toISOString()"
                                    ></v-text-field>
                                    <validationError 
                                    v-if="v$.formRecord.date.$error" 
                                    :message="v$.formRecord.date.$errors[0].$message" />
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                    hide-details
                                    v-model="formRecord.starts"
                                    label="Start (time)"
                                    type="time"
                                    ></v-text-field>
                                    <validationError 
                                    v-if="v$.formRecord.starts.$error" 
                                    :message="v$.formRecord.starts.$errors[0].$message" />
                                </v-col>
                                <v-col
                                    v-if="dialogAction == 'add'"
                                    cols="12"
                                    md="6"
                                >
                                    <v-select
                                        hide-details
                                        v-model="formRecord.movie_id"
                                        :items="movies"
                                        item-title="title"
                                        item-value="id"
                                        label="Movies"
                                        :return-object="false"
                                        single-line
                                    ></v-select>
                                    <validationError 
                                    v-if="v$.formRecord.movie_id.$error" 
                                    :message="v$.formRecord.movie_id.$errors[0].$message" />
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-select
                                        hide-details
                                        v-model="formRecord.theater_id"
                                        :items="theaters"
                                        item-title="name"
                                        item-value="id"
                                        label="Theaters"
                                        :return-object="false"
                                        single-line
                                    ></v-select>
                                    <validationError 
                                    v-if="v$.formRecord.theater_id.$error" 
                                    :message="v$.formRecord.theater_id.$errors[0].$message" />
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
                            class="btn-primary tw-w-28"
                            variant="text"
                            @click="updateShowtime()"
                        >
                            Update
                        </v-btn>
                        <v-btn
                            v-else
                            class="btn-primary tw-w-28"
                            variant="text"
                            @click="addShowtime()"
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
                    <tr class="tw-text-center" v-if="showtimes.length == 0" >
                        <td class="tw-py-8 tw-text-2xl" colspan="8">No Available Showtimes</td>
                    </tr>
                    <tr
                      v-for="showtime in showtimes"
                      class="tw-bg-white tw-border-b">
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ showtime.movie.title }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ showtime.theater.name }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ showtime.date }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ showtime.starts }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ showtime.ends }}
                        </th>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="prepareToEdit(showtime)">
                                <v-icon
                                color="primary"
                                icon="mdi-table-edit"
                                size="large"
                                ></v-icon>
                            </div>
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="deleteShowtime(showtime.id)">
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
        this.theaters = await this.$store.dispatch('getTheaters').then(data =>{
            return data
        })
        this.movies = await this.$store.dispatch('getAllMovies').then(data =>{
            return data
        })
    },
    setup: () => ({ v$: useVuelidate() }),
    data(){
        return {
            dialog : false,
            dialogAction : 'add',
            showtimes: null,
            movies : null,
            theaters : null,
            headers:[
                'Movie title',
                'Theater',
                'Date',
                'Starts',
                'Ends'
            ],
            formRecord:{
                id : null,
                date : null,
                starts: null,
                movie_id : 1,
                theater_id : 1
            }
        }
    },
    validations(){
        return {
            formRecord : {
                date: { required },
                starts: { required },
                movie_id: { requiredIf : requiredIf( this.dialogAction == 'add' ) },
                theater_id : { required }
            }
        }
    },
    components:{
        validationError
    },
    methods:{
        async initialise(){
            this.showtimes = await this.$store.dispatch('getShowtimes').then(data =>{
                return data
            })
        },
        async validateForm(){
            const result = await this.v$.$validate()
            if (!result) return false
            return true
        },
        prepareToEdit(showtime){
            this.formRecord.id = showtime.id
            this.formRecord.date = showtime.dateString
            this.formRecord.starts = showtime.startsString.substring(0, showtime.startsString.length - 3);
            this.formRecord.theater_id = showtime.theater.theater_id,
            this.formRecord.movie_id = null
            
            this.dialogAction = 'update'
            this.dialog = true
        },
        async addShowtime(){
            if(await this.validateForm()){

                const { data } = await axios.post(`showtimes`,this.formRecord)
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
        async updateShowtime(){
            if(await this.validateForm()){
                Object.keys(this.formRecord)
                .forEach((property) => (this.formRecord[property] == null || this.formRecord[property] == '' ) && delete this.formRecord[property]);
                
                const { data } = await axios.patch(`showtimes/${this.formRecord.id}`,this.formRecord)
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
        async deleteShowtime(showtimeId){
            const { data } = await axios.delete(`showtimes/${showtimeId}`)
            let type = 'error'
            if(data.status){
                type = 'success'
                this.initialise()
            }
            this.$store.dispatch('notify',{
                type : type,
                messages : [data.message]
            })
            this.dialog = false
        },
        close(){
            this.formRecord.date = ''
            this.formRecord.starts = ''
            this.formRecord.movie_id = 1,
            this.formRecord.theater_id = 1,
            this.v$.$reset()
            this.dialogAction = 'add'
            this.dialog = false
        }
        
    }
    
}
</script>
<style >
    
</style>