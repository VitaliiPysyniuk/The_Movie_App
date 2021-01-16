import React from "react";
import {MovieCard} from "../movie-card/MovieCard";
import styles from './MoviesList.module.css'

export const MoviesList = ({movies, onMovieCardClick}) => {
    return (
      <div className={styles.flewCardsWrapper}>
          {movies.map((movie) => {
              return (
                  <div className={styles.cardWrapper + ' ' + styles.cardWrapperStyling } key={'wrapper_' + movie.id}
                  onClick={() => onMovieCardClick(movie.id)}>
                      <MovieCard movie={movie} key={movie.id}/>
                  </div>
              );
          })}
      </div>
  )
}

