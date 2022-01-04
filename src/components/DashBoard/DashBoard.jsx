import React from 'react'
import SideBar from '../CommonLayout/SideBar'

const DashBoard = ({ children }) => {
  return (
    <div className=''>
      <SideBar />
      <div>{children}</div>
    </div>
  )
}

export default DashBoard
