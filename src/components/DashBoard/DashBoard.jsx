import React from 'react'
import './DashBoard.scss'
import SideBar from './SideBar'

const DashBoard = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div>{children}</div>
    </div>
  )
}

export default DashBoard
