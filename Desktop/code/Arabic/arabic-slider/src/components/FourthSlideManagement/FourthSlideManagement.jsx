import React from 'react';
import SixthSlide from '../SixthSlide/SixthSlide';
import Slider from '../Slider/Slider';
import images from '../../assets/images/banner/online-marketing.jpg'
const FourthSlideManagement = () => {
  const h1 = `إدارة المنتجات`
  const h3=``
  const bg = '#f7752cc2'
    return (
        <div>
        <Slider h1={h1} h3={h3} bg={bg} img={images}/>
        <SixthSlide/>

            
        </div>
    );
};

export default FourthSlideManagement;