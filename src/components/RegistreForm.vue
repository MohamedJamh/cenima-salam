<template >
    <div class="tw-w-full tw-max-w-xl tw-p-6 tw-space-y-8 sm:tw-p-8 tw-bg-white tw-rounded-lg tw-shadow dark:tw-bg-gray-800">
        <form class="tw-mt-2 tw-space-y-6" @submit.prevent="handelRegister()">
            <div>
                <label for="name" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Your full name</label>
                <input v-model="name" type="text" name="name" id="name" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500" placeholder="Ras l'avocat" required="">
            </div><div>
                <label for="email" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Your email</label>
                <input v-model="email" type="email" name="email" id="email" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500" placeholder="name@company.com" required="">
            </div>
            <div>
                <label for="password" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Your password</label>
                <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500" required="">
            </div>
            <div>
                <label for="confirm-password" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Confirm password</label>
                <input v-model="passwordConfirmation" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500" required="">
            </div>
            <div class="tw-flex tw-items-center tw-justify-between">
                <div class="tw-text-sm tw-font-medium tw-text-gray-500 dark:tw-text-gray-400">
                    Already have an account? <a href="#" @click="this.$emit('switch')" class="tw-text-primary-700 hover:tw-underline dark:tw-text-primary-500">Login here</a>
                </div>
                <button type="submit" class="tw-w-full tw-px-5 tw-py-3 tw-text-base tw-font-medium tw-text-center tw-text-white tw-bg-red-700 tw-rounded-lg hover:tw-bg-red-800 focus:tw-ring-4 focus:tw-ring-red-300 sm:tw-w-auto float-left">Create account</button>
            </div>
            
        </form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data: () => ({
        name : '',
        email: '',
        password : '',
        passwordConfirmation : ''
    }),
    methods:{
        async handelRegister(){
            await axios.post('register',
            {
                name : this.name,
                email : this.email,
                password : this.password,
            })
            .then(response => {
                // localStorage.setItem('token',response.data.authorisation.token)
                // this.$router.push('/')
            })
            .catch(error => {
                console.log(error.response.data.errors)
            })
            
        }
    }
}
</script>
<style>
    
</style>