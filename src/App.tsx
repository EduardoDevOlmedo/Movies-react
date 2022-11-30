import './App.css'
import {  BrowserRouter, Navigate, Route, RouterProvider, Routes, useNavigate } from 'react-router-dom'
import AuthProvider from './context/Auth/AuthProvider'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/Auth/AuthContext'
import Home from './screens/Home'
import Login from './screens/Login'


function CheckAuth(){

  //checks wether the state contains a token or not
  // if it doesn't you are redirected to the login screen.

  let state = useContext(AuthContext)
  return (
    <>
      {
        state.token !== ""  ? <Home /> : <Login />
      }
    </>
  )
}


function App(){


  return(
    <AuthProvider>
      <BrowserRouter>
          <Routes>
              <Route 
                path='/'
                element={
                    <CheckAuth />
                }
              />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )

}

export default App
