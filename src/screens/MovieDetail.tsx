import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/globals/Loading'
import Navbar from '../components/globals/Navbar'
import MovieCard from '../components/movies/MovieCard'
import ScreenDetails from '../components/movies/ScreenDetails'
import useMovies from '../hooks/useMovies'
import {  OriginalLanguage, Result } from '../interfaces'
import { Actor } from '../interfaces/Actor'
import { FullMovie } from '../interfaces/fullMovie'
import { Suggestion } from '../interfaces/Suggestion'
import { checkMessage } from '../utils/checkMessage'
import { releaseDate } from '../utils/makeDate'

const MovieDetails = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    

    const {id} = useParams()

    const [fullMovie, setFullMovie] = useState<FullMovie>({
      movie: {
        adult: false,    
        backdrop_path: "",
        genre_ids: [],
        id: 242,
        original_language: OriginalLanguage.En,
        original_title: "",
        overview: "",
        popularity: 3,
        poster_path: "",
        release_date: new Date(),
        title: "",
        video: false,
        vote_average: 3.5,
        vote_count: 10,
      },
      actors: {},
      suggestions: {}
    })

    
    const fetchValues = async() => {
      setLoading(true)      
      // we set the cath on the first fetch call so It doesn't try to fetch more data.
      const movie = await useMovies(id?.toString()!).catch(error => setError(error.messsage)) as Result
      const actors = await useMovies(`${id}/credits`) as Actor
      const suggestions = await useMovies(`${id}/similar`) as Suggestion
      // we wait for all the promises to resolve for better ux.
      Promise.all([movie, actors, suggestions])
      
      //shorthand property operator => movie = movie, movie: movie
      setFullMovie({
        movie,actors,suggestions
      })
      
      setLoading(false)
    }
    
    useEffect(() => {
      fetchValues()
    }, [])

 
    const {movie, actors, suggestions} = fullMovie

    const imageUrl = () => {
      let url = ''

      url
      url = movie?.poster_path ?  `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
      return url
    }


    return (
    <>
      <Navbar />
     {
      loading ?  <Loading 
      /> : (
        <section id="movie-detail">
      <div className='movie-detail-wrapper'>
        <div
          className='movie-poster'
          style={{margin: '0 auto'}}
        >
          <img src={imageUrl()} />
        </div>
        <div className='detail-wrapper'>
          <ScreenDetails movie={movie!} actors={actors}/>
        </div>
      </div>
        <section id="movies">
          <h4>Recommended:</h4>

      <div className='card-grid'>
          {
           suggestions.results?.length! > 0 ? 
           suggestions?.results?.slice(0,6).map(suggestion => {
              return (
                <MovieCard 
                shouldShowFavorite={true}
                movie={suggestion}
                />
                )
              }) : (
                <div>
                  No suggestions were found. 😓
                </div>
              )
            } 
            </div>
            </section>
         </section>
      ) 
     }
    </>
  )
}

export default MovieDetails