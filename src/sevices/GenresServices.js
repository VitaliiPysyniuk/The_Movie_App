import {AXIOS} from "./axiosConfig";

class GenresServices {
    getGenres = async () => {
        const {data} = await AXIOS.get('/genre/movie/list');
        return data;
    };
};

export const genresServices = new GenresServices();