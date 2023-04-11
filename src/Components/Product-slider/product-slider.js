import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from '../Product/product';
import './product-slider.css';
import { responsive, CustomDot } from '../Product/data';
import { db } from "../FireBase-SDK";
import { collection, getDocs } from "firebase/firestore";


function ProductSlider() {
  const [catFoods, setCatFoods] = useState([]);
  const catFoodsCollectionRef = collection(db, "cat food");
  
  useEffect(() => {
    const getCatFoods = async () => {
      const data = await getDocs(catFoodsCollectionRef);
      setCatFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    getCatFoods();
  }, []);

  const catFoodSlider = catFoods.map(item => (
    <Product name={item.name} url={item.imgUrl} price={item.price}
      description={item.description} 
    />
  ))

  return (
 <Carousel 
  responsive={responsive}
  showDots={true}
  customDot={<CustomDot />}
  arrows={false}
  ssr={true}
  renderDotsOutside={true}
  >

  {catFoodSlider}

</Carousel> 
  )
}

export default ProductSlider;