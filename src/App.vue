<template>
  <div id="container">
    <div id="content">
      <searchcdn></searchcdn>

      <cdn v-for="cdn in foundCDNs" 
        :key="cdn.name"
        :name="cdn.name" 
        :url="cdn.latest">
      </cdn>
    </div>

    <customFooter id="customFooter"></customFooter>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import searchcdn from './components/Search'
import cdn from './components/CDN'
import customFooter from './components/Footer'

export default {
  name: 'app',
  components: {searchcdn, cdn, customFooter},
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
  #container {
    position: relative;
    min-height: 95vh;
  }
  #content {
    padding-bottom: 9rem;
  }
  #customFooter {
    position: absolute;
    bottom: 0;
  }
</style>
