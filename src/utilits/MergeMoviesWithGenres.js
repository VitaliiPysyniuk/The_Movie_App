export const MergeMoviesWithGenres = ({results: moviesWithoutGenres, page, total_pages}, genres) => {

    const movies = moviesWithoutGenres.map((movie) => {
            const movieGenres = movie.genre_ids.map((id) => genres.find(({id : genreId}) => genreId === id));
            return {
                ...movie,
                movieGenres
            };
        });
     return {
         movies,
         page,
         total_pages
     };
}