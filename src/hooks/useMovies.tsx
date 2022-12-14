import axios from 'axios';
import { Movie, Result } from '../interfaces';
import { sleep } from '../utils/sleep';


export const useMovies = async(query: string | Number, page?: Number) => {

    page ? page : page = 1
    const apiKey = process.env.VITE_API_KEY;

    const params = new URLSearchParams()

    params.append('api_key', apiKey!)
    params.append("page", page?.toString()!)
    // made it sleep fo
    const {data} = await axios.get<Movie>(`https://api.themoviedb.org/3/movie/${query}`, {params})

    
    return data;
}



