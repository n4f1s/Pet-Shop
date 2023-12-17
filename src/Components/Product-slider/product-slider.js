import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './product-slider.css';
import { responsive, CustomDot } from './data';

function ProductSlider(props) {

  return (
    <Carousel 
      responsive={responsive}
      showDots={false}
      // customDot={<CustomDot />}
      arrows={true}
      ssr={true}
      renderDotsOutside={true}
    >

      {props.productType}

    </Carousel> 
  )
}

export default ProductSlider;