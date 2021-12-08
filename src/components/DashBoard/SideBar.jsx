import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
      {' '}
      <div className='col-md-3'>
        <ul className='list-group sticky-top  py-2'>
          <NavLink as='li' className='list-group-item' to='/' exact>
            DashBoard
          </NavLink>
          <NavLink as='li' className='list-group-item' to='/adminManagement'>
            Admin Management
          </NavLink>
          <NavLink
            as='li'
            className='list-group-item'
            to='/storefrontManagement'
          >
            Storefront Management
          </NavLink>
          <NavLink as='li' className='list-group-item' to='/adManagement'>
            Ad Management
          </NavLink>
          <NavLink as='li' className='list-group-item' to='/globalSettings'>
            Global Settings
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
