<script>
import { store } from '../store.js'

export default {
  name: 'SearchBox',
  data() {
    return {
      store
    }
  },

  methods: {
    submit() {
      this.$emit('filterMovies'),
      this.$emit('filterTv')
    }
  }
}


</script>

<template>
  <div class="search-box-movies">
    <!-- nel figlio aggiungo $emit per dire che andrà ascoltato - ESEMPIO - <button @click="$emit('someEvent')">click me</button> -->
    <input type="search" v-model="store.configMovie.params.query" @keyup.enter="$emit('filterMovies','filterTv')">
    <button @click="$emit('filterMovies','filterTv')">Search</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
