import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Auth/AuthContext'
import { faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Camera from "../assets/camera.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Error from '../components/globals/Error';
import { text } from '@fortawesome/fontawesome-svg-core';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [inputValues, setInputValues] = useState({
      email: '',
      password: ''
    })
    const [isError, setIsError] = useState(false)
    const [newError, setNewError] = useState("")
    let {login, error} = useContext(AuthContext)



    useEffect(() => {
      if(error?.includes("400")){
        setNewError("Credentials are incorrect")
        setIsError(true)
        setIsLoading(false)
      } 
    }, [error])
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      
      if(e.target.value.length < 1) { 
        setIsError(true)
        setNewError("Please fill all the blanks")
      } 
      
      else setIsError(false)

      
      setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value
      })
    }

    const handleLogin = () => {
          setIsLoading(true)
          setIsError(false)
          login(inputValues.email, inputValues.password)
          setTimeout(() => {
            setIsError(true)
            setIsLoading(false)
            error = "Credentials are incorrect"
          }, 5000)
    }
        
    const handleClick = () => {
      setShowPassword(!showPassword)
    }


  return (
    <>
      <section id="login" data-testid="login">
        <div className='main-wrapper'>
          <div className='img-wrapper'>
            <img  
              alt="camera-image"
              src={String(Camera)}
            />
          </div>
          {/* input */}
          <div className='input-wrapper'>
            <h3>LOGIN</h3>
            <div className='inputs'>
              <input type="email" placeholder='Email' 
                onChange={handleChange}
                name="email"
                value={inputValues.email || ""}
                autoComplete={'email'}
              />
              <div className="pass-wrapp">
                <input placeholder='Password'
                  onChange={handleChange}
                  value={inputValues.password || ""}
                  name="password"
                  style={{width: "100%"}}
                  type={showPassword ? 'text' : 'password'}
                />
                <FontAwesomeIcon
                onClick={handleClick}
                style={{
                  color: 'black',
                  left: '88%',
                  position: 'absolute',
                  top: "7px"
                }}
                icon={
                  showPassword ? faEye : faEyeSlash
                }/>
              </div>
            </div>
          </div>
          {
            isError && <Error error={newError}/>
          }
          <div className='btn-wrapper'>
            <button
              disabled={isLoading || inputValues.email.length === 0 || inputValues.password.length === 0}
              onClick={handleLogin}
            >
              {
                isLoading ? <FontAwesomeIcon className='rotate' icon={faSpinner}/> : 'Login'
              }
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login