<template>
  <v-app >
    <v-main class="tw-bg-zinc-900 tw-text-white" >
      <RouterView />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
}
</script>
