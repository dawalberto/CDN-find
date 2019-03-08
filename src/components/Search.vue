<template>
    <div>
        <h1>FIND ANY CDN</h1>
        <input type="text" @keypress.enter="searchCDNsLower(value)" v-model="value" placeholder="search a CDN and press key enter">
        <h3 v-if="value">{{ foundCDNs.length }} CDNs found for "{{ value }}"</h3>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
    name: 'searchcdn',
    data() {
        return {
            value: null
        }
    },
    computed: {
        ...mapState(['foundCDNs'])
    },
    methods: {
        // ...mapMutations(['searchCDNs'])
        searchCDNsLower(value) {
            value = value.toLowerCase();
            this.$store.commit('searchCDNs', value)
        }
    }
}
</script>

<style scoped>
    h1 {
        font-weight: lighter;
    }
    div {
        width: 100%;
        text-align: center;
        margin: auto;
    }
    input {
        width: 100%;
    }
    @media only screen and (min-width: 768px) {
        div {
            width: 90%;
        }
        input {
            width: 30%;
        }
    }
</style>
