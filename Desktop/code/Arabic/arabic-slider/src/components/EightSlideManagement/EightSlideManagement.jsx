import React from 'react';
import TwelveSlide from '../TwelveSlide/TwelveSlide';
import Slider from '../Slider/Slider';
import img from '../../assets/images/banner/slide8.jpg'
const EightSlideManagement = () => {
    const h1 = `الفروع`
    const h3 = ``
    const bg = `#f09713cf`
    return (
        <div>
       
            <Slider h1={h1} h3={h3} img={img} bg={bg}/>
            <TwelveSlide/>

        </div>
    );
};

export default EightSlideManagement;