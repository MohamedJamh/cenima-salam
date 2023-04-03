import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'

export default createStore({
    state () {
        return {
            token : null,
            user:'you',
            popularMovies : [],
            premierMovies : [],
            upcomingMovies : []
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
            console.log(state.popularMovies)
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