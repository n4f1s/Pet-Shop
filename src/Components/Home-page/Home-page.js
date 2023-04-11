import React from 'react';
import './Home-page.css';
import Product from '../Product/product';
import ProductSlider from '../Product-slider/product-slider';

function HomePage() {
  return (
<div className='home-page'>

            {/************ Hero section *************/}

  <div className='hero-section'>

    <div className='hero-left'>

      <div className='left-bar'>
      <div className='deep-color'>
        <img src={require('../Images/cat.png')} alt='cat' className='left-bar-img'/>
          Cat Food
          <i class="fa-solid fa-angle-right left-bar-icons"></i>
      </div>
      <div className='light-color'>
        <img src={require('../Images/dog.png')} alt='cat' className='left-bar-img'/>
          Dog Food
          <i class="fa-solid fa-angle-right left-bar-icons"></i>
      </div>
      <div className='deep-color'>
        <img src={require('../Images/litter-box.png')} alt='cat' className='left-bar-img'/>
          Litter
          <i class="fa-solid fa-angle-right left-bar-icons"></i>
      </div>
      <div className='light-color'>
        <img src={require('../Images/dog-toy.png')} alt='cat' className='left-bar-img'/> 
          Toys
          <i class="fa-solid fa-angle-right left-bar-icons"></i>
      </div>
      <div className='deep-color'>
        <img src={require('../Images/beauty-saloon.png')} alt='cat' className='left-bar-img'/>  
          Care & Health
          <i class="fa-solid fa-angle-right left-bar-icons"></i>
      </div>
      <div className='light-color'>
        <img src={require('../Images/collar.png')} alt='cat' className='left-bar-img'/>  
          Accessories
          <i class="fa-solid fa-angle-right left-bar-icons"></i>
      </div>
      <div className='deep-color'>
        <img src={require('../Images/fish.png')} alt='cat' className='left-bar-img'/>
          Fish Food & Accessories
          <i class="fa-solid fa-angle-right left-bar-icons"></i>
      </div>
      <div className='light-color'>
        <img src={require('../Images/parrot.png')} alt='cat' className='left-bar-img'/>
          Bird Food & Accessories
          <i class="fa-solid fa-angle-right left-bar-icons"></i>
      </div>
      <div className='deep-color'>
        <img src={require('../Images/rabbit.png')} alt='cat' className='left-bar-img'/>
          Rabit Food & Accessories
          <i class="fa-solid fa-angle-right left-bar-icons"></i>
      </div>
      </div>

    </div>

    <div className='hero-right'>
      <div >
      <img src={require('../Images/Hero-Banner.png')} alt='cat' className='hero-image'/> 
      </div> 
    </div>
  </div>

    {/************** products **************/}

  <div className='cat-food'>
    <div className='green-header'>Cat Foods</div>
    <div className='trending-products'>Our Trending Products</div> 
  </div> 


  <div className='products'>
      <ProductSlider />
  </div >

  <div className='cat-food'>
    <div className='red-header'>Cat Foods</div>
    <div className='trending-products'>Our Trending Products</div> 
  </div> 
  
</div>
  )
}

export default HomePage;