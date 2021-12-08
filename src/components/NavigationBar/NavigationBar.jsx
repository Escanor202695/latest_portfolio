import React from 'react'
import './NavigationBar.scss'
import accIcon from '../../assets/icons/account_circle.svg'
import '../../index.scss'

const NavigationBar = () => {
  return (
    <section className='nav-section'>
      <nav className='custom-navbar d-flex justify-content-between align-items-center'>
        <h2>MenuBoard</h2>
        <img src={accIcon} alt='' />
      </nav>
    </section>
  )
}

export default NavigationBar
