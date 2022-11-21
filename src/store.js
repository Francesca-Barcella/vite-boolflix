import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    //section movies
    configMovie: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: 'a3a7406bba95703d01d22d9638cfdcfe',
            query: ''
        }
    },

    //section tv
    configTv: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/tv',
        params: {
            api_key: 'a3a7406bba95703d01d22d9638cfdcfe',
            query: ''
        }
    },

    resultsMovie: [],
    resultsTv: [],

    error: false,

    callApi() {
        //section movies
        axios(store.configMovie)
            .then(response => {
                console.log(response.data)
                store.resultsMovie = response.data.results;
            })

            .catch(err => {
                console.log(err.message)
                store.error = err.message
            })

        //section tv
        axios(store.configTv)
            .then(response => {
                console.log(response.data)
                store.resultsTv = response.data.results;
            })

            .catch(err => {
                console.log(err.message)
                store.error = err.message
            })

    }
})
