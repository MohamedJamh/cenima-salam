// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// Vuetify
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'
// import { VDatePicker } from 'vuetify/labs/VDataTable'

const myTheme = {
  dark: false,
  colors: {
    primary: '#dc2626',
    secondary:'#FFFFFF'
    // 'primary-darken-1': '#3700B3',
    // secondary: '#03DAC6',
    // 'secondary-darken-1': '#018786',
  }
}

export default createVuetify({
  components: {
    VDataTable,
  },
  defaults: {
    VDataTable: {
      fixedHeader: true,
      noDataText: 'Results not found',
    },
  },
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme,
    }
  }
})
