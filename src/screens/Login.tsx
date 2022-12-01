import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Auth/AuthContext'
import { faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Camera from "../assets/camera.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Error from '../components/Error';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [inputValues, setInputValues] = useState({
      email: '',
      password: ''
    })
    const [isError, setIsError] = useState(false)
    const [newError, setNewError] = useState("")
    const {login, error} = useContext(AuthContext)



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
    }
        
    const handleClick = () => {
      setShowPassword(!showPassword)
    }


  return (
    <>
      <section id="login">
        <div className='main-wrapper'>
          <div className='img-wrapper'>
            <img  
              alt="camera-image"
              src={Camera}
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
              disabled={isLoading}
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