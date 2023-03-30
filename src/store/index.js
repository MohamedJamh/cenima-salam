import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state () {
    return {
        test : 'test',
        token : null
    }
  },
  mutations: {
    storeToken(state, JwtToken){
        state.token = JwtToken
    },
    destroyToken(state){
        state.token = null
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
    getToken(state){
        return state.token
    }
  },
  modules:{

  }
})