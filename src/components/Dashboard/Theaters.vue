<template>
    <div class="tw-pt-4 tw-pl-2">
        <section class="tw-flex tw-items-center tw-justify-between">
            <h2 class=" tw-text-3xl tw-font-semibold" >All Available Theaters</h2>
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
                        Add Theater
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Theater</span>
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
                                    v-model="formRecord.name"
                                    label="name"
                                    ></v-text-field>
                                    <validationError 
                                    v-if="v$.formRecord.name.$error" 
                                    :message="v$.formRecord.name.$errors[0].$message" />
                                </v-col>    
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-select
                                        hide-details
                                        v-model="formRecord.schema_id"
                                        :items="schemas"
                                        item-title="name"
                                        item-value="id"
                                        label="Schemas"
                                        :return-object="false"
                                        single-line
                                    ></v-select>
                                    <validationError 
                                    v-if="v$.formRecord.schema_id.$error" 
                                    :message="v$.formRecord.schema_id.$errors[0].$message" />
                                </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        {{ formRecord }}
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
                            @click="updateTheater()"
                        >
                            Update
                        </v-btn>
                        <v-btn
                            v-else
                            class="btn-secondary"
                            variant="text"
                            @click="addTheater()"
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
                        <th scope="col" class="tw-px-6 tw-py-3">
                            <span class="tw-sr-only">preview</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                      v-for="theater in theaters"
                      class="tw-bg-white tw-border-b">
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ theater.name }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ theater.schema.name }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ theater.schema.capacity }}
                        </th>
                        <th scope="row" class="tw-px-6 tw-py-4 tw-whitespace-nowrap ">
                            {{ theater.showtimes.length }}
                        </th>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="prepareToEdit(theater)">
                                <v-icon
                                color="primary"
                                icon="mdi-table-edit"
                                size="large"></v-icon>
                            </div>
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="deleteTheater(theater.id)">
                                <v-icon
                                color="primary"
                                icon="mdi-delete-empty-outline"
                                size="large"></v-icon>
                            </div>
                        </td>
                        <td class="tw-px-2 tw-py-4 tw-cursor-pointer">
                            <div @click="">
                                <v-icon
                                color="primary"
                                icon="mdi-arrow-expand"
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
        this.schemas = await this.$store.dispatch('getSchemas')
        .then(data =>{
            return data
        })
    },
    setup: () => ({ v$: useVuelidate() }),
    data(){
        return {
            dialog : false,
            dialogAction : 'add',
            theaters : null,
            schemas : null,
            headers:[
                'Name',
                'Schema Name',
                'Capacity',
                'Showtimes'
            ],
            formRecord : {
                id : null,
                name : null,
                schema_id: null
            }
        }
    },
    validations(){
        return {
            formRecord : {
                name: { required },
                schema_id: { required }
            }
        }
    },
    components:{
        validationError
    },
    methods:{
        async initialise(){
            this.theaters = await this.$store.dispatch('getTheaters')
            .then(data =>{
                return data
            })
        },
        async validateForm(){
            const result = await this.v$.$validate()
            if (!result) return false
            return true
        },
        prepareToEdit(theater){
            this.formRecord.id = theater.id
            this.formRecord.name = theater.name
            this.formRecord.schema_id = theater.schema.id
            this.dialogAction = 'update'
            this.dialog = true
        },
        async updateTheater(){
            if(await this.validateForm()){
                const { data } = await axios.patch(`theaters/${this.formRecord.id}`,this.formRecord)
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
        async deleteTheater(id){
            const { data } = await axios.delete(`theaters/${id}`)

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
        async addTheater(){
            if(await this.validateForm()){
                const { data } = await axios.post(`theaters`,this.formRecord)
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
            this.formRecord.id = ''
            this.formRecord.name = ''
            this.formRecord.schema_id = 1
            this.v$.$reset()
            this.dialogAction = 'add'
            this.dialog = false
        }
    }
}
</script>
<style>
    
</style>