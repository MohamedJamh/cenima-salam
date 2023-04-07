<template >
    <div>
        <nav class="tw-flex tw-space-x-6 tw-text-white tw-font-medium">
            <router-link 
            v-for="link in links"
            :to="link.path"
            >
                <a href="#" class="hover:tw-text-gray-700 dark:hover:tw-text-white">{{ link.name }}</a>
            </router-link>
        </nav>
    </div>
</template>
<script>
export default {
    name:'navbar',
    data(){
        return {
            links:[
                { 'path': '/Home','name':'Home'},
                { 'path': '/Popular','name':'Popular'},
                { 'path': '/Premier','name':'Premier'},
                { 'path': '/Upcoming','name':'Upcoming'},
            ]
        }
    }
}
</script>
<style >
    
</style>