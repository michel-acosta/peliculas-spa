const API_KEY = '334070c586c86797346004b3e0064805'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopular = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  return res.json()
}

export const getMovie = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  return res.json()
}

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
  return res.json()
}