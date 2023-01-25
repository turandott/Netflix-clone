const API_KEY=process.env.NEXT_PUBLIC_API_KEY
const BASE_URL='https://imdb-api.com/en/API'

const requests={
    fetchTrending: `${BASE_URL}/Top250Movies/${API_KEY}`
}
export default requests