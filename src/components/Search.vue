<template>
    <div>
        <h1>FIND ANY CDN</h1>
        <input type="text" @keypress="searchCDNs(value)" v-model="value">
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    name: 'searchcdn',
    data() {
        return {
            value: null
        }
    },
    methods: {
        ...mapMutations(['searchCDNs'])
    }
}
</script>

<style scoped>
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
