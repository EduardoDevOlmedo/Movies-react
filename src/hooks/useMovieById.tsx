
import axios from 'axios';

import { Result } from '../interfaces';
import { favorites } from '../utils/favorites';
import { sleep } from '../utils/sleep';

export interface Response {
    data: Result;
}

export const  UseMovieById = async() => {

    const movieIDS = favorites();
    const apiKey = process.env.VITE_API_KEY;

    const params = new URLSearchParams()

    params.append('api_key', apiKey!)

    await sleep(1500)
    const res = await Promise.all(
        movieIDS.map((id: number) => {
          return axios.get<Result>(`https://api.themoviedb.org/3/movie/${id}`, {params}).then((response) => response.data)
        })
      );


      return res
}



