import React from 'react';
import './Navbar.scss'
import leftLogo from '../../assets/images/logo/left.png'
import rightLogo from '../../assets/images/logo/right.png'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar_'> 
            <div className="container">
              <div className="flex-item">
                <div className="left-logo">
                    <img src={leftLogo} alt="" />
                </div>
                <div className="right-logo">
                    <img src={rightLogo} alt="" />
                </div></div>
              </div>
        </div>
    );
};

export default Navbar;