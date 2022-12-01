import { useState } from 'react'
import Heart from "../..//assets/heart.svg"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Camera from "../../assets/camera.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClickAwayListener from 'react-click-away-listener';

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

  return (
    <nav>
      <img src={Camera}/>
      <div className='containerHeart'>
        <ClickAwayListener onClickAway={handleClickAway}>
        <div className="pass-wrapp">
          <input placeholder='Search'
             onChange={handleInputChange}
             value={query}
             name="query"
             style={{
              width: `${visibility ? '100%' : '40%'}`
             }}
            onMouseDownCapture={handleClick}
          />       
          {
            visibility && (
              <FontAwesomeIcon
              onClick={() => console.log(query)}
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
          <a href='/favorites'>
            <img src={Heart} />
          </a>
          </div>
    </nav>
  )
}

export default Navbar