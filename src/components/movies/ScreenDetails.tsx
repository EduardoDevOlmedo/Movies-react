import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { releaseDate } from '../../utils/makeDate'
import { Result } from '../../interfaces'
import { Actor } from '../../interfaces/Actor'
import ActorCard from './ActorCard'
import { toggleFavorites } from '../../utils/toggleFavorite'
import { existsInFavorites } from '../../utils/ExistsInFavorites'



interface Props {
    movie: Result
    actors: Actor
}

const ScreenDetails: React.FC<Props> = ({movie, actors}) => {
    const release = releaseDate(movie?.release_date!)

    const [isLiked, setIsLiked] = useState(existsInFavorites(movie.id))


    const handleClick = () => {
        toggleFavorites(movie.id)
        setIsLiked(!isLiked)
    }

    return (
        <>
         <h3>
            {movie?.title}
          </h3>
          <p
          style={{
            color: '#0052FF'
          }}
          >
            {`${release[1]} ${release[3]}`}
          </p>
          <div className='vote-like'>
            <div className='votes'>
            <FontAwesomeIcon
                      icon={faStar}
                      />
            {movie?.vote_average.toFixed(1)}
            </div>
            <div className='heart-wrapper'>
              <img 
                    onClick={handleClick}
                    alt='like/dislike'
                    src={isLiked ? "https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/images%2Fheart.svg?alt=media&token=dcd12bfb-6ae0-42ad-9b62-0076205ccdf8" : "https://firebasestorage.googleapis.com/v0/b/socks-images.appspot.com/o/images%2FNotFavorite.svg?alt=media&token=8dafd918-e2db-4064-a0aa-d0685b3c5849"}
                    />
            </div>
          </div>
          <p
            style={{
                fontWeight: 'bold'
            }}
          >
            Overview:
          </p>
          <p
            style={{
              color: "#303030",
              fontWeight: "normal"
            }}
          >
            {movie.overview ? movie.overview : 'No overview.'}
          </p>
          <div className='actors-grid'>
            {actors?.cast?.slice(0,6).map(actor => {
              return (
                <ActorCard 
                  key={actor.id}
                  actor={actor}
                /> 
              )
            })}
          </div>
        </>
  )
}

export default ScreenDetails