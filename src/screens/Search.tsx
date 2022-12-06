import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Error from '../components/globals/Error'
import Loading from '../components/globals/Loading'
import Navbar from '../components/globals/Navbar'
import MovieCard from '../components/movies/MovieCard'
import useSearchMovies from '../hooks/useSearchMovies'
import { Movie, Result } from '../interfaces'
import { capitalize } from '../utils/capitalize'

const Search = () => {

 const [movies, setMovies] = useState<Result[]>()
 const [isLoading, setIsLoading] = useState(false)

 const {query} = useParams()
 
 const getMovies = async() => {
    setIsLoading(true)
    const data = await useSearchMovies(query!)
    setMovies(data.results)
    setIsLoading(false)
 }

 useEffect(() => {
    getMovies()
}, [])
 
  if(movies?.length === 0){
    return (
      <>
        <Navbar />
        <div style={{
          display: 'grid',
          height: '100vh',
          placeContent: 'center'
        }}>
        <Error error={`No results matching "${query}" were found`} />
        </div>
      </>
    )
  }

  if(isLoading) {
    return(
      <>
        <Navbar />
        <Loading />
      </>
    )
  }


  return (
    <>
        <Navbar />
        <section id="movies" data-testid="search">
            <h3
                style={{
                    fontSize: '1.6rem'
                }}
            >Results matching with: "{capitalize({str: query!})}"</h3>
            <div className='card-grid'>
          {
                  movies?.map(movie => {
                    return <MovieCard  shouldShowFavorite key={movie.id} movie={movie} />
                  })
          }
        </div>
        </section>
    </>
  )
}

export default Search