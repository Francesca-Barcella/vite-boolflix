import { reactive } from 'vue'

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/movie?api_key=a3a7406bba95703d01d22d9638cfdcfe&language=en-US&query=Matrix&page=1&include_adult=false',
    result: null,
    data: null,
    loading: true

})