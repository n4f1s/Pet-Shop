import React from 'react';
import './product.css';
import { UseStateValue } from '../Data-layer-for-addToCart/StateProvider';

function product(props) {

    const [cart, dispatch] = UseStateValue();
    const addToCart = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_CART',
            item:{
                id: props.id,
                name: props.name,
                image: props.url,
                description: props.description,
                url: props.url,
                price: props.price
            },
        });
    };
  return (
    <div className='product-container'>
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
        onClick={addToCart}
         style={{backgroundColor:props.productCartButton}}>Add To Cart</button>
    </div>
  )
}

export default product;