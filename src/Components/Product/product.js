import React, { useEffect } from 'react';
import './product.css';
import { UseStateValue } from '../Data-layer-for-addToCart/StateProvider';



function Product(props) {

    const [cart, dispatch] = UseStateValue();
    const AddToCart = (event) => {

        // dispatch the item into the data layer
            dispatch({
                type: 'ADD_TO_CART',
                item:{
                    id: props.id,
                    name: props.name,
                    image: props.url,
                    description: props.description,
                    price: props.price,
                    quantity: 1
                },
            });
        // Stops the button after click
        event.currentTarget.disabled = true;

    };


  return (
    <div className='product-container' id="cartHide">
        <div className='product-img-container' style={{backgroundColor:props.productImageBG}}>
            <img src={props.url} alt={props.name} className='product-img'/>
        </div>
        <div className='product-info'>
            <strong>{props.name}</strong>
            <div className='product-text'>
                {props.description}
            </div>
            <strong>{props.price} TK.</strong>
            <div className='product-rating'>
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
            </div>
        </div>
        <button className="btn btn-default product-btn" href='/' 
        onClick={AddToCart}
         style={{backgroundColor:props.productCartButton}}>Add To Cart</button>
    </div>
  )
}

export default Product;