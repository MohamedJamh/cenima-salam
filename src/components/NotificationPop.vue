<template >
    <div>
        <v-snackbar
            v-model="this.$store.state.showNotification"
            :color="this.$store.state.notificationMessage.type"
            location="top"
            
          >
            <div class="text-subtitle-1 pb-2">Notification</div>

            <p
            v-for="message in this.$store.state.notificationMessage.messages"
            >{{ message }}</p>

            <template v-slot:actions>
                <v-btn
                color="white"
                variant="text"
                @click="this.$store.state.showNotification = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>