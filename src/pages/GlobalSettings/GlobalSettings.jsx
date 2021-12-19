import React from 'react'
import './GlobalSettings.scss'
import DashBoard from '../../components/DashBoard/DashBoard'

const GlobalSettings = () => {
  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <h2>Global Settings</h2>
      </div>
    </div>
  )
}

export default GlobalSettings
