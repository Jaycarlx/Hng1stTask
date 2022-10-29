import React from 'react'
import i4gIcon from '../assets/i4g.svg'
import zuriIcon from '../assets/zuri.svg'

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <img src={zuriIcon} alt="Zuri Internship Logo" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src= {i4gIcon} alt="Ingressive For Good Logo" />
        </div>
    </footer>
  )
}

export default Footer