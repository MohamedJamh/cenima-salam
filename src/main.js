import { createApp } from 'vue'
import App from './App.vue'
import vuex from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './axios'

import './assets/style/app.css'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(vuex)
  .mount('#app')
