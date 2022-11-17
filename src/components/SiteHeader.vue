<script>
import { store } from '../store.js'
import axios from 'axios'
import SearchBox from './SearchBox.vue'

export default {
  name: 'SiteHeader',
  components: {
    SearchBox
  },
  data(){
    return {
      store
    }
  },
  methods: {
    callApi() {
      axios(store.config)
        .then(response => {
          console.log(response.data)
          this.store.results = response.data.results;
        })

        .catch(err => {
          console.log(err.message)
          this.store.error = err.message
        })
    },
    /* aggiungo la funzione di ascolto al metodo - ESEMPIO:
    export default {
      methods: {
        submit() {
          this.$emit('someEvent')
        }
      }
    } 
     */
    submit() {
      this.$emit('filterMovies')
    }
  }
}

</script>

<template>
  <header>
    <h1>boolflix HEADER</h1>
    <!-- nel genitore devo ascoltare - ESEMPIO <MyComponent @some-event="callback"  === nome evento il primo e nome della chimata ajax il secondo/> -->
    <SearchBox @filterMovies="callApi"/>
  </header>
</template>

<style lang="scss" scoped>
header{
  background-color: lightsteelblue;
}
</style>
