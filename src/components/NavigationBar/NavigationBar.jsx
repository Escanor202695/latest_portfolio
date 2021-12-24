import React from 'react'
import './NavigationBar.scss'
import accIcon from '../../assets/icons/account_circle.svg'
import '../../index.scss'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <section className='nav-section'>
      <nav className='custom-navbar d-flex justify-content-between align-items-center'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h2 style={{ fontWeight: 'bold' }}>MenuBoard</h2>
        </Link>
        <Link to='/login'>
          <img src={accIcon} alt='' />
        </Link>
      </nav>
    </section>
  )
}

export default NavigationBar
