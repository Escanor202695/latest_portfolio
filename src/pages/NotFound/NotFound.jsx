import React from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'

const NotFound = () => {
  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <h1
          className='text-center text-secondary'
          style={{ paddingTop: '30vh' }}
        >
          Not Found!
        </h1>
      </div>
    </div>
  )
}

export default NotFound
