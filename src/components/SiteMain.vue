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


      <ul>
        <li v-for="movie in store.results">
          <span><strong>Titolo:</strong>{{ movie.title }}</span>
          <span><strong> Titolo originale:</strong>{{ movie.original_title }}</span>
          <!-- 
            immaggini bandiere
            v-if e vi-else per stamp diversi se combaciano o no
          -->
          <span v-if="movie.original_language === 'en'"><strong> Lingua: </strong><img src="../assets/img/uk.png" alt=""></span>
          <span v-else-if="movie.original_language === 'it'"><strong> Lingua: </strong><img src="../assets/img/italy.png" alt=""></span>
          <span v-else-if="movie.original_language === 'es'"><strong> Lingua: </strong><img src="../assets/img/spain.png" alt=""></span>
          <span v-else><strong> Lingua: </strong> {{ movie.original_language }}</span>
          <span><strong> Voto: </strong> {{ movie.vote_average }}</span>
        </li>
      </ul>

      
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: lightcoral;
  img{
    width: 15px;
  }
}
</style>
