import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
    error: string;
}

const Error: React.FC<Props> = ({error}) => {
  return (
    <div className='error-wrapper'>
        <FontAwesomeIcon icon={faExclamationCircle}/>
        {
            <p>{error}</p>
        }
    </div>
 )
}

export default Error