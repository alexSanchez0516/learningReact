import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { Search } from './components/Search'
import { useMovie } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Paginator } from './components/Paginator'
import { Loading } from './components/Loading'

function App() {

  const [ sortYear, setYearSort ] = useState(false)
  const [ sortTitle, setTitleSort ] = useState(false)
  const [ page, setPage ] = useState(1)
  const { title, year, error, setTitle, setYear } = useSearch() // Devolvemos title y year juntos a sus seter y también el primer error de validation
  const { movies, searchMovies, loading, totalPages } = useMovie({ title, year, page, sortTitle, sortYear });


  useEffect(() => {
    searchMovies()
  }, [title, year, page])

  const handleSearchMovies = (event) => {

    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    const newYear = fields.year
    const newTitle = fields.title

    if (!newTitle) {
      return
    }
    if (newTitle == title && newYear == year) return

    setYear(newYear)
    setTitle(newTitle)
    setPage(1)
  }

  const handleChangeTitle = (event) => {
    const newTitle = event.target.value;
    if (newTitle.startsWith(' ')) return
    setTitle(newTitle)
  }

  const handleChangeYear = (event) => {
    setYear(event.target.value)
  }

  const handleSortYear = () => {
    setYearSort(!sortYear)
  }

  const handleSortTitle= () => {
    setTitleSort(!sortTitle)
  }

  return (
    <div className='page'>
      <header>
        <Search
          handleSearchMovies={handleSearchMovies}
          handleChangeTitle={handleChangeTitle}
          handleChangeYear={handleChangeYear}
          error={error}
          title={title}
          year={year}
          sortYear={sortYear}
          sortTitle={sortTitle}
          handleSortYear={handleSortYear}
          handleSortTitle={handleSortTitle} />

        <Paginator page={page} totalPages={totalPages} setPage={setPage} />
      </header>
      <main className='d-flex flex-column align-items-center justify-content-center'>
        <div>
          {
            error && <span className='text-danger'>{error}</span>
          }
        </div>
        <div className='row justify-content-center m-2 w-100'>
          {
            loading &&
            <Loading/>
          }
          <div className='movies'>
            <Movies movies={movies} />
          </div>
        </div>
      </main>
      <footer>
        <Paginator page={page} totalPages={totalPages} setPage={setPage} />
      </footer>
    </div>
  )
}

export default App