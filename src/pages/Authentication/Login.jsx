import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
const Login = () => {
  return (
    <div className='login-card  '>
      <h2 className='text-center fw-bold'>Login</h2>
      <div className='plain-input mt-3 '>
        <label for=''>Email</label>
        <br />
        <input type='text' placeholder='enter your email' />
      </div>
      <div className='plain-input mt-3 '>
        <label for=''>Password</label>
        <br />
        <input type='password' placeholder='enter your password' />
      </div>
      <Link to='/home'>
        <button className=' primary-btn w-100 my-4 '>LOGIN</button>
      </Link>
      <Link to='/' className=' text-center mt-2'>
        <p>Forgot password?</p>
      </Link>
    </div>
  )
}

export default Login
