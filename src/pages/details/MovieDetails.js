import React, {useState, useEffect} from 'react'
import {LoadingIndicator} from "../../components";
import {useParams} from 'react-router-dom';
import {moviesServices} from "../../sevices";
import {DetailsCard} from "../../components";

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {id} = useParams();

    const fetchMovie = async () => {
        try {
            setIsLoading(true);
            const data = await moviesServices.getMovieInfo(id);
            data.poster_path = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
            setMovie(data);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [])

    if(isLoading || isLoading === null)
        return <LoadingIndicator/>

    return (
        <div>
           <DetailsCard movie={movie}/>
        </div>
    );
};
