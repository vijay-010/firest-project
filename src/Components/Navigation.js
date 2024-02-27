import React from 'react'
import '../App.css'
import brand_logo from '../images/brand_logo.png'

function Navigation() {
  return (
    <>
    <nav className="container">
      <div className="logo">
        <img src={brand_logo} alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
    </>
  )
}

export default Navigation