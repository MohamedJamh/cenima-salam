import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'

export default createStore({
    state () {
        return {
            //auth
            token : null,
            user : null,
            //notification
            showNotification : false,
            notificationMessage: {
                type : '',
                messages : ''
            }
        }
    },
    mutations: {
        //auth
        storeToken(state, JwtToken){
            state.token = JwtToken
        },
        destroyToken(state){
            state.token = null
        },
        //notification
        trrigerNotification(state,paylod){
            state.notificationMessage.type = paylod.type
            state.notificationMessage.messages = paylod.messages
            state.showNotification = true
        }
        
    },
    actions: {
        //auth
        logout({ commit }){
            commit('destroyToken')
            router.push('/Login')
        },
        loggedIn({dispatch , state}){
            if(!state.token){
                dispatch('logout')
            }
        },
        // movies
        async getPopularMovies(){
            const response = await axios.get('home/popularMovie')
            return response.data.result
        },
        async getPremierMovies(){
            const response = await axios.get('home/premierMovie')
            return response.data.result
        },
        async getUpcomingMovies(){
            const response = await axios.get('home/upcomingMovie')
            return response.data.result
        },
        async getAllMovies(){
            const {data} = await axios.get('movies')
            if(data.status){
                return data.result
            }
        },
        //showtimes
        async getShowtimes(){
            const {data} = await axios.get('showtimes')
            if(data.status){
                return data.result
            }
        },
        //genres
        async getGenres(){
            const {data} = await axios.get('genres')
            if(data.status){
                return data.result
            }
        },
        //Theaters
        async getTheaters(){
            const {data} = await axios.get('theaters')
            if(data.status){
                return data.result
            }
        },
        //Schemas
        async getSchemas(){
            const {data} = await axios.get('schemas')
            if(data.status){
                return data.result
            }
        },
        //companies
        async getCompanies(){
            const {data} = await axios.get('production-companies')
            if(data.status){
                return data.result
            }
        },
        //Beverage 
        async getBeverages(){
            const {data} = await axios.get('beverages')
            if(data.status){
                return data.result
            }
        },
        //Beverage Types
        async getBeverageTypes(){
            const {data} = await axios.get('beverage-types')
            if(data.status){
                return data.result
            }
        },
        //notification
        notify({commit},notifcationPaylod){
            commit('trrigerNotification',notifcationPaylod)
        }
    },
    getters:{
        //auth
        getUser(state){
            return state.user
        },
        getToken(state){
            return state.token
        }
    },
    modules:{

    }
})