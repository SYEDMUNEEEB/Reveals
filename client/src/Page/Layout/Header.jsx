import React, { useState } from 'react'
import Vector from "../../image/Vector.png"
import Login from './Login'
const Header = () => {
  const [username, setUsername] = useState('')
  const [seen, setSeen] = useState(false)

  function togglePop () {
      setSeen(!seen);
  };


  return (
    <div>   
    <div className="main">   <div className='reveal'>
        RevealOps.AI
        <div className='next-genrations'>
      <p className='next' >Next Generation AlOps platform</p>
      </div>
      </div>
      
      <div className="login">
          <button id='login' > <button onClick={togglePop}>  {username ? `Login (${username})` : 'Login'}{' '}<img src={Vector} alt='drop-down' /></button>
          {seen ? <Login toggle={togglePop} /> : null} </button>
      </div>
      </div></div>
  )
}

export default Header