import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { AuthContext } from '../context/Auth/AuthContext'

const Login = () => {

    const {login} = useContext(AuthContext)

    const handleLogin = () => {
        login("eve.holt@reqres.in", "cityslicka")
    }


  return (
    <button onClick={handleLogin}>LOGIN</button>
  )
}

export default Login