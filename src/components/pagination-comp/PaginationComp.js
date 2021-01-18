import React from 'react'
import styles from './PaginationComp.module.css'

export const PaginationComp = ({changeMoviesPage, movieInfo: {page: currentPage, total_pages: lastPage}}) => {
    const firstPage = 1;


    const handleButtonClick = (page) => {
        if (page >= lastPage)
            changeMoviesPage(lastPage);
        else if (page <= firstPage)
            changeMoviesPage(firstPage);
        else
            changeMoviesPage(page);
    }

    return (
        <div className={styles.paginationWrapper}>
            <button disabled={currentPage === firstPage} onClick={() => handleButtonClick(1)}>First page</button>
            <button disabled={currentPage === firstPage} onClick={() => handleButtonClick(currentPage - 1)}>Prev</button>
            <span>{currentPage} of {lastPage}</span>
            <button disabled={currentPage === lastPage} onClick={() => handleButtonClick(currentPage + 1)}>Next</button>
            <button disabled={currentPage === lastPage} onClick={() => handleButtonClick(500)}>Last page</button>
        </div>
    );
}