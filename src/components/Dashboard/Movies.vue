<template >
    <div class="tw-pt-4 tw-pl-2" >
        <div class="tw-flex tw-justify-between">
            <h2 class=" tw-text-3xl tw-font-semibold" >All Movies</h2>
            <section>
                <v-row justify="center">
                    <v-dialog
                    v-model="dialog"
                    fullscreen
                    :scrim="false"
                    transition="dialog-bottom-transition"
                    >
                        <template v-slot:activator="{ props }">
                            <v-btn
                            color="primary"
                            dark
                            v-bind="props"
                            >
                            New Movie
                            </v-btn>
                        </template>
                        <v-card>
                            <v-toolbar
                            dark
                            color="primary"
                            >
                                <v-btn
                                    icon
                                    dark
                                    @click="dialog = false"
                                >
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <v-toolbar-title></v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                    <v-btn
                                    v-if="dialogAction == 'add'"
                                    variant="text"
                                    @click="addMovie()"
                                    >
                                    Save
                                    </v-btn>
                                    <v-btn
                                    v-if="dialogAction == 'update'"
                                    variant="text"
                                    @click="updateMovie()"
                                    >
                                    Update
                                    </v-btn>
                                </v-toolbar-items>
                            </v-toolbar>
                            <div class="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row-reverse  tw-gap-2">
                                <!-- banner image -->
                                <div 
                                :style="{backgroundImage: 'url('+ formRecord.images[1].url +')'}"
                                class=" tw-w-full xl:tw-w-4/6 tw-mx-auto tw-rounded-lg tw-bg-gray-200 tw-h-96 tw-my-4 tw-bg-cover">
                                </div>
                            
                                <div
                                :style="{backgroundImage: 'url('+ formRecord.images[0].url +')'}"
                                class="tw-h-96 tw-w-72 tw-mx-auto tw-rounded-lg tw-bg-gray-200 tw-my-4 tw-bg-cover">
                                </div>
                            </div>
                            <section class="tw-container tw-mx-auto">
                                <div>
                                    <v-form >
                                        <v-container>
                                        <v-row>
                                            <v-col cols="12" >
                                                <v-switch
                                                v-if="dialogAction == 'update'"
                                                class="tw-float-right"
                                                v-model="ignoreImagesOnUpdate"
                                                label="Ignore Images"
                                                color="error"
                                                value="error"
                                                hide-details
                                                ></v-switch>
                                            </v-col>
                                            <v-col cols="12" md="12">
                                                <v-card class="elevation-0" >
                                                    <v-tabs
                                                    v-model="tab"
                                                    fixed-tabs
                                                    bg-color="secondary"
                                                    >
                                                    <v-tab value="local">Local</v-tab>
                                                    <v-tab value="image">Online</v-tab>
                                                    </v-tabs>

                                                    <v-card-text>
                                                        <v-window v-model="tab">
                                                            <v-window-item value="local">
                                                                <v-row>
                                                                    <v-col cols="12" md="6">
                                                                        <v-file-input
                                                                        @change="pickImage($event,'backdrop')"
                                                                        accept="image/*"
                                                                        label="BackDrop image"
                                                                        variant="underlined"></v-file-input>
                                                                    </v-col>
                                                                    <v-col cols="12" md="6">
                                                                        <v-file-input
                                                                        @change="pickImage($event,'poster')"
                                                                        accept="image/*"
                                                                        label="Poster image"
                                                                        variant="underlined"></v-file-input>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-window-item>

                                                            <v-window-item value="image">
                                                                <v-row>
                                                                    <v-col cols="12" md="6">
                                                                        <v-text-field
                                                                        v-model="formRecord.images[1].url"
                                                                        label="BackDrop url"></v-text-field>
                                                                    </v-col>
                                                                    <v-col cols="12" md="6">
                                                                        <v-text-field
                                                                        v-model="formRecord.images[0].url"
                                                                        label="Poster url"></v-text-field>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-window-item>
                                                        </v-window>
                                                    </v-card-text>
                                                </v-card>
                                            </v-col>
                                            <v-col
                                            cols="12"
                                            md="6"
                                            >
                                            <v-text-field
                                                v-model="formRecord.title"
                                                label="Title"
                                                required
                                            ></v-text-field>
                                            </v-col>

                                            <v-col
                                            cols="12"
                                            md="6"
                                            >
                                            <v-text-field
                                                v-model="formRecord.tagline"
                                                label="Tagline"
                                                required
                                            ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-textarea 
                                                    v-model="formRecord.overview"
                                                    label="Overview"
                                                    required
                                                ></v-textarea>
                                            </v-col>
                                            
                                            <v-col cols="12" md="4" >
                                                <v-select
                                                    v-model="formRecord.status"
                                                    :items="movieStatus"
                                                    item-title="title"
                                                    item-value="value"
                                                    label="Status"
                                                    :return-object="false"
                                                    single-line
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="12" md="4" >
                                                <v-select
                                                    v-model="formRecord.genres"
                                                    :items="movieGenres"
                                                    item-title="name"
                                                    item-value="id"
                                                    label="Genres"
                                                    :return-object="false"
                                                    multiple
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="12" md="4" >
                                                <v-select
                                                    v-model="formRecord.production_companies"
                                                    :items="movieProductionCompanies"
                                                    item-title="name"
                                                    item-value="id"
                                                    label="Production Companies"
                                                    :return-object="false"
                                                    single-line
                                                    multiple
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="12" md="4" >
                                                <v-text-field
                                                v-model="formRecord.runtime"
                                                type="number"
                                                label="Runtime (min)"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="4" >
                                                <v-text-field
                                                v-model="formRecord.language"
                                                label="Language"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="4" >
                                                <v-text-field
                                                v-model="formRecord.rate"
                                                type="number"
                                                :step="0.1"
                                                :min="0"
                                                :max="10"
                                                label="Rate"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6" >
                                                <v-text-field
                                                v-model="formRecord.release_date"
                                                type="date"
                                                label="Release Date"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6" >
                                                <v-text-field
                                                v-model="formRecord.budget"
                                                type="number"
                                                :min="0"
                                                label="Budget"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        </v-container>
                                    </v-form>
                                </div>
                            </section>
                        </v-card>
                    </v-dialog>
                </v-row>
            </section>
        </div>
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
                      v-for="movie in movies"
                      class="tw-bg-white tw-border-b ">
                        <td
                          scope="row"
                          class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap ">
                            <div class="tw-h-28 tw-w-20 tw-rounded-md tw-overflow-hidden">
                                <img :src="movie.images[0].url " class="" alt="">
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
                            {{ movie.duration }}
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="">
                                <v-icon
                                color="primary"
                                icon="mdi-movie-edit-outline"
                                @click="prepareToEdit(movie)"
                                size="large"></v-icon>
                            </div>
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="">
                                <v-icon
                                color="primary"
                                icon="mdi-delete-empty-outline"
                                @click="deleteMovie(movie.id)"
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
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core'
import { required, requiredIf } from '@vuelidate/validators'
import validationError from '@/components/ValidationError.vue'

export default {
    components:{
        validationError
    },
    async created(){
        this.initialise()
        this.movieGenres = await this.$store.dispatch('getGenres').then(data =>{
            return data
        })
        this.movieProductionCompanies = await this.$store.dispatch('getCompanies').then(data =>{
            return data
        })
    },
    setup: () => ({ v$: useVuelidate() }),
    data(){
        return {
            ignoreImagesOnUpdate : false,
            dialogAction : 'add',
            dialog : false,
            tab : null,
            headers:[
                'Poster',
                'Title',
                'Status',
                'Release Date',
                'Language',
                'Runtime',
            ],
            movies : null,
            movieGenres : null,
            movieProductionCompanies : null,
            movieStatus : [
                {title:'Popular',value:'popular'},
                {title:'Upcoming',value:'upcoming'}
            ],
            
            formRecord:{
                title : '',
                tagline : '',
                overview : '',
                release_date : '',
                language : '',
                runtime : 0,
                rate : 0,
                budget : 0,
                status : 'popular',
                genres : [1],
                production_companies : [1],
                images : [
                    {
                        type : 'poster',
                        url : null
                    },
                    {
                        type : 'backdrop',
                        url : null
                    },
                ]
            }
        }
    },
    validations(){
        return {
            formRecord : {
                title : {required},
                tagline : {required},
                overview : {required},
                release_date : {required},
                language : {required},
                runtime : {required},
                rate : {required},
                budget : {required},
                status : {required},
                genres : {required},
                production_companies : {required},
                images : {required}
            }
        }
    },
    methods:{
        async initialise(){
            this.movies = await this.$store.dispatch('getAllMovies').then(data => {
                return data
            })
        },
        async validateForm(){
            const result = await this.v$.$validate()
            if (!result) return false
            return true
        },
        async addMovie(){

            const { data } = await axios.post(`movies`,this.formRecord)
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
        },
        async updateMovie(){
            if(this.ignoreImagesOnUpdate) this.formRecord.images = null
            Object.keys(this.formRecord)
            .forEach((property) => (this.formRecord[property] == null || this.formRecord[property] == '' ) && delete this.formRecord[property]);
            
            const { data } = await axios.put(`movies/${this.formRecord.id}`,this.formRecord)
            let type = 'error'
            if(data.status){
                type = 'success'
            }
            this.initialise()
            this.$store.dispatch('notify',{
                type : type,
                messages : [data.message]
            })
            this.close()
        },
        async deleteMovie(movieId){
            const { data } = await axios.delete(`movies/${movieId}`)
            let type = 'error'
            if(data.status){
                type = 'success'
            }
            this.initialise()
            this.$store.dispatch('notify',{
                type : type,
                messages : [data.message]
            })
            this.close()
        }, 
        prepareToEdit(movie){
            this.formRecord = movie
            this.formRecord.runtime = movie.duration
            let genresArray = []
            let companiesArray = []
            this.movieGenres.forEach(movieGenre => {
                movie.genres.forEach(genre => {
                    if(movieGenre.name == genre) genresArray.push(movieGenre.id)
                });
            });
            this.movieProductionCompanies.forEach(movieCompany => {
                movie.production_companies.forEach(company => {
                    if(movieCompany.name == company) companiesArray.push(movieCompany.id)
                });
            });
            this.formRecord.genres = genresArray
            this.formRecord.production_companies = companiesArray

            this.dialogAction = 'update'
            this.dialog = true
        },
        close(){
            this.formRecord.title = null
            this.formRecord.tagline = null
            this.formRecord.overview = null
            this.formRecord.budget = 0
            this.formRecord.runtime = 0
            this.formRecord.rate = 0
            this.formRecord.language = null
            this.formRecord.release_date = null
            this.formRecord.images = [
                {
                    type : 'poster',
                    url : null
                },
                {
                    type : 'backdrop',
                    url : null
                },
            ]

            this.dialogAction = 'add'
            this.dialog = false
        },

        pickImage (event,image) {
            let file = event.target.files[0]
            let reader = new FileReader
            reader.onload = () => {
                switch (image) {
                    case 'poster':
                        this.formRecord.images[0].url = reader.result
                        break;
                    default:
                        this.formRecord.images[1].url = reader.result
                        break;
                }
            }
            reader.readAsDataURL(file)
        }

    }
  }
</script>
<style scoped >
    .dialog-bottom-transition-enter-active, .dialog-bottom-transition-leave-active {
        transition: transform .2s ease-in-out;
    }
</style>