<template >
    <div>
        <section class="tw-flex tw-items-center tw-justify-between">
            <h2 class=" tw-text-3xl tw-font-semibold" >All Beverages</h2>
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
                                    v-model="formRecord.title"
                                    label="Title"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                    v-model="formRecord.description"
                                    label="Description"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                    v-model="formRecord.price"
                                    label="Price"
                                    type="number"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-select
                                        v-model="formRecord.beverage_type_id"
                                        :items="beverageTypes"
                                        item-title="name"
                                        item-value="id"
                                        label="Beverage Type"
                                        :return-object="false"
                                        single-line
                                    ></v-select>
                                </v-col>
                                <v-col
                                    cols="12"
                                >
                                    <v-file-input
                                    @change="pickImage($event)"
                                    accept="image/*"
                                    label="Beverage image"
                                    variant="underlined"></v-file-input>
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
                            class="btn-primary"
                            variant="text"
                            @click="deleteBeverage()"
                        >
                            Delete
                        </v-btn>
                        <v-btn
                            v-if="dialogAction == 'update'"
                            class="btn-primary tw-w-28"
                            variant="text"
                            @click="updateBeverage()"
                        >
                            Update
                        </v-btn>
                        <v-btn
                            v-else
                            class="btn-primary tw-w-28"
                            variant="text"
                            @click="addBeverage()"
                        >
                            Add
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-row>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    created(){
        this.initialise()
    },
    data(){
        return {
            dialog : false,
            dialogAction : 'add',
            movies : null,
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
        async initialise(){
            let popular = await this.$store.dispatch('getPopularMovies').then(data =>{
                return data
            })
            let upcoming = await this.$store.dispatch('getUpcomingMovies').then(data =>{
                return data
            })
            this.movies = popular.concat(upcoming)
            console.log(this.movies)
        }
    }
    
}
</script>
<style >
    
</style>