import React from 'react'
import eyeHide from '../../assets/icons/eye-hide.png'
import eyeShow from '../../assets/icons/eye-show.png'

const HideShowToggle = ({ passVisibility, setPassVisibility }) => {
  return (
    <div
      className='d-flex justify-content-between align-items-center'
      style={{
        position: 'relative',
        top: '-35px',
        float: 'right',
        right: '10px',
      }}
    >
      {/* <p className='m-0'>
        {passVisibility ? password : password.slice(0, 8).replace(/./g, `●`)}
      </p> */}
      {passVisibility ? (
        <img
          src={eyeShow}
          alt=''
          height='20px'
          width='20px'
          onClick={setPassVisibility}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <img
          src={eyeHide}
          alt=''
          height='20px'
          width='20px'
          onClick={setPassVisibility}
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  )
}

export default HideShowToggle
