<script>
import { store } from '../store.js'

export default {
  name: 'SearchBox',
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="search-box">
    <!-- nel figlio aggiungo $emit per dire che andrà ascoltato - ESEMPIO - <button @click="$emit('someEvent')">click me</button> -->
    <input type="search" v-model="store.config.params.query" @keyup.enter="$emit('filterMovies')">
    <button @click="$emit('filterMovies')">Search</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
