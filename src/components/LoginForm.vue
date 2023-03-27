<template >
    <h2 class="tw-text-3xl tw-my-5">Log in and book your ticket now !</h2>
    <div class="tw-relative tw-block tw-rounded-lg tw-shadow-lg tw-px-6 tw-py-12 md:tw-px-12 lg:tw--mr-14" style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px); z-index: 1">
        <form>
            <div class="tw-mb-6">
                <label for="email" class=" tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Your email</label>
                <input type="email" id="email" class="tw-outline-none tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 " placeholder="name@flowbite.com" required="">
            </div>
            <div class="tw-mb-6">
                <label for="password" class=" tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 ">Your password</label>
                <input type="password" id="password" placeholder="•••••••" class="tw-outline-none tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 " required="">
            </div>
            <button type="submit" class="tw-float-right tw-text-white focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full sm:tw-w-auto tw-px-5 tw-py-2.5 tw-text-center ">Log in </button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>