import React,{useRef, useEffect, useState} from 'react';
import './cart-list.css';
import { UseStateValue } from '../Data-layer-for-addToCart/StateProvider';
import { getTotalPrice } from '../Data-layer-for-addToCart/reducer';
import CartListProduct from './cart-list-product';

export const CartList = ({ showCartListModal, setShowCartListModal }) => {
    const [{ cart }, dispatch] = UseStateValue();

    const modalRef = useRef()

    const closeModal = e => {
      document.body.style.overflow = 'unset';
      if (modalRef.current === e.target) {
        setShowCartListModal(false);
      }
    };
    return (
        <>{ showCartListModal ? (

            <div className='modal-bg-cart-List' ref={modalRef} onClick={closeModal}>
              <div className='modal-container-cart-list'>

                <div className='modal-header'>
                  <div className='modal-cart-header-text'>Cart List</div> 
                  <strong style={{"color":"rgba(132, 181, 159, 1)"}}>Items({cart.length})</strong>
                  <i class="fa-solid fa-xmark modal-exit" 
                  onClick={() => setShowCartListModal(prev => !prev)}></i>
                </div>
                  {/*********** Products List **********/}
                  
                <div className='cart-list-products'>
                  {cart.map(item => (
                    <CartListProduct
                      key={item}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      price={item.price} 
                      description={item.description}
                      amountP={item.amountP}
                    />
                    )
                  )}
                </div>

                  {/********* Product List End *********/}
                <div className='cart-list-line'></div>
                <strong className='total-price'>Total price :{getTotalPrice(cart)}  TK</strong>
                <div className='place-order'>
                  <button className='place-order-btn'>Place order</button>
                </div>

              </div>
            </div>
        ): null} </>
    )    
}

