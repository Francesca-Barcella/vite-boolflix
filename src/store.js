import { reactive } from 'vue'

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/movie?api_key=a3a7406bba95703d01d22d9638cfdcfe',
    result: null,
    data: null,
    loading: true,
    movie: ''

})
