import React from 'react';
import Slider from '../Slider/Slider';
import NinthSlide from '../NinthSlide/NinthSlide';
import img from '../../assets/images/banner/slide6.jpg'
const SixthSlideManagement = () => {
    const h1 = `موقع البنك`
    const h3 = ``
    const bg = '#feaea9d9'
    return (
        <div>
            <div>
            <Slider h1={h1} h3={h3} bg={bg} img={img}/>
            </div>
            <NinthSlide/>
        </div>
    );
};

export default SixthSlideManagement;