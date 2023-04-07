<template >
    <div class="tw-w-full tw-max-w-xl tw-p-6 tw-space-y-8 sm:tw-p-8 tw-bg-white tw-rounded-lg tw-shadow dark:tw-bg-gray-800">
        <form class="tw-mt-2 tw-space-y-6" @submit.prevent="handelLogin()">
            <div>
                <label for="email" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Your email</label>
                <input v-model="email" type="email" name="email" id="email" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500" placeholder="name@company.com" required="">
            </div>
            <div>
                <label for="password" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Your password</label>
                <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500" required="">
            </div>
            <div class="tw-flex tw-items-center tw-justify-between">
                <button type="submit" class="tw-w-full tw-px-5 tw-py-3 tw-text-base tw-font-medium tw-text-center tw-text-white tw-bg-red-700 tw-rounded-lg hover:tw-bg-red-800 focus:tw-ring-4 focus:tw-ring-red-300 sm:tw-w-auto ">Login to cenima salam</button>
                <a href="#" class="tw-ml-auto tw-text-sm tw-text-primary-700 hover:tw-underline dark:tw-text-primary-500">Lost Password?</a>
            </div>
            <div class="tw-text-sm tw-font-medium tw-text-gray-500 dark:tw-text-gray-400">
                Not registered? <a @click="this.$emit('switch')" class="tw-text-primary-700 hover:tw-underline dark:tw-text-primary-500">Create account</a>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data: () => ({
        valid : false,
        log : false,
        email: '',
        emailRules: [
            value => {
            if (value) return true

            return 'E-mail is requred.'
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

            return 'Password is requred.'
            }
        ]
    }),
    methods:{
        async handelLogin(){
            const {data} = await axios.post('login',
            {
                email : this.email,
                password : this.password,
            })
            if(data.status){
                console.log(data.authorisation.token)
                // localStorage.setItem('token',data.authorisation.token)
                // this.$router.push('/')
            }else{
                alert(data.message)
            }
        }
    }
}
</script>
<style>
    
</style>