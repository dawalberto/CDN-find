import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        allCDNs: null,
        foundCDNs: null,
    },
    mutations: {
        fillListaCDNs: (state, data) => {
            state.allCDNs = data;
        },
        searchCDNs: (state, search) => {
            state.foundCDNs = state.allCDNs.filter(cdn => cdn.name.includes(search))
        }
    },
    actions: {
        getData: (context) => {
            axios.get('https://api.cdnjs.com/libraries/')
                .then(res => context.commit('fillListaCDNs', res.data.results))
                .catch(err => console.error(err))
        }
    }
})