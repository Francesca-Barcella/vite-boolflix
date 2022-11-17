<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
  name: 'SiteHeader',
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
        })

        .catch(err => {
          console.log(err.message)
        })
    }
  }
}

</script>

<template>
  <header>
    <h1>boolflix HEADER</h1>
    <div class="search-box">
      <input type="search" v-model="store.config.params.query" @keyup.enter="callApi">
      <button @click="callApi" >Search</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>
