import React, { useEffect, useState } from 'react'
import './Home-page.css';
import ProductSlider from '../Product-slider/product-slider';
import Header from '../Header/Header';
import Product from '../Product/product';
import { db } from "../FireBase-SDK";
import { collection, getDocs } from "firebase/firestore";

function HomePage() {
  const [catFoods, setCatFoods] = useState([]);
  const [dogFoods, setDogFoods] = useState([]);
  const catFoodsCollectionRef = collection(db, "cat food");
  const dogFoodsCollectionRef = collection(db, "dog food");

  useEffect(() => {
    const getCatFoods = async () => {
      const data = await getDocs(catFoodsCollectionRef);
      setCatFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    getCatFoods();

    const getDogFoods = async () => {
      const data = await getDocs(dogFoodsCollectionRef);
      setDogFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    getDogFoods();
  }, []);

  const catFoodSlider = catFoods.map(item => (
    <Product name={item.name} url={item.imgUrl} price={item.price}
      description={item.description} productImageBG={item.productImageBG}
      productCartButton={item.productCartButton} id={item.id}
    />
  ))

  const dogFoodSlider = dogFoods.map(item => (
    <Product name={item.name} url={item.imgUrl} price={item.price}
      description={item.description} productImageBG={item.productImageBG}
      productCartButton={item.productCartButton} id={item.id}
    />
  ))

  return (
<div className='home-page'>
    <Header />
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

  <div className='product-slider-header'>
    <div className='product-type' style={{color:'rgba(173, 193, 120, 1)'}}>
      Cat Foods</div>
    <div className='trending-products'>Our Trending Products</div> 
  </div> 


  <div className='products'>
      <ProductSlider productType={catFoodSlider}/>
  </div >

  <div className='product-slider-header'>
    <div className='product-type' style={{color:'rgba(239, 71, 111, 1)'}}>
      Dog Foods</div>
    <div className='trending-products'>Our Trending Products</div> 
  </div> 
  
  <div className='products'>
      <ProductSlider productType={dogFoodSlider}/>
  </div >
</div>
  )
}

export default HomePage;