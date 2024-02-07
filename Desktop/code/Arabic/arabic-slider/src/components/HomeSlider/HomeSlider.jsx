import React from 'react';
import 'animate.css';
import Navbar from '../Navbar/Navbar';


const HomeSlider = () => {
    return (
        <div className='banner___item___'>
        <div data-aos="zoom-in" data-aos-duration="1200">
            <Navbar/>

            <div className='slider' >
            <div className="container">
            <div className="position_____________relative text-change-position-change">
            <div className="text_position_change">
            <h1 className='text-end' data-aos="zoom-in-left" data-aos-duration="1400"
         >تقرير إدارة تجربة العميل
         </h1>
            <h5 className='text-end' data-aos="zoom-in-left" data-aos-duration="1600"
            > إدارة تجربة العميل
            </h5>
            </div>
            {/* <div className="relative">
             <div className="slide___image text-center"
            >
                <img src={banner} alt="" />
             </div>
             </div> */}
             </div></div>
        </div>
            
        </div>
        </div>
    );
};

export default HomeSlider;