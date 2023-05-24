import React, { useEffect, useState } from 'react'
import { UseStateValue } from '../Data-layer-for-addToCart/StateProvider';
import './cart-list.css';
import { getTotalPrice } from '../Data-layer-for-addToCart/reducer';

function CartListProduct({ id, name, price, image, description, amountP }) {
  const [ { cart }, dispatch] = UseStateValue();
  const removeProductFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  }

  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPrice = () => {
    let ans = 0;
    cart.map((item) => (
      ans += amountP * price
    ))
    setTotalPrice(ans);
  }

  useEffect(() => {
    handleTotalPrice();
  })

  const [ amount, setAmount ]  = useState(1);
  let a = getTotalPrice(cart);
  const handleDecrement = () => {

    setAmount(amount - 1);
      if(amount <= 1){
        setAmount(1)
      }
  }
  const handleIncrement = () => {
    setAmount(amount + 1);

  }



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

              <div><strong className='amount-number'>{amount}</strong></div>

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



