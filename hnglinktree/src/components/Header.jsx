import React from 'react'
import share from '../assets/share.svg'
import avatar from '../assets/jaypic.png'
import '../App.css' 
const Header = () => {
  return (
        
      <div className="header">
          <img src={share} alt="share ICon"  id='img__share' />  
          <div className="bio">
              <img src={avatar} alt="Molokwu Chibuzor" id='profile__img' />
              <p id="twitter"> Jaycarlx </p>
              <p id="slack">Jaycarlx </p>
          </div>
        </div>
  )
}

export default Header



