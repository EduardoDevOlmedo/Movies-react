import React, { useEffect, useState } from 'react'
import useMoviesById from '../hooks/useMovieById'
import { Result } from '../interfaces'
import { favorites } from '../utils/favorites'

const Favorites = () => {
 
    const [movieIDS, setMovieIDS] = useState<number[]>(favorites())
    const [newMovies, setNewMovies] = useState<Result[]>([])
    
    const getMovies = async() => {
      const movies = movieIDS.map(id => useMoviesById(id).then((data) => JSON.stringify(data)).then(data => setNewMovies(JSON.parse(data))))
    }


    useEffect(() => {
        getMovies()
    }, [])


    useEffect(() => {
      console.log(newMovies)
    }, [newMovies])
    

 
    return (
    <div>
        {
           
        }
    </div>
  )
}

export default Favorites