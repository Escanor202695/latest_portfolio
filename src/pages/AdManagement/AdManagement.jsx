import React from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'
import plus from '../../assets/icons/plus.svg'
import './AdManagement.scss'
import { Table } from 'react-bootstrap'
import threedot from '../../assets/icons/threedot.svg'
import { AdCards } from '../../components/AdCards'

const AdMnagement = () => {
  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        {' '}
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fw-bold'>Advertisement Management</h3>
          <button className='primary-btn d-flex justify-content-center align-items-center '>
            <img className='me-3' src={plus} alt='' /> Upload New Ad
          </button>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-4'>
          <div className='custom-input me-2'>
            <label for=''>Search Adverts</label>
            <br />
            <input type='text' placeholder='Search something' />
          </div>
          <div className='custom-dropdown ms-2'>
            <label for=''>Show</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                value 1
              </option>
              <option value='2'> value 2</option>
              <option value='3'> value 3</option>
            </select>
          </div>
        </div>
        <section>
          <AdCards />
          <AdCards />
          <AdCards />
          <AdCards />
        </section>
      </div>
    </div>
  )
}

export default AdMnagement
