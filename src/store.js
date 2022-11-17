import { reactive } from 'vue'

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/movie',
   /*  result: null,
    data: null,
    loading: true, */
    api_key: 'a3a7406bba95703d01d22d9638cfdcfe',
    query: ''

})
