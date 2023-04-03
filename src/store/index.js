import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'

export default createStore({
    state () {
        return {
            token : null,
            user : null,
            popularMovies : null,
            premierMovies : null,
            upcomingMovies : null
        }
    },
    mutations: {
        storeToken(state, JwtToken){
            state.token = JwtToken
        },
        destroyToken(state){
            state.token = null
        },
        storeMovies(state , data){
            switch (data[1]) {
              case 'popular':
                  state.popularMovies = data[0]
                  break;
              case 'premier':
                  state.premierMovies = data[0]
                  break;
              case 'upcoming':
                  state.upcomingMovies = data[0]
                  break;
            }
        }
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
        async checkAvailableData({state , dispatch}){
            if(!state.popularMovies){
                await dispatch('getPopularMovies')
            }
            if(!state.premierMovies){
                await dispatch('getPremierMovies')
            }
            if(!state.upcomingMovies){
                await dispatch('getUpcomingMovies')
            }
        },
        async getPopularMovies({commit}){
            const response = await axios.get('movie')
            commit('storeMovies',[response.data.result,'popular'])
            return response.data.result
        },
        async getPremierMovies({commit}){
            const response = await axios.get('movie/premier')
            commit('storeMovies',[response.data.result,'premier'])
            return response.data.result

        },
        async getUpcomingMovies({commit}){
            const response = await axios.get('movie/upcoming')
            commit('storeMovies',[response.data.result,'upcoming'])
            return response.data.result
        }
    },
    getters:{
        getUser(state){
            return state.user
        },
        getToken(state){
            return state.token
        },
        getPopular(state){
            return state.popularMovies
        },
        getPremier(state){
            return state.premierMovies
        },
        getUpcoming(state){
            return state.upcomingMovies
        }
    },
    modules:{

    }
})