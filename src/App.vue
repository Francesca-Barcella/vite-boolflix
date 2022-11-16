<script >
import axios from 'axios'
import { store } from './store.js'

export default{
  name:'App',
  data (){
    return{
      store
    }
  },

  methods:{
    callApi(){

      axios.get(url)
      .then(response => {
        console.log(response.data);
      })

      .catch(err => {
        console.log(err.message);
      })
    }
  }

}
</script>

<template>

</template>

<style lang="scss" scoped>
</style>
