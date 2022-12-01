import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Result } from '../interfaces'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import MovieDetails from './MovieDetails';
import { useNavigate } from 'react-router';

interface Props {
    movie: Result
}

const MovieCard:React.FC<Props> = ({movie}) => {
    
    const router = useNavigate()

    const imageUrl = () => {
        let url = ''

        url
        url = movie.backdrop_path ?  `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
        return url
    }

    const average = () => {
        let movieAverage;

        if(movie.vote_average === Number(movie.vote_average.toFixed(0))){
            movieAverage = movie.vote_average + ".0"
        }

        else movieAverage = movie.vote_average;

        return movieAverage
    }

    const src = imageUrl()
    console.log(src.includes(".svg"))


    return (
    <div className='movie' onClick={() => router(`movie/${movie.id}`)}>
        <div style={{
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