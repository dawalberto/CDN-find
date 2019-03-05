<template>
    <div>
        <input type="text" @keypress="searchCDNsAPI(valueInput)" v-model="valueInput">
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'searchcdn',
    data() {
        return {
            valueInput: null
        }
    },
    methods: {
        ...mapActions(['searchCDNsAPI'])
    }
}
</script>

<style scoped>

</style>
