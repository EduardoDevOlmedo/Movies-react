import React, { useState } from 'react'
import { Result } from '../../interfaces'
import NotFavorite from "../../assets/NotFavorite.svg"
import Heart from "../../assets/Heart.svg"
import { releaseDate } from '../../utils/makeDate'


interface Props {
    movie: Result;
}

const MovieDetails:React.FC<Props> = ({movie}) => {
 
    const [isLiked, setIsLiked] = useState(false)

    const handleClick = () => {
        setIsLiked(!isLiked)
    }
    
    const release = releaseDate(movie.release_date)
    


    return (
    <div>
        <div className="title-date-wrapper">
            <div className='title-date'>
                <h5>
                    {movie.title.substring(0, 20)}
                </h5>
                <p>{`${release[1]} ${release[3]}`}</p>
            </div>
            <div className='img-wrap'>
                <img 
                    onClick={handleClick}
                    alt='like/dislike'
                    src={isLiked ? Heart : NotFavorite}
                />
            </div>
        </div>
        <div className='overview'>
            {movie.overview.substring(0, 95)}
            <a
                href={`movie/${movie.id}`}
            >...see more</a>
        </div>
    </div>
  )
}

export default MovieDetails