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
              width: '100%',
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
                <h5 style={{ color: '#333333' }}>
                  Total Number of Storefronts{' '}
                </h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}>
                  Field Description Description Which is kind of optional for
                  some fields. In that case don’t show this line
                </p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                220
              </h1>
            </div>

            <div className='d-flex justify-content-between align-start px-4  row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>Total Number of Screens </h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}>
                  Field Description Description Which is kind of optional for
                  some fields. In that case don’t show this line
                </p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                501
              </h1>
            </div>

            <div className='d-flex justify-content-between align-start px-4  row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>Total Number of Adverts</h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}>
                  Field Description Description Which is kind of optional for
                  some fields. In that case don’t show this line
                </p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                946
              </h1>
            </div>

            <div className='d-flex justify-content-between align-start px-4 row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>
                  Total Number of System Admins{' '}
                </h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}>
                  Field Description Description Which is kind of optional for
                  some fields. In that case don’t show this line
                </p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                12
              </h1>
            </div>
            <div className='d-flex justify-content-between align-start px-4 row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>
                  Total Number of System Managers
                </h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}>
                  Field Description Description Which is kind of optional for
                  some fields. In that case don’t show this line
                </p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                122
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
