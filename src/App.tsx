import './App.css'
import {  BrowserRouter, Route,  Routes} from 'react-router-dom'
import AuthProvider from './context/Auth/AuthProvider'
import { useContext} from 'react'
import { AuthContext } from './context/Auth/AuthContext'
import Login from './screens/Login'
import Home from './screens/Home'
import MovieDetail from './screens/MovieDetail'
import PageProvider from './context/pageContext.ts/PageProvider'
import Search from './screens/Search'
import Favorites from './screens/Favorites'
import NotFound from './screens/NotFound'


interface Props {
  children: JSX.Element[] | JSX.Element
}

function CheckAuth({children}: Props){

  //checks wether the state contains a token or not
  // if it doesn't you are redirected to the login screen.

  let {token} = useContext(AuthContext)
  // the validation of the token should be done on the backend
  // on a real app (fullstack), this should not be made
  return (
    <>
      {
        token !== ""  ? children : <Login />
      }
    </>
  )
}


function App(){

  return(
    <AuthProvider>
      <PageProvider>
      <BrowserRouter>
          <Routes>
              <Route 
                path='/'
                element={
                  <CheckAuth>
                    <Home />
                  </CheckAuth>
                }
                />
                <Route 
                path='movie/:id'
                element={
                  <CheckAuth>
                    <MovieDetail />
                  </CheckAuth>
                }
                />
                <Route 
                path='search/:query'
                element={
                  <CheckAuth>
                    <Search />
                  </CheckAuth>
                }
                />
                <Route 
                path='/favorites'
                element={
                  <CheckAuth>
                    <Favorites />
                  </CheckAuth>
                }
                />
                <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
      </PageProvider>
    </AuthProvider>
  )

}

export default App
