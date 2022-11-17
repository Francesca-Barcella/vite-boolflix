<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
  name: 'SearchBox',
  data() {
    return {
      store
    }
  },
  methods: {
    callApi() {
      axios(store.config)
        .then(response => {
          console.log(response.data)
          this.store.results = response.data
        })

        .catch(err => {
          console.log(err.message)
          this.store.error = err.message
        })
    }
  }
}

</script>

<template>
    <div class="search-box">
      <input type="search" v-model="store.config.params.query" @keyup.enter="callApi">
      <button @click="callApi" >Search</button>
    </div>

    <!-- faccio il v-for qui per stampare e poi lo sposterò nel componente giusto -->
    
    <ul v-for="movie in store.results.results">
      <li>{{movie.title}}</li>
    </ul>

</template>

<style lang="scss" scoped>

</style>
