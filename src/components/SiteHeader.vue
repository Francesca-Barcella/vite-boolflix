<script>
import { store } from '../store.js'
import SearchBox from './SearchBox.vue'

export default {
  name: 'SiteHeader',
  components: {
    SearchBox
  },
  data() {
    return {
      store
    }
  },

}

</script>

<template>
  <header>
    <h1>boolflix HEADER</h1>
    <!-- nel genitore devo ascoltare - ESEMPIO <MyComponent @some-event="callback"  === nome evento il primo e nome della chimata ajax il secondo/> -->
    <SearchBox @filterMovies="store.callApi" />
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: lightsteelblue;
}
</style>
