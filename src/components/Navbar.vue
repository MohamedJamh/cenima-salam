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
            <div>
                <router-link 
                v-if="isAdmin()"
                to="/dashboard"
                >
                    <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">Dashboard</a>
                </router-link>
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