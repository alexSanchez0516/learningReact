import { MOVIES_ENDPOINT } from "../constants"

export const searchFechDataMovies = async (title, year, page) => {


  if (title === '') return

  try {
    let url = `${MOVIES_ENDPOINT}&s=${title}`
    if (year) {
      url += `&y=${year}`
    }
    url += `&page=${page}`

    const response = await fetch(url)
    const json = await response.json()
    const movies = json.Search
    const totalResults = json.totalResults

    return {movies: movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    })), totalResults}

  } catch (error) {
    console.log('errorcath : ', error)
    throw new Error('error searching movies', error)
  }
}