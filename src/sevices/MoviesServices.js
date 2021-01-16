import {AXIOS} from "./axiosConfig";

class MoviesServices {
    async getMovies(filter = '') {
        const { data } = await AXIOS.get('/discover/movie' + filter);
        return data;
    }

    async getMovieInfo(movieId) {
        const { data } = await AXIOS.get(`/movie/${movieId}`);
        return data;
    }
}

export const moviesServices = new MoviesServices();

