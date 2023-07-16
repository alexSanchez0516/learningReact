import { useState, useMemo, useEffect, useCallback } from 'react'
import { useDebounce } from '@uidotdev/usehooks';
import { searchFechDataMovies } from '../services/searchFechDataMovies'

export function useMovie({ title, year, page = 1, sortTitle, sortYear }) {

  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState()
  const [loading, setLoading] = useState(false)
  
  const debouncedSearchTerm = useDebounce(title, 1500)

  const searchMovies = useCallback(async () => {
    try {
      setLoading(true)
      const data = await searchFechDataMovies(title, year, page)
      if (data.movies) {
        setMovies(data.movies)
        setTotalPages(Math.ceil((data.totalResults) / 10))
      }
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }, [title, year, page])


  // const searchMovies = useMemo(() => {  
  //   console.log('search with memo')
  //   return async () => {
  //     try {
  //       setLoading(true)
  //       const data = await searchFechDataMovies(title, year, page)
  //       if (data.movies) {
  //         setMovies(data.movies)
  //         setTotalPages(Math.ceil((data.totalResults) / 10))
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     } finally {
  //       setLoading (false)
  //     }
  //   }
  // }, [title, year, page])



  let sortedMovies = useMemo(() => {
    return sortTitle ?
      [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sortTitle, movies])

  sortedMovies = sortYear ?
    [...sortedMovies].sort((a, b) => a.year < b.year) : sortedMovies

  return { movies: sortedMovies, searchMovies, loading, totalPages }
}