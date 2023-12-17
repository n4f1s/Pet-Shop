import React, { useEffect, useState } from 'react'
import { UseStateValue } from '../Data-layer-for-addToCart/StateProvider';
import './cart-list.css';
import { getTotalPrice } from '../Data-layer-for-addToCart/reducer';

function CartListProduct({ id, name, price, image, description, quantity }) {

  const [ { cart }, dispatch] = UseStateValue();

  const removeProductFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  }
  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  };

  const [ amount, setAmount ]  = useState(1);
  const handleDecrement = () => {
    if(amount <= 1){
      return setAmount(1);
    }
    setAmount(amount - 1);
    updateQuantity(id, quantity - 1);
  }
  const handleIncrement = () => {
    setAmount(amount + 1);
    updateQuantity(id, quantity + 1);
  }
  quantity = amount;
  console.log("product amount " + quantity);
  return (
    <div className='cart-list-product-container'>
      <div className='cart-list-product-imgPlusText-container'>
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

            <div className='amountOfProduct'>

              <i onClick={handleDecrement}>
                <div className='increment-box'>-</div>
              </i>

              <div><strong className='amount-number'>{quantity}</strong></div>

              <i onClick={handleIncrement}>
                <div className='increment-box'>+</div>
              </i>
            </div>

        </div>
      </div>
      
      <div className='trash-icon'>
        <i class="fa-solid fa-trash-can trash"
          onClick={removeProductFromCart}></i>
      </div>
    </div>
  )
}

export default CartListProduct;



