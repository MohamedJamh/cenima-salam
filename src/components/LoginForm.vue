<template >
    <h2 class="tw-text-3xl tw-my-5">Log in and book your ticket now !</h2>
    <div class="tw-relative tw-block tw-rounded-lg tw-shadow-lg tw-px-6 tw-py-12 md:tw-px-12 lg:tw--mr-14" style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px); z-index: 1">
        <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col
                cols="12"
                md="12"
                >
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="12"
                >
                    <v-text-field
                        v-model="password"
                        label="First name"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-btn type="submit" class="tw-float-right">login</v-btn>
        </v-container>
    </v-form>
    </div>
</template>
<script>
export default {
    data: () => ({
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true
          return 'E-mail must be valid.'
        },
      ],
    }),
}
</script>
<style>
    
</style>