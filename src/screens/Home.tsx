import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ErrorMain from '../components/ErrorMain'
import Loading from '../components/Loading'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/Auth/AuthContext'
import useMovies from '../hooks/useMovies'
import { Movie, Result } from '../interfaces'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  const [loading, setLoading] = useState(false)
  const {logout} = useContext(AuthContext)
  const router = useNavigate()

  const [movies, setMovies] = useState<Result[]>()
  const [error, setError] = useState(false)

  const [page, setPage] = useState(1)

  const getMovies = async() => {
    setLoading(true)
    const popularMovies = await useMovies("/popular", page).catch((err) => {
      setError(err)
      setLoading(false)
    }) as Movie
    setMovies(popularMovies.results)
    setLoading(false)
  }

  useEffect(() => {
    
    getMovies()
    
  }, [page])

  const handleClick = () => {
    logout()
  }
  
  if(error){
    return (
      <ErrorMain error='An error has occurred.'/>
    )
  }


  return (
    <div>
      <Navbar />
      <section id='movies'>
        <div className='title-wrapper' style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <h3>Populars</h3>
          <button onClick={handleClick}>
            <FontAwesomeIcon 
              className='icon'
              title='Logout'
              icon={faArrowRightFromBracket}
            />
          </button>
        </div>
        {
          loading &&  <Loading /> 
        }
        <div className='card-grid'>
          {
            !loading && (
              (
                movies?.map(movie => {
                  return <MovieCard key={movie.id} movie={movie} />
                })
              )
            )
          }
        </div>
      <div className='buttonn-wrapper'>
        <button onClick={() => setPage(page <= 1 ? 1 : page-1)}>Previous</button>
        <p>{page}</p>
        <button onClick={() => setPage(page+1)}>Next</button>
      </div>
      </section>
    </div>
  )
}

export default Home