import React from "react";
import {MovieCard} from "../movie-card/MovieCard";

export const MoviesList = ({movies}) => {
    return (
      <div>
          {movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
  )
}

