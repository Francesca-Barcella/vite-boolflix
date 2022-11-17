import { reactive } from 'vue'

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
    error: false
})
