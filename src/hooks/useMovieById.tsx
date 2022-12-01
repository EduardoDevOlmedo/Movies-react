
import axios from 'axios';
import { Movie, Result } from '../interfaces';
import { sleep } from '../utils/sleep';


const useMoviesById = async(id: Number) => {

    const apiKey = import.meta.env.VITE_API_KEY;

    const params = new URLSearchParams()

    params.append('api_key', apiKey)
    // made it sleep fo


    const {data} = await axios.get<Result>(`https://api.themoviedb.org/3/movie/${id}`, {params})
    return data;
}


export default useMoviesById

