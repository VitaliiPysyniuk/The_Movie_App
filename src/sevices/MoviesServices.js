import {AXIOS} from "./axiosConfig";

class MoviesServices {
    async getMovies(params) {
        const { data } = await AXIOS.get('/discover/movie', {params: params});
        return data;
    }

    async getMovieInfo(movieId) {
        const { data } = await AXIOS.get(`/movie/${movieId}`);
        return data;
    }
}

export const moviesServices = new MoviesServices();

