import axios from 'axios';
import React from 'react'
import { Movie } from '../interfaces';
import { sleep } from '../utils/sleep';

const useSearchMovies = async(query: string) => {
    const apiKey = process.env.VITE_API_KEY;
    const params = new URLSearchParams()
    params.append('api_key', apiKey!)
    params.append("query", query!)

    const {data} = await axios.get<Movie>(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
    )


    return data
}

export default useSearchMovies