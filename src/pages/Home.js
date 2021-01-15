import React, {useState, useEffect} from 'react'
import {LoadingIndicator} from "../components";
import {moviesServices} from "../sevices";
import {MoviesList} from "../components";


export const Home = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const movies = await moviesServices.getMovies().then(({results}) => results);
            setMoviesList(movies);
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
            fetchData();
    }, [])

    return (
        <div>
            <p>{isLoading || isLoading === null}</p>
            {isLoading || isLoading === null ? <LoadingIndicator/>: <MoviesList movies={moviesList} />}

        </div>
    )
}