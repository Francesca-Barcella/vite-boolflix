<script >
import axios from 'axios'
import { store } from './store.js'
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  },

  data() {
    return {
      store: store,
      movie: 'tomb raider'
    }
  },

  methods: {
    callApi() {

      axios.get(this.store.url)
        .then(response => {
          console.log(response.data);
        

        })

        .catch(err => {
          console.log(err.message);
        })
    }
  },

  mounted() {
    this.callApi();
  }
}
</script>

<template>

  <SiteHeader></SiteHeader>
  <SiteMain></SiteMain>
  <SiteFooter></SiteFooter>

</template>

<style lang="scss" scoped>

</style>
