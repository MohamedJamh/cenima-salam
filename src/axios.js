import axios from 'axios'
import store from './store'

axios.defaults.baseURL = "http://cenima.salam.test/api/"
axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token')
axios.defaults.headers.common['Content-Type'] = 'Application/json'
axios.defaults.headers.common['Accept'] = 'Application/json'