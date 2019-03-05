import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        allCDNs: null,
        foundCDNs: null
    },
    mutations: {
        fillListaCDNs: (state, data) => {
            state.allCDNs = data;
        },
        searchCDNs: (state, data) => {
            // state.foundCDNs = state.allCDNs.filter(cdn => cdn.name.includes(name))
            state.foundCDNs = data;
        }
    },
    actions: {
        getData: (context) => {
            axios.get('https://api.cdnjs.com/libraries/')
                .then(res => context.commit('fillListaCDNs', res.data.results))
                .catch(err => console.error(err))
        },
        searchCDNsAPI: (context, search) => {
            axios.get(`https://api.cdnjs.com/libraries?search=${search}`)
                .then(res => context.commit('searchCDNs', res.data.results))
                .catch(err => console.error(err))
        }
    }
})