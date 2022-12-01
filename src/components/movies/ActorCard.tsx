import React from 'react'
import { Actor, Cast } from '../../interfaces/Actor'
import { imageUrl } from '../../utils/getImageUrl'

interface Props {
    actor: Cast
}

const ActorCard: React.FC<Props> = ({actor}) => {
  
    const src = imageUrl(actor.profile_path!)
    
    return (
    <div className='actor-cards-wrapper'>
        <div className='actor-img'>
            <img 
                src={src}
                alt={`${actor.name}'s photo`}
            />
        </div>
        <div>
            <p >
                {actor.name}
            </p>
           
        </div>
    </div>
  )
}

export default ActorCard