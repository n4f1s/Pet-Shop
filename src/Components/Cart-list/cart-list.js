import React,{useRef, useEffect, useState} from 'react';
import './cart-list.css';
import { UseStateValue } from '../Data-layer-for-addToCart/StateProvider';
// import { getTotalPrice } from './cart-list-product';
import CartListProduct from './cart-list-product';

export const CartList = ({ showCartListModal, setShowCartListModal }) => {
    const [{ cart }, dispatch] = UseStateValue();

    console.log(cart.image);
    const modalRef = useRef()

    const closeModal = e => {
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
{/* 
                <article>
                  {
                    <div className='cart-list-products'>
                      {
                        cart?.map((item) =>(
                          
                        ))
                      }
                    </div>
                  }
                </article> */}

                  {/********* Product List End *********/}
                <div className='cart-list-line'></div>
                <strong className='total-price'>Total price :  TK</strong>
                <div className='place-order'>
                  <button className='place-order-btn'>Place order</button>
                </div>

              </div>
            </div>
        ): null} </>
    )    
}

