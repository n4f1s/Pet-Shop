import React from 'react'
import { UseStateValue } from '../Data-layer-for-addToCart/StateProvider';
import './cart-list.css';

function CartListProduct({ id, name, price, image, description }) {
    const [ { cart }, dispatch] = UseStateValue();

  return (
    <div className='cart-list-product-container'>
      <div className='blabla'>
        <div className='cart-list-product-img-container'>
            <img src={image} alt={name} className='cart-list-product-img'></img>
        </div>
        
        <div className='cart-list-product-text'>
            <div className='cart-list-header-line'>
              <div className='cart-list-product-name'>
                <strong>{name}</strong>
              </div>
            </div>

            <p className='cart-list-product-price-text'>{price} ৳</p>
            <p className='cart-list-product-description-text'>
              Flavor: {description}</p>
        </div>
      </div>
      <div className='trash-icon'>
        <i class="fa-solid fa-trash-can trash"></i>
      </div>
    </div>
  )
}

export default CartListProduct;