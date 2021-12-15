import React from 'react'
import SideBar from '../CommonLayout/SideBar'
import './DashBoard.scss'

const DashBoard = ({ children }) => {
  return (
    <div className='py-2'>
      <SideBar />
      <div>{children}</div>
    </div>
  )
}

export default DashBoard
