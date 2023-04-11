import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function navbar() {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src={require('../Images/NavLogo.png')} alt='Logo' />
      </div>

      <ul className='navbar-items'>
        <li className='items'><Link to='/'>Home</Link></li>
        <li className='items'><Link to='/'>Shop</Link></li>
        <li className='items'><Link to='/'>Blog</Link></li>
        <li className='items'><Link to='/'>Clearance Sale</Link></li>
        <li className='items'><Link to='/'>Offer</Link></li>
      </ul>

      <div className='third-section'>
      
        <div>
          <i class="fa-solid fa-magnifying-glass search"></i>
          <input type="text" placeholder="Search..." className='search-bar'></input>
        </div>

        <div className='cart'>
        <i class="fa-regular fa-cart-shopping"></i>
        </div>
        <div className='heart'>
        <i class="fa-regular fa-heart"></i>
        </div>
        
        <div className='menu-icon' id='menu-icon'>
          <i class="fa-solid fa-bars fa-lg"></i>
        </div>
      </div>
    </div>
  )
}

export default navbar;