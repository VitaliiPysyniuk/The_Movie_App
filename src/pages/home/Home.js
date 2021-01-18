import React, {useState, useEffect} from 'react'
import {LoadingIndicator, PaginationComp} from "../../components";
import {genresServices, moviesServices} from "../../sevices";
import {MoviesList} from "../../components";
import {useHistory} from 'react-router-dom';
import {MergeMoviesWithGenres} from "../../utilits";


export const Home = () => {
    const [moviesList, setMoviesList] = useState({});
    const [genresList, setGenresList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const history = useHistory();

    const fetchMovies = async (params) => {
        try {
            return await moviesServices.getMovies(params);
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
        const [moviesData, genres] = await Promise.all(fetches);
        setMoviesList(MergeMoviesWithGenres(moviesData, genres));
        setIsLoading(false);
        setGenresList(genres);
    };

    useEffect(() => {
        fetchMoviesWithGenres();
    }, [])

    const onMovieCardClick = (id) => {
        history.push(`/movie/${id}`);
    }

    const changeMoviesPage = async (page) => {
        setIsLoading(true);
        let movies = await fetchMovies({page});
        setMoviesList(MergeMoviesWithGenres(movies, genresList));
        setIsLoading(false)
    };


    return (
        <div>
            {isLoading || isLoading === null ? <LoadingIndicator/>
                : <div>
                    <MoviesList moviesList={moviesList} onMovieCardClick={onMovieCardClick}/>
                    <PaginationComp changeMoviesPage={changeMoviesPage}
                                    movieInfo={{page: moviesList.page,
                                                total_pages:
                                                moviesList.total_pages}
                                    }/>
                </div>}
        </div>
    )
}