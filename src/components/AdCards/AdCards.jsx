import React from 'react'
import screenImg from '../../assets/images/screen-img.png'
import threedot from '../../assets/icons/threedot.svg'
import './AdCards.scss'

const AdCards = () => {
  return (
    <div className='my-3 row ad-card '>
      <div
        className='col-6 d-flex justify-content-between align-items-center '
        style={{ borderRight: '2px solid #CCCCCC' }}
      >
        <h4 className='me-2'>1</h4>
        <img src={screenImg} alt='' className='mx-3' />
        <div className='pe-5'>
          <h6 className='fw-bold'>Advertisement Name</h6>
          <h6 style={{ fontWeight: 'normal' }}>
            Product Manufacturer, Manufacturer Type
          </h6>
          <h6 style={{ fontWeight: 'normal' }}>
            Filetype: Image, Ad Type: Lorem
          </h6>
        </div>
      </div>
      <div className='col-6 d-flex justify-content-between align-items-center'>
        <div className='mx-2  text-center '>
          <h3>43</h3>
          <p>Storefronts</p>
        </div>
        <div className='mx-2 text-center'>
          <h3>4543</h3>
          <p>Views / Per Day</p>
        </div>
        <div className='mx-2 text-center'>
          <h3>$2324.12</h3>
          <p>Ad Revenue</p>
        </div>
        <div style={{ height: '100%' }}>
          <img src={threedot} alt='' />
        </div>
      </div>
    </div>
  )
}

export default AdCards
