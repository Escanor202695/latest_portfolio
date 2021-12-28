import React from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'

const Home = () => {
  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <h3>DashBoard</h3>
        <div className='d-flex'>
          <div
            style={{
              width: '760px',
              height: '100%',
              backgroundColor: 'white',
              marginRight: '.5rem',
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
            }}
          >
            <h4
              className='px-4 pt-4 pb-3 '
              style={{ color: '#333333', borderBottom: '1px solid #CCCCCC' }}
            >
              TITLE
            </h4>
            <div className='d-flex justify-content-between align-start px-4 pt-2 row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>Total Number of Warehouses</h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}>
                  Field Description Description Which is kind of optional for
                  some fields. In that case don’t show this line
                </p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                4696
              </h1>
            </div>

            <div className='d-flex justify-content-between align-start px-4  row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>Central Warehouse</h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}>
                  Field Description Description Which is kind of optional for
                  some fields. In that case don’t show this line
                </p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                1
              </h1>
            </div>

            <div className='d-flex justify-content-between align-start px-4  row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>Central Warehouse</h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}>
                  Field Description Description Which is kind of optional for
                  some fields. In that case don’t show this line
                </p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                46
              </h1>
            </div>

            <div className='d-flex justify-content-between align-start px-4 row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>Union Level Warehouses</h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}>
                  Field Description Description Which is kind of optional for
                  some fields. In that case don’t show this line
                </p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                3211
              </h1>
            </div>
          </div>
          {/* <div
            style={{
              marginLeft: '.5rem',
              width: '564px',
              height: '340px',
              backgroundColor: 'white',
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
            }}
          ></div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
