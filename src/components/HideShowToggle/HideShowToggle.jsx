import React, { useState } from 'react'
import eyeShow from '../../assets/icons/eye-show.png'
import eyeHide from '../../assets/icons/eye-hide.png'

const HideShowToggle = ({ password }) => {
  const [passVisibility, setPassVisibility] = useState(false)

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <p className='m-0'>
        {passVisibility ? password : password.slice(0, 8).replace(/./g, `●`)}
      </p>
      {passVisibility ? (
        <img
          src={eyeShow}
          alt=''
          height='20px'
          width='20px'
          onClick={() => setPassVisibility(!passVisibility)}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <img
          src={eyeHide}
          alt=''
          height='20px'
          width='20px'
          onClick={() => setPassVisibility(!passVisibility)}
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  )
}

export default HideShowToggle
