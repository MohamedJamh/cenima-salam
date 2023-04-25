<template >
    <div>
        <nav class="tw-flex tw-justify-between tw-space-x-6 tw-text-white tw-font-medium">
            <div class="tw-flex tw-space-x-6">
                <router-link 
                v-for="link in links"
                :to="link.path"
                >
                    <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">{{ link.name }}</a>
                </router-link>
            </div>
            <div class="tw-flex tw-items-center tw-gap-2">
                <router-link 
                v-if="isAdmin()"
                to="/dashboard"
                >
                    <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">Dashboard</a>
                </router-link>
                <button
                v-if="this.$store.getters.getUser"
                class="tw-px-8 tw-py-1 tw-text-lg tw-font-medium tw-text-center tw-text-white tw-bg-red-700 tw-rounded-lg hover:tw-bg-red-800 focus:tw-ring-4 focus:tw-ring-red-300"
                @click="this.$store.dispatch('logout')"
                >logout</button>
                <button
                v-else
                class="tw-px-8 tw-py-1 tw-text-lg tw-font-medium tw-text-center tw-text-white tw-bg-red-700 tw-rounded-lg hover:tw-bg-red-800 focus:tw-ring-4 focus:tw-ring-red-300"
                @click="this.$router.push('/')"
                >log in</button>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name:'navbar',
    created(){
        this.isAdmin()
    },
    data(){
        return {
            links:[
                { path: '/Home', name:'Home'},
                { path: '/Popular', name:'Popular'},
                { path: '/Upcoming', name:'Upcoming'},
                { path: '/Showtimes', name:'Showtimes'},
            ]
        }
    },
    methods:{
        isAdmin(){
            const user = this.$store.getters.getUser
            if(user && user.roles.includes('admin')){
                return true
            }
            return false
        }
    }
}
</script>
<style >
    
</style>