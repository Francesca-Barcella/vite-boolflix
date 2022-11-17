import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    config: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: 'a3a7406bba95703d01d22d9638cfdcfe',
            query: ''
        }
    },

    results: [],
    error: false,

    callApi() {
        axios(store.config)
            .then(response => {
                console.log(response.data)
                store.results = response.data.results;
            })

            .catch(err => {
                console.log(err.message)
                store.error = err.message
            })

    }
})
