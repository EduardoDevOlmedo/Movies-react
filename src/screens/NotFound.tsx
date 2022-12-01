import React from 'react'
import { useNavigate } from 'react-router'
import Wheel from "../assets/wheel.svg"


const NotFound = () => {
  
  const router = useNavigate()
  
    return (
    <section id='notFound'>
        <div className='font-types'>
            <h2>NOT FOUND</h2>
            <div className='error-found'>
                <p>4</p>
                <img
                    src={Wheel}
                />
                <p>4</p>
            </div>
            <button
                onClick={() => router("/")}
            >Back to home</button>
        </div>
    </section>
  )
}

export default NotFound