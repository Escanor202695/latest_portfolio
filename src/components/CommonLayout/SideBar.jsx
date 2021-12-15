import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.scss'
import sidebarIcon from '../../assets/icons/Vector.svg'

const SideBar = () => {
  return (
    <div>
      <div className='col-md-3'>
        <ul className='list-group sticky-top  py-2'>
          <NavLink as='li' className='list-group-item' to='/' exact>
            <img src={sidebarIcon} alt='' height='26' width='24' />
            <span className='ps-3'> DashBoard</span>
          </NavLink>
          <NavLink as='li' className='list-group-item' to='/adminManagement'>
            <img src={sidebarIcon} alt='' height='26' width='24' />
            <span className='ps-3'>Admin Management</span>
          </NavLink>
          <NavLink
            as='li'
            className='list-group-item'
            to='/storefrontManagement'
          >
            <img src={sidebarIcon} alt='' height='26' width='24' />
            <span className='ps-3'>Storefront Management</span>
          </NavLink>
          <NavLink as='li' className='list-group-item' to='/adManagement'>
            <img src={sidebarIcon} alt='' height='26' width='24' />
            <span className='ps-3'>Ad Management</span>
          </NavLink>
          <NavLink as='li' className='list-group-item' to='/globalSettings'>
            <img src={sidebarIcon} alt='' height='26' width='24' />
            <span className='ps-3'>Global Settings</span>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
