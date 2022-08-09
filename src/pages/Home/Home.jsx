import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import DashBoard from '../../components/DashBoard/DashBoard'
import { GetReportsEnd } from '../../constants/api.constants'

const Home = () => {
  const currentDate = new Date().toISOString().split('T')[0]

  const [startDate, setStartDate] = useState('2020-01-01')
  const [endDate, setEndDate] = useState(currentDate)
  const [reports, setReports] = useState({})
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    getReport()
  }, [startDate, endDate])

  const getReport = async () => {
    setShowSpinner(true)
    try {
      const res = await axios.get(
        GetReportsEnd + `?from=${startDate}&till=${endDate}`,
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )

      if (res.status === 200) {
        setReports(res?.data?.data)
        setShowSpinner(false)
      } else throw new Error(res?.data?.msg || 'Try again later!')
    } catch (error) {
      setShowSpinner(false)
    }
  }

  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <h3>Dashboard</h3>

        <div className=' mb-3 d-flex justify-content-between align-item-center '>
          <div className='plain-input mt-3 me-2 '>
            <label for=''>Start Date</label>
            <br />
            <input
              type='date'
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            />
          </div>
          <div className='plain-input mt-3 '>
            <label for=''>End Date</label>
            <br />
            <input
              type='date'
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
          </div>
        </div>
        <div className='d-flex'>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
            }}
          >
            <h4
              className='px-4 pt-4 pb-3 d-flex justify-content-start align-items-center'
              style={{ color: '#333333', borderBottom: '1px solid #CCCCCC' }}
            >
              Overview{' '}
              {showSpinner && (
                <Spinner className='ms-2' animation='border' size='sm' />
              )}
            </h4>
            <div className='d-flex justify-content-between align-start px-4 pt-2 row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>
                  Total Number of Storefronts{' '}
                </h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}></p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                {reports?.store || 0}
              </h1>
            </div>

            <div className='d-flex justify-content-between align-start px-4  row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>Total Number of Screens </h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}></p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                {reports?.screen || 0}
              </h1>
            </div>

            <div className='d-flex justify-content-between align-start px-4  row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>Total Number of Adverts</h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}></p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                {reports?.ad || 0}
              </h1>
            </div>

            <div className='d-flex justify-content-between align-start px-4 row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>
                  Total Number of System Admins{' '}
                </h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}></p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                {reports?.admin || 0}
              </h1>
            </div>
            <div className='d-flex justify-content-between align-start px-4 row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>
                  Total Number of System Managers
                </h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}></p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                {reports?.manager || 0}
              </h1>
            </div>
            <div className='d-flex justify-content-between align-start px-4 row'>
              <div className='col-9'>
                <h5 style={{ color: '#333333' }}>Total Number of Themes</h5>
                <p style={{ color: 'rgb(92, 92, 92)' }}></p>
              </div>
              <h1 className='col-3 text-end pe-4' style={{ color: '#333333' }}>
                {reports?.theme || 0}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
