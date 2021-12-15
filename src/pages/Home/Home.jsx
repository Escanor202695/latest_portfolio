import React from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'

const Home = () => {
  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <h2>DashBoard</h2>
        <div className='d-flex'>
          <div
            style={{
              width: '564px',
              height: '340px',
              backgroundColor: 'white',
              marginRight: '.5rem',
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
            }}
          ></div>
          <div
            style={{
              marginLeft: '.5rem',
              width: '564px',
              height: '340px',
              backgroundColor: 'white',
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Home
