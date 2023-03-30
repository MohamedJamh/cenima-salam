<template >
    <div class="tw-container tw-my-24 tw-px-6 tw-mx-auto">
        <section class="tw-mb-32 tw-text-gray-800 tw-text-center lg:tw-text-left">
            <div class="tw-container tw-mx-auto xl:tw-px-32 tw-text-center lg:tw-text-left">
                <div class="tw-grid lg:tw-grid-cols-2 tw-flex tw-items-center">
                    <div class="tw-mb-12 lg:tw-mb-0">
                        <loginForm />
                    </div>
                    <div>
                        <img src="@/assets/img/logbanner.jpg" class="tw-w-full tw-shadow-lg tw-fancy-border-radius tw-rotate-lg-6" alt="">  
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import loginForm from "@/components/LoginForm.vue";
export default {
    created(){
        if(localStorage.getItem('token')){
            this.$router.push('/')
        }
    },
    components:{
        loginForm
    }
}
</script>
<style scoped >
    /* @media (min-width: 992px) {
      .tw-rotate-lg-6 {
        transform: rotate(6deg);
      }
    }

    .tw-fancy-border-radius {
      border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;
    } */
</style>