import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
  return (
    <div className='loading-wrapper'>
        <FontAwesomeIcon 
        className='rotate' icon={faSpinner}
        />
    </div>
 )
}

export default Loading