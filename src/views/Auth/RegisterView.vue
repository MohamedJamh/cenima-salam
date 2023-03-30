<template>
    <div class="tw-container tw-my-24 tw-px-6 tw-mx-auto">
        <section class="tw-mb-32 tw-text-gray-800 tw-text-center lg:tw-text-left">
            <div class="tw-container tw-mx-auto xl:tw-px-32 tw-text-center lg:tw-text-left">
                <div class="tw-grid lg:tw-grid-cols-2 tw-flex tw-items-center">
                    <div class="tw-mb-12 lg:tw-mb-0">
                        <registerForm />
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
import registerForm from "@/components/RegistreForm.vue";
export default {
    components:{
        registerForm
    }
}
</script>
<style>
    
</style>