

import axios, { AxiosError } from 'axios';
import { useEffect, useReducer } from 'react'
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';

export interface AuthState {
  token: string,
}

const initialState:AuthState = {
    token: localStorage.getItem("token" || [])!
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

const AuthProvider: React.FC<Props> = ({children}) => {

  const [state, dispatch] = useReducer(AuthReducer, initialState)
 

    useEffect(() => {

        if(state.token !== ''){
            dispatch({
            type: 'Auth - Load user token from Local Storage',
            payload: JSON.parse(JSON.stringify(state.token))
          })
        }
        
    }, [state])
    
  const login = async(email: string, password: string) => {
    
    try {
     const {data} = await axios.post("https://reqres.in/api/login", {
        "email": email,
        "password": password
     })

     localStorage.setItem("token", data.token)


     dispatch({
        type: 'Auth - Login',
        payload: data
     })


    } catch (error: any) {
      localStorage.setItem("token", "")
      dispatch({
        type: 'Auth - Error',
        payload: error.message
      })
    }
  }

  const logout = () => {
    dispatch({
      type: 'Auth - Logout'
    })
    localStorage.setItem("token", "")
  }



  return (
    <AuthContext.Provider
        value={{...state, login, logout}}
    >
        {
            children
        }
    </AuthContext.Provider>   
 )
}
export default AuthProvider



