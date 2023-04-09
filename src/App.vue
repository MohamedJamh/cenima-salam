<template>
  <v-app >
    <v-main>
      <RouterView />
      <notificationPopup />
    </v-main>
  </v-app>
</template>

<script>
import notificationPopup from '@/components/NotificationPop.vue'


export default {
  name: 'App',
  
  components: {
    notificationPopup
  },

  data: () => ({
    //
  }),
}
</script>
