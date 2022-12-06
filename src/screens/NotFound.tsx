import React from 'react'
import Wheel from "../assets/wheel.svg"


const NotFound = () => {
  
  
    return (
    <section id='notFound' data-testid="error">
        <div className='font-types'>
            <h2>NOT FOUND</h2>
            <div className='error-found'>
                <p>4</p>
                <img
                    src={String(Wheel)}
                />
                <p>4</p>
            </div>
            <button
                onClick={() => location.href = "/"}
            >Back to home</button>
        </div>
    </section>
  )
}

export default NotFound