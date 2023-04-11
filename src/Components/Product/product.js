import React from 'react';
import './product.css';

function product(props) {
  return (
    <div className='product-container'>
        <div className='product-img-container' style={{"--productImageBG":"#F9FCEA"}}>
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
        <a className="btn btn-default product-btn" href='/' style={{"--productCartButton":"#ADC178"}}>Add To Cart</a>
    </div>
  )
}

export default product;