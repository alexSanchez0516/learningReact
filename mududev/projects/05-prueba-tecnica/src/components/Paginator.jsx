export const Paginator = ({page, totalPages, setPage}) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item ">
          <button className={`page-link pointer ${totalPages == 1 || page == 1 ? 'disabled' : ''}`} onClick={(event) => setPage(page - 1)}>Previous</button>
        </li>
        <li className={`page-item ${page == 1 ? 'active' : ''}`} id="one"><a className="page-link" onClick={(event) => setPage(1)}>1</a></li>
        {
          (page > 1) && <li className="page-item active" id="current"><a className="page-link">{(page)}</a></li>
        }

        {
          (page < totalPages-1) && <li className="page-item" id="+1"><a className="page-link">{(page + 1)}</a></li>
        }
        { (totalPages > 1 && page < totalPages) && <li className="page-item"><a className="page-link" id="totalPages" onClick={(event) => setPage(totalPages)}>{totalPages}</a></li> }

        <li className="page-item">
          <button className={`page-link pointer ${totalPages == 1 || page == totalPages ? 'disabled' : ''}`}  id="next" onClick={(event) => setPage(page + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  )
}