<template>
  <div>
    <h4>SEARCH ANY CDN</h4>

    <searchcdn></searchcdn>

    <cdn v-for="(cdn, index) in foundCDNs" :key="index"
    :name="cdn.name" 
    :url="cdn.latest">
      <h5 slot="name">{{ cdn.name }}</h5>
      <a :href="cdn.latest" slot="url" target="_blanck">{{ cdn.latest }}</a>
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
    ...mapState(['allCDNs', 'foundCDNs'])

    },
  created() {
    this.$store.dispatch('getData')
  }
}
</script>

<style>

</style>
