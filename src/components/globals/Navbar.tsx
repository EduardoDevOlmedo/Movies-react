import { useCallback,  useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Camera from "../../assets/camera.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClickAwayListener from 'react-click-away-listener';
import { images } from '../../utils/imageURLS';




const Navbar = () => {

  const [visibility, setVisibility] = useState(false)
  const [query, setQuery] = useState('')

  const handleClick = () => {
    setVisibility(true)
  }

  const handleClickAway = () => {
    setVisibility(false)
    setQuery("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;

    if((value.trim() !== "")) setQuery(value)
  }

  const handlePushRoute = () => {
    if((query.trim() === "")) return
    location.href = `/search/${query}`
  }


  
  const handleUserKeyPress = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if(key !== "Enter") return;
    

    if(query.length !== 0){
      handlePushRoute()
    }

}, [query]);


  


  return (
    <nav>
      <a role="button" href='/'>
      <img src={Camera.toString()}  />
      </a>
      <div className='containerHeart'>
        <ClickAwayListener onClickAway={handleClickAway}>
        <div className="pass-wrapp">
          <input placeholder='Search'
            onKeyPress={(e) => handleUserKeyPress(e)}
             onChange={handleInputChange}
             name="query"
             data-testid="query-input"
             style={{
              width: `${visibility ? '100%' : '40%'}`
             }}
            onMouseDownCapture={handleClick}
          />       
          {
            visibility && (
              <FontAwesomeIcon
              onClick={() => handlePushRoute()}
              style={{
                color: 'black',
                left: '88%',
                position: 'absolute',
                top: "7px"
              }}
              icon={faSearch}
              />
              )
            }
            </div>
        </ClickAwayListener>
          {
            location.pathname !== "/favorites" && 
            (
            <a href='/favorites'>
              <img src={images.heart} />
            </a>
            )
          }
          </div>
    </nav>
  )
}

export default Navbar