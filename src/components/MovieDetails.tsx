import React from 'react'
import { Result } from '../interfaces'
import Heart from "../assets/heart.svg"

interface Props {
    movie: Result
}

const MovieDetails:React.FC<Props> = ({movie}) => {
 
    const releaseDate = new Date(movie.release_date).toString().substring(3, 16).split(" ")
    console.log(releaseDate)

    return (
    <div>
        <div className="title-date-wrapper">
            <div className='title-date'>
                <h5>
                    {movie.title}
                </h5>
                <p>{`${releaseDate[1]} ${releaseDate[3]}`}</p>
            </div>
            <div className='img-wrap'>
                <img 
                    alt='heart'
                    src={Heart}
                />
            </div>
        </div>
        <div className='overview'>
            {movie.overview.substring(0, 95)}
            <a>...see more</a>
        </div>
    </div>
  )
}

export default MovieDetails