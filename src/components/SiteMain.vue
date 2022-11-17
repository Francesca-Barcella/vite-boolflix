<script>
import { store } from '../store.js'

export default {
  name: 'SiteMain',
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <main>
    <h1>boolflix MAIN</h1>
    <!-- faccio il v-for qui per stampare e poi lo sposterò nel componente giusto -->
    <ul>
      <li v-for="movie in store.results">
        {{ movie.title }}
        {{ movie.original_title }}
        {{ movie.original_original_language }}
        {{ movie.vote_average }}
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: lightcoral;
}
</style>
