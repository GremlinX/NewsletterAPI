import "./Paginator.css"

export const Paginator = ({
  postsPerPage,
  length,
  handlePagination,
  currentPage,
}) => {
  let paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <app-paginatior>
      <div className="paginator_container">
      <div className="paginator_buttonGroup">
        {paginationNumbers.map((pageNumber) => (
          
            <button
              key={pageNumber}
              className={"btn-primary" + (currentPage === pageNumber ? " active" : "")}
              onClick={() => handlePagination(pageNumber)}
            >
              {pageNumber}
            </button>
        ))}
        </div>
      </div>
    </app-paginatior>
  );
};

/*
 <app-paginator>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button key={page} onClick={() => handlePageChange(page)}>
              {page}
            </button>
          )
        )}
      </div>
    </app-paginator>
  */
