import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CartList } from '../Cart-list/cart-list';
import { UseStateValue } from '../Data-layer-for-addToCart/StateProvider';

function Navbar() {
  const [{ cart }, dispatch] = UseStateValue();

  const [showCartListModal, setShowCartListModal] = useState(false)
  const openCartListModal = () => {
      setShowCartListModal(prev => !prev);
  };
  return (
    <div>
      <CartList showCartListModal={showCartListModal} setShowCartListModal={setShowCartListModal} />
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
          <a  className='cart-button' onClick={openCartListModal}>
          <img src={require('../Images/ShoppingCart.png')} alt='cart' 
            className='cart-img'/>
          </a>

          <div className='cart-text-bg'>
            <p className='cart-text'>{cart?.length}</p>
          </div>
        </div>

        <div className='heart'>
        <i class="fa-regular fa-heart"></i>
        </div>
        
        <div className='menu-icon' id='menu-icon'>
          <i class="fa-solid fa-bars fa-lg"></i>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar;