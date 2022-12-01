import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMovies from '../hooks/useMovies'
import {  OriginalLanguage, Result } from '../interfaces'
import { Actor } from '../interfaces/Actor'
import { FullMovie } from '../interfaces/fullMovie'
import { Suggestion } from '../interfaces/Suggestion'
import { checkMessage } from '../utils/checkMessage'

const MovieDetails = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const message = checkMessage(error, loading)

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
    console.log(movie?.title)

    // console.log(movie?.title)
    // console.log(suggestions?.results?.map(el => el.title))
    // console.log(actors.cast?.map(el => el.name))

    return (
    <div style={{color: 'white'}}>
      
     
      
    </div>
  )
}

export default MovieDetails