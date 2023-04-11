import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from '../Product/product';
import './product-slider.css';
import { responsive, CustomDot } from '../Product/data';

function ProductSlider(props) {

  return (
 <Carousel 
  responsive={responsive}
  showDots={true}
  customDot={<CustomDot />}
  arrows={true}
  ssr={true}
  renderDotsOutside={true}
  >

  {props.productType}

</Carousel> 
  )
}

export default ProductSlider;