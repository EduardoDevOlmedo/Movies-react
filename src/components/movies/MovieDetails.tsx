import React, { useEffect, useState } from 'react'
import { Result } from '../../interfaces'
import { releaseDate } from '../../utils/makeDate'
import { toggleFavorites } from '../../utils/toggleFavorite'
import { existsInFavorites } from '../../utils/ExistsInFavorites'
import { images } from '../../utils/imageURLS'


interface Props {
    movie: Result;
    shouldShowFavorite: boolean;

}


const MovieDetails:React.FC<Props> = ({movie, shouldShowFavorite}) => {
 
    const [isLiked, setIsLiked] = useState(existsInFavorites(movie.id))
    
    const handleClick = () => {
        toggleFavorites(movie.id)
        setIsLiked(!isLiked)
    }


    
    const release = releaseDate(movie.release_date)
    
    

    return (
    <div>
        <div className="title-date-wrapper">
            <div className='title-date'>
                <h5>
                    {movie.title.length > 40 ? `${movie.title.substring(0, 40) + "..."}` : movie.title}
                </h5>
                <p>{`${release[1]} ${release[3]}`}</p>
            </div>
            {
                shouldShowFavorite && (<div className='img-wrap'>
                <img 
                        onClick={handleClick}
                        alt='like/dislike'
                        src={ isLiked ? images.heart : images.notFavorite}
                    />
                </div>)
            }
        </div>
        <div className='overview'>
            {movie.overview ? movie.overview.substring(0, 85) : 'No  overview.'} 
            {
                movie.overview && <a
                href={`/movie/${movie.id}`}
            >...see more</a>
            }
        </div>
    </div>
  )
}

export default MovieDetails