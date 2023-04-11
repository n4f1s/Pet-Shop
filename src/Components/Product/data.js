
export   const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 2000},
      items: 4
    },
    tablet: {
      breakpoint: { max: 2000, min: 1524 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 1524, min: 0 },
      items: 2
    }
  };

export   const CustomDot = ({ onClick, active, index, carouselState }) => {
    return (
      <li className='dot-list dotss'>
        <button
          style={{ background: active ? "#ADC178" : "#E0E0E0"}} className='dot-slider'
          onClick={() => onClick()}
        />
      </li>
    );
  }  
