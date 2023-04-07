import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'

export default createStore({
    state () {
        return {
            token : null,
            user : null,
        }
    },
    mutations: {
        storeToken(state, JwtToken){
            state.token = JwtToken
        },
        destroyToken(state){
            state.token = null
        },
        
    },
    actions: {
        logout({ commit }){
            commit('destroyToken')
            router.push('/Login')
        },
        loggedIn({dispatch , state}){
            if(!state.token){
                dispatch('logout')
            }
        },
        
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
        }
    },
    getters:{
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