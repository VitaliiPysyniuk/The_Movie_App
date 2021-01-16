import React, {useState, useEffect} from 'react'
import {LoadingIndicator} from "../../components";
import {genresServices, moviesServices} from "../../sevices";
import {MoviesList} from "../../components";
import {useHistory} from 'react-router-dom';


export const Home = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const history = useHistory();

    const fetchMovies = async () => {
        try {
            const movies = await moviesServices.getMovies('/?page=363').then(({results}) => results);
            return movies;
        } catch (e) {
            console.error(e)
        }
    }

    const fetchGenres = async () => {
        try {
            const genres = await genresServices.getGenres().then(({genres}) => genres);
            return genres;
        } catch (e) {
            console.error(e);
        }

    };

    const fetchMoviesWithGenres = async () => {
        const fetches = [fetchMovies(), fetchGenres()];
        setIsLoading(true);
        const [movies, allGenres] = await Promise.all(fetches);
        const moviesWithGenres = movies.map((movie) => {
            const genres = movie.genre_ids.map((id) => allGenres.find(({id : genreId}) => genreId === id));
            return {
                ...movie,
                genres
            };
        });
        setIsLoading(false);
        setMoviesList(moviesWithGenres);
    };

    useEffect(() => {
        fetchMoviesWithGenres();
    }, [])

    const onMovieCardClick = (id) => {
        history.push(`/movie/${id}`);
    }

    return (
        <div>
            {// todo no movies loaded error) //
            }
            {isLoading || isLoading === null ? <LoadingIndicator/>: <MoviesList movies={moviesList} onMovieCardClick={onMovieCardClick}/>}
        </div>
    )
}