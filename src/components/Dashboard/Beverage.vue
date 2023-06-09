<template>
    <div class="tw-pt-4 tw-pl-2">
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
                        Add Beverage
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Beverage</span>
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
                                    v-model="formRecord.title"
                                    label="Title"
                                    ></v-text-field>
                                    <validationError 
                                    v-if="v$.formRecord.title.$error" 
                                    :message="v$.formRecord.title.$errors[0].$message" />
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                    hide-details
                                    v-model="formRecord.description"
                                    label="Description"
                                    ></v-text-field>
                                    <validationError 
                                    v-if="v$.formRecord.description.$error" 
                                    :message="v$.formRecord.description.$errors[0].$message" />
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                    hide-details
                                    v-model="formRecord.price"
                                    label="Price"
                                    type="number"
                                    ></v-text-field>
                                    <validationError 
                                    v-if="v$.formRecord.price.$error" 
                                    :message="v$.formRecord.price.$errors[0].$message" />
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-select
                                        hide-details
                                        v-model="formRecord.beverage_type_id"
                                        :items="beverageTypes"
                                        item-title="name"
                                        item-value="id"
                                        label="Beverage Type"
                                        :return-object="false"
                                        single-line
                                    ></v-select>
                                    <validationError 
                                    v-if="v$.formRecord.beverage_type_id.$error" 
                                    :message="v$.formRecord.beverage_type_id.$errors[0].$message" />
                                </v-col>
                                <v-col
                                    cols="12"
                                >
                                    <v-file-input
                                    hide-details
                                    @change="pickImage($event)"
                                    accept="image/*"
                                    label="Beverage image"
                                    variant="underlined"></v-file-input>
                                    <validationError 
                                    v-if="v$.formRecord.image.$error" 
                                    :message="v$.formRecord.image.$errors[0].$message" />
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
        <div class=" tw-cursor-pointer tw-mt-10 tw-gap-x-5 tw-gap-y-5 tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 lg:tw-grid-cols-4">
            <div
            v-for="beverage in beverages"
            @click="prepareToEdit(beverage)"
            class=" tw-relative tw-rounded-xl tw-overflow-hidden">
                <div class="tw-flex tw-flex-col tw-rounded-xl tw-overflow-hidden tw-border tw-border-zinc-200">
                    <img :src=" beverage.image.url " class="tw-h-4/5 tw-object-cover tw-w-full tw-aspect-square tw-bg-top tw-border-red-500" alt="">
                    <div class="tw-px-2 tw-py-3">
                        <p class="tw-capitalize tw-font-medium tw-truncate">{{ beverage.title }}</p>
                        <p class="tw-capitalize tw-font-light tw-truncate">{{ beverage.description }}</p>
                        <div class="tw-flex tw-space-x-2 tw-items-center tw-justify-between tw-text-sm tw-pr-4 ">
                            <span>{{ beverage.type.name }}</span>
                            <span>{{ beverage.price }} DH</span>
                        </div>
                    </div>
                </div>
            </div>
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
        await this.initialise()
        this.beverageTypes = await this.$store.dispatch('getBeverageTypes')
        .then(data =>{
            return data
        })
    },
    setup: () => ({ v$: useVuelidate() }),
    data(){
        return {
            dialog : false,
            dialogAction : 'add',
            beverages : null,
            beverageTypes : null,
            formRecord : {
                id: '',
                title: '',
                description: '',
                price: '',
                beverage_type_id: '',
                image : ''
            }
        }
    },
    validations(){
        return {
            formRecord : {
                title: { required },
                description: { required },
                price: { required },
                beverage_type_id: { required },
                image : { requiredIf : requiredIf(this.dialogAction == 'add') }
            }
        }
    },
    components:{
        validationError
    },
    methods:{
        async initialise(){
            this.beverages = await this.$store.dispatch('getBeverages')
            .then(data =>{
                return data
            })
        },
        async validateForm(){
            const result = await this.v$.$validate()
            if (!result) return false
            return true
        },
        prepareToEdit(beverage){
            this.formRecord.id = beverage.id
            this.formRecord.title = beverage.title
            this.formRecord.description = beverage.description
            this.formRecord.price = beverage.price
            this.formRecord.beverage_type_id = beverage.type.id

            this.dialogAction = 'update'
            this.dialog = true
        },
        async updateBeverage(){
            if(await this.validateForm()){
                Object.keys(this.formRecord)
                .forEach((property) => (this.formRecord[property] == null || this.formRecord[property] == '' ) && delete this.formRecord[property]);

                const { data } = await axios.patch(`beverages/${this.formRecord.id}`,this.formRecord,{
                    headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token') 
                    }
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
        async deleteBeverage(){
            const { data } = await axios.delete(`beverages/${this.formRecord.id}`,{
                headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
                }
            })
            let type = null
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
        async addBeverage(){
            if(await this.validateForm()){
                const { data } = await axios.post(`beverages`,this.formRecord,{
                    headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token') 
                    }
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
            this.formRecord.id = ''
            this.formRecord.title = ''
            this.formRecord.description = ''
            this.formRecord.price = ''
            this.formRecord.beverage_type_id = ''
            this.v$.$reset()
            this.dialogAction = 'add'
            this.dialog = false
        },
        pickImage (event) {
            let file = event.target.files[0]
            let reader = new FileReader
            reader.onload = () => {
                    this.formRecord.image = reader.result
            }
            reader.readAsDataURL(file)
        }
    }
}
</script>
<style>
    
</style>