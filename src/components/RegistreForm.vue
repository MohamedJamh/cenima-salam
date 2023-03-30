<template >
    <h2 class="tw-text-3xl tw-my-5">Log in and book your ticket now !</h2>
    <div class="tw-relative tw-block tw-rounded-lg tw-shadow-lg tw-px-6 tw-py-12 md:tw-px-12 lg:tw--mr-14" style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px); z-index: 1">
        <v-form @submit.prevent="handelLogin()" v-model="valid">
            <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="12"
                    >
                        <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            type="text"
                            label="Full name"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="12"
                    >
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="12"
                    >
                        <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            label="Password"
                            type="password"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="12"
                    >
                        <v-text-field
                            v-model="passwordConfirmation"
                            :rules="[confirmPassword,confirmPasswordMatch]"
                            label="Password Confirmation"
                            type="password"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <div>
                    <router-link to="/Login">Already have an account ?</router-link>
                    <v-btn type="submit" :loading="log && valid" @click="log = !log" class="tw-float-right">Sign up</v-btn>
                </div>
            </v-container>
        </v-form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data: () => ({
        valid : false,
        log : false,
        name : '',
        nameRules : [
            value => {
                if (value) return true
                return 'Name is required.'
            }
        ],
        email: '',
        emailRules: [
            value => {
                if (value) return true
                return 'E-mail is required.'
            },
            value => {
            if (/.+@.+\..+/.test(value)) return true
            return 'E-mail must be valid.'
            },
        ],
        password : '',
        passwordRules:[
            value => {
                if (value) return true
                return 'Password is required.'
            }
        ],
        passwordConfirmation : '',
    }),
    methods:{
        confirmPassword(value){
            if(!value) return 'Confirmation is required'
        },
        confirmPasswordMatch(value){
            if(this.password != value) return 'Password does not match'
        },
        async handelLogin(){
            if(this.valid){
                await axios.post('register',
                {
                    name : this.name,
                    email : this.email,
                    password : this.password,
                })
                .then(response => {
                    localStorage.setItem('token',response.data.authorisation.token)
                    this.$router.push('/')
                })
                .catch(error => {
                    console.log(error.response.data.errors)
                })
                this.log = false;
            }
            
        }
    }
}
</script>
<style>
    
</style>