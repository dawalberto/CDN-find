<template>
    <div>
        <input type="text" @keypress="searchCDNs(valueInput)" v-model="valueInput">
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    name: 'searchcdn',
    data() {
        return {
            valueInput: null
        }
    },
    methods: {
        ...mapMutations(['searchCDNs'])
    }
}
</script>

<style scoped>

</style>
