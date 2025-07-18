import React from 'react'
import './Nav.css';
function Nav() {
  return (
    <nav className='navbar'>
      <button className='logo'>
        <span className='highlight'>Flick</span>Finder
      </button>
      <div className='nav-links'>
        <a href="#">Home</a>
        <a href="#">Tv Show</a>
        <a href="#">Movie</a>
        <a href="#">Upcoming</a>
      </div>
      <button className='fav-btn'>
        Favorite ♡
      </button>
    </nav>
  )
}

export default Nav;
