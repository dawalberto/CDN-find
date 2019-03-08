<template>
  <div>
    <searchcdn></searchcdn>

    <cdn v-for="cdn in foundCDNs" :key="cdn.name"
    :name="cdn.name" 
    :url="cdn.latest">
    </cdn>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import searchcdn from './components/Search'
import cdn from './components/CDN'

export default {
  name: 'app',
  components: {searchcdn, cdn},
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(['foundCDNs'])

    },
  created() {
    this.$store.dispatch('getData')
  }
}
</script>

<style scoped>

</style>
