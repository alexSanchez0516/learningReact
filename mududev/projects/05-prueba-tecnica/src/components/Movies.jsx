export const Movies = ({ movies }) => {
  return movies.map(movie => {
    const { title, year, poster, id } = movie
    return (
      <div className='movie p-3 m-2 shadow rounded cardSpe' key={id}>
        <div className="d-flex justify-content-evenly align-items-center align-content-center">
          <h6 className="small">{title}</h6>
          <strong className='mx-2'>{year}</strong>
        </div>
        <picture>
          <img className='img-fluid' src={poster} alt="picture photo movie" />
        </picture>
      </div>
    )
  })
}