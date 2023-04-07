<template >
    <div class="tw-pt-4 tw-pl-2" >
        <div class="tw-flex tw-justify-between">
            <h2 class=" tw-text-3xl tw-font-semibold" >All Movies</h2>
            <v-template>
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
                                    variant="text"
                                    @click="dialog = false"
                                    >
                                    Save
                                    </v-btn>
                                </v-toolbar-items>
                            </v-toolbar>
                            <div class="tw-container tw-mx-auto">
                                <div class="tw-full tw-rounded-lg tw-bg-gray-200 tw-h-96 tw-my-4 ">
                                    <img src="" alt="">
                                </div>
                                <section class="tw-flex tw-flex-col md:tw-flex-row tw-h-full">
                                    <div class="tw-w-2/6 tw-h-full tw-rounded-lg tw-bg-gray-200">
                                        <img src="" alt="">
                                    </div>
                                    <div class="tw-w-4/6">
                                        <v-form v-model="valid">
                                            <v-container>
                                            <v-row>
                                                <v-col
                                                cols="12"
                                                md="6"
                                                >
                                                <v-text-field
                                                    v-model="firstname"
                                                    :rules="nameRules"
                                                    :counter="10"
                                                    label="Title"
                                                    required
                                                ></v-text-field>
                                                </v-col>

                                                <v-col
                                                cols="12"
                                                md="6"
                                                >
                                                <v-text-field
                                                    v-model="lastname"
                                                    :rules="nameRules"
                                                    :counter="10"
                                                    label="Tagline"
                                                    required
                                                ></v-text-field>
                                                </v-col>

                                                <v-col cols="12" md="12">
                                                    <v-textarea 
                                                        v-model="email"
                                                        :rules="emailRules"
                                                        label="Overview"
                                                        required
                                                    ></v-textarea>
                                                </v-col>
                                                
                                                <v-col cols="12" md="4" >
                                                    <v-combobox
                                                        label="Status"
                                                        :items="movieStatus"
                                                    ></v-combobox>
                                                </v-col>
                                                <v-col cols="12" md="4" >
                                                    <v-combobox
                                                        label="Status"
                                                        :items="movieStatus"
                                                    ></v-combobox>
                                                </v-col>
                                            </v-row>
                                            </v-container>
                                        </v-form>
                                    </div>
                                </section>
                            </div>
                        </v-card>
                    </v-dialog>
                </v-row>
            </v-template>
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
                                <img :src="movie.images[0].url" class="" alt="">
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
                            {{ movie.runtime }}
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="alertt('update')">
                                <v-icon
                                color="primary"
                                icon="mdi-movie-edit"
                                size="large"></v-icon>
                            </div>
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="alertt('delete')">
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
export default {
    async created(){
        this.movies = await this.$store.dispatch('getAllMovies').then(data => {
            return data
        })
    },
    data(){
        return {
            dialog : false,
            headers:[
                'Poster',
                'Title',
                'Status',
                'Release Date',
                'Language',
                'Runtime',
            ],
            movies : null,
            movieStatus : ['premier','popular','upcoming']
        }
    },
    methods:{
        alertt(t){
            alert(t)
        }
    }
    
  }
</script>
<style scoped >
    .dialog-bottom-transition-enter-active, .dialog-bottom-transition-leave-active {
        transition: transform .2s ease-in-out;
    }
</style>