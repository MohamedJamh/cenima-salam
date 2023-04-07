<template >
    <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-6 tw-pt-8 tw-mx-auto md:tw-h-screen pt:tw-mt-0 dark:tw-bg-gray-900">
        <a href="" class="flex items-center justify-center mb-5 text-2xl font-semibold lg:mb-10 dark:text-white">
            <img src="/images/logo.svg" class="tw-mr-4 tw-h-11" alt="FlowBite Logo">
        </a>
        <!-- Card -->
        <component
          :is="currentCompo"
          @switch="toggleComponent()"
          ></component>
    </div>
</template>
<script>
import loginForm from "@/components/LoginForm.vue";
import registerForm from "@/components/RegistreForm.vue";
export default {
    created(){
        if(localStorage.getItem('token')){
            this.$router.push('/')
        }
    },
    data(){
        return{
            currentCompo : 'loginForm'
        }
    },
    components:{
        loginForm,
        registerForm
    },
    methods:{
        toggleComponent() {
            this.currentCompo = this.currentCompo === 'loginForm' ? 'registerForm' : 'loginForm'
        }
    }
}
</script>
<style scoped >
    
</style>