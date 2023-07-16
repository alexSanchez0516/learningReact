export const Search = ({ handleSearchMovies, handleChangeTitle, handleChangeYear, error, title, year, sortYear, sortTitle, handleSortYear, handleSortTitle }) => {
  return (
    <form className='d-flex flex-column' onSubmit={handleSearchMovies}>
      <h1>Buscador de peliculas</h1>
      <div className="d-flex flex-md-row flex-column flex-wrap justify-content-center gap-1 mb-3">
        <div className="d-flex justify-content-center align-items-center align-content-center gap-1">
          <label htmlFor="title">Título</label>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : '' }}
            type="text" onChange={handleChangeTitle}  defaultValue={title} className='form-control' name="title" id="title" placeholder='Escribe el título' />
          <input type="number" onChange={handleChangeYear}  min="1900" max="2023" className='form-control' name="year" id="year" />
        </div>
        <div className="d-flex flex-column flex-md-row flex-wrap gap-2">
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" onChange={handleSortYear} className="form-check-input" name="yearSort" id="" value={sortYear} />
              Ordenar por año
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" onChange={handleSortTitle} className="form-check-input" name="titleSort" id="" value={sortTitle} />
              Ordenar por título
            </label>
          </div>
          <button className='btn btn-primary' type="submit">Buscar</button>
        </div>

      </div>
    </form>
  )
}