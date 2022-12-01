import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Result } from '../../interfaces'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import MovieDetails from './MovieDetails';
import {  useNavigate } from 'react-router';
import { imageUrl } from '../../utils/getImageUrl';

interface Props {
    movie: Result;
    
}

const MovieCard:React.FC<Props> = ({movie}) => {
    
    const router = useNavigate()

   

    const average = () => {
        let movieAverage;

        if(movie.vote_average === Number(movie.vote_average.toFixed(0))){
            movieAverage = movie.vote_average + ".0"
        }

        else movieAverage = movie.vote_average;

        return movieAverage
    }

    const src = imageUrl(movie.backdrop_path)


    return (
    <div>
        <div className='movie' 
        onClick={() => router(`movie/${movie.id}`)}
        style={{
            position: 'relative'
            
        }}>
            <img
                style={{
                    height: `${src.includes(".svg") ? '200px' : 'initial'}`
                }}
                src={`${src}`}
            />
            <div className='new-pos'>
                <div>
                <FontAwesomeIcon
                    icon={faStar}
                />
                </div>
                {average()}
            </div>
        </div>

        <div className='movie-details'>
            <MovieDetails
                movie={movie}
            />
        </div>
    </div>
  )
}

export default MovieCard