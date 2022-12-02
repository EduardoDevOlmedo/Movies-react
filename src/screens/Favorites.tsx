import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'

import Loading from '../components/globals/Loading'
import Navbar from '../components/globals/Navbar'
import MovieCard from '../components/movies/MovieCard'
import { UseMovieById } from '../hooks/useMovieById'
import { Result } from '../interfaces'

const Favorites = () => {
 
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState<Result[]>()
  
  const getMovies = async() => {
    setIsLoading(true)
    const values = await UseMovieById()
    setMovies(values!)
    setIsLoading(false)
  }
  
  
    useEffect(() => {
      getMovies()
    }, [])

    if(isLoading){
      return (
        <>
          <Navbar />
          <Loading />
        </>
      )
    }


    if(movies?.length === 0){
      return (
        <>
          <Navbar />
          <div className='no-favorites'>
            <h3>No favorites were found</h3>
            <button  
              onClick={() => location.href = "/"}
            >Start adding</button>
          </div>
        </>
      )
    }
    

    return (
    <div>
      <Navbar />
      <section id='movies' data-testid="favorites">
        <h3>Your favorites</h3>  
      <div className='card-grid'>
        {
          movies?.map(movie => {
            return (
              <MovieCard 
              key={movie.id}
              shouldShowFavorite={false}
              movie={movie}/>
             )
          })
          }
      </div>
      </section>
    </div>
  )
}

export default Favorites