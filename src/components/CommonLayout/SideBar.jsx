import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.scss'

const SideBar = () => {
  return (
    <div>
      <div className=''>
        <ul className='list-group sticky-top  '>
          <NavLink as='li' className='list-group-item' to='/' exact>
            {/* <img src={sidebarIcon} alt='' height='26' width='24' /> */}
            <Vector />
            <span className='ps-3'> DashBoard</span>
          </NavLink>
          <NavLink as='li' className='list-group-item' to='/adminManagement'>
            <Vector /> <span className='ps-3'>Admin Management</span>
          </NavLink>
          <NavLink
            as='li'
            className='list-group-item'
            to='/storefrontManagement'
          >
            <Vector /> <span className='ps-3'>Storefront Management</span>
          </NavLink>
          <NavLink as='li' className='list-group-item' to='/adManagement'>
            <Vector /> <span className='ps-3'>Ad Management</span>
          </NavLink>
          <NavLink as='li' className='list-group-item' to='/globalSettings'>
            <Vector /> <span className='ps-3'>Global Settings</span>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default SideBar

const Vector = () => {
  return (
    <svg
      width='24'
      height='26'
      viewBox='0 0 28 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M27.1929 7.85333L25.7929 2.02667C25.4995 0.826667 24.4595 0 23.2462 0H4.7262C3.5262 0 2.47287 0.84 2.19287 2.02667L0.792868 7.85333C0.472868 9.21333 0.766201 10.6 1.61953 11.6933C1.7262 11.84 1.87287 11.9467 1.99287 12.08V21.3333C1.99287 22.8 3.19287 24 4.65953 24H23.3262C24.7929 24 25.9929 22.8 25.9929 21.3333V12.08C26.1129 11.96 26.2595 11.84 26.3662 11.7067C27.2195 10.6133 27.5262 9.21333 27.1929 7.85333ZM23.2062 2.65333L24.6062 8.48C24.7395 9.04 24.6195 9.6 24.2729 10.04C24.0862 10.28 23.6862 10.6667 23.0195 10.6667C22.2062 10.6667 21.4995 10.0133 21.4062 9.14667L20.6329 2.66667L23.2062 2.65333ZM15.3262 2.66667H17.9395L18.6595 8.69333C18.7262 9.21333 18.5662 9.73333 18.2195 10.12C17.9262 10.4667 17.4995 10.6667 16.9529 10.6667C16.0595 10.6667 15.3262 9.88 15.3262 8.92V2.66667ZM9.31287 8.69333L10.0462 2.66667H12.6595V8.92C12.6595 9.88 11.9262 10.6667 10.9395 10.6667C10.4862 10.6667 10.0729 10.4667 9.75287 10.12C9.41953 9.73333 9.25953 9.21333 9.31287 8.69333ZM3.37953 8.48L4.7262 2.66667H7.35287L6.57953 9.14667C6.47287 10.0133 5.77953 10.6667 4.9662 10.6667C4.31287 10.6667 3.89953 10.28 3.7262 10.04C3.3662 9.61333 3.2462 9.04 3.37953 8.48ZM4.65953 21.3333V13.2933C4.7662 13.3067 4.85953 13.3333 4.9662 13.3333C6.1262 13.3333 7.17953 12.8533 7.95287 12.0667C8.75287 12.8667 9.81953 13.3333 11.0329 13.3333C12.1929 13.3333 13.2329 12.8533 14.0062 12.0933C14.7929 12.8533 15.8595 13.3333 17.0595 13.3333C18.1795 13.3333 19.2462 12.8667 20.0462 12.0667C20.8195 12.8533 21.8729 13.3333 23.0329 13.3333C23.1395 13.3333 23.2329 13.3067 23.3395 13.2933V21.3333H4.65953Z' />
    </svg>
  )
}
