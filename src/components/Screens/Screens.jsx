import React from 'react'
import screenImg from '../../assets/images/screen-img.png'
import threedot from '../../assets/icons/threedot.svg'
import './Screens.scss'

const Screens = () => {
  return (
    <div className='my-3 d-flex justify-content-between align-items-start screen-section'>
      <div className=' d-flex justify-content-between align-items-start '>
        <img src={screenImg} alt='' className='me-3' />
        <div className='ms-3'>
          <h6 className='fw-bold'>Screen 01:SCR 2323</h6>
          <h6>Category Screens</h6>
          <h6>
            Categories: CategoryName, CategoryName, CategoryName, CategoryName,{' '}
          </h6>
          <h6>Theme: ThemeName</h6>
          <h6>Android ID</h6>
        </div>
      </div>
      <div>
        <img src={threedot} alt='' />
      </div>
    </div>
  )
}

export default Screens
