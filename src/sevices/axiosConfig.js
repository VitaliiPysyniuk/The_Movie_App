import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjhlYWEwN2YwYmVkYTEwMjcyNTRiNTU2MDgyMzFkNCIsInN1YiI6IjVmZmUzMGU2OTgyNGM4MDA0MGZiOTdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A33KSQFQz8vN4nSZn-2mp2_YnReZCNXrloy0levFF3s'
    }
});