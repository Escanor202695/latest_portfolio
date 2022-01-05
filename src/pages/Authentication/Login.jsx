import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GetAdminProfileUrl, LogInUrl } from '../../constants/api.constants'
import './Login.scss'
import Toast from '../../utils/Toast/Toast'
import { Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../Providers/AuthProvider'
import ForgotPassGetOTPModal from '../../components/Modals/ForgotPass/ForgotPassGetOTPModal'

const Login = () => {
  let location = useLocation()
  let { from } = location.state || { from: { pathname: '/' } }
  let history = useHistory()
  const auth = useAuth()

  console.log(auth)
  const [spin, setSpin] = useState(false)
  const [authValue, setAuthValue] = useState({
    email: 'super@admin.com',
    password: 'forgot',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (authValue.email === '') {
      Toast('err', 'Please enter your email')
      return
    }
    if (authValue.password === '') {
      Toast('err', 'Please enter your password')
      return
    }

    setSpin(true)
    try {
      const response = await axios.post(LogInUrl, {
        email: authValue.email,
        password: authValue.password,
      })
      const token = response.data.menuboard.token
      console.log(response)
      if (response.status === 200) {
        Toast('success', 'Successfully Logged In!')
        localStorage.setItem('menu_token', token)
        getAdminInfo(token)
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      setSpin(false)
      console.log(error)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  const getAdminInfo = async (token) => {
    try {
      const response = await axios.get(GetAdminProfileUrl, {
        headers: {
          menuboard: token,
        },
      })
      if (response.status === 200) {
        // console.log(response)
        auth.setUser(response.data.data)
        history.replace(from)
        setSpin(false)
      } else throw new Error(response?.data?.msg)
    } catch (error) {
      setSpin(false)
      Toast('err', error.response?.data?.msg)
    }
  }

  const [forgotPassModal, setForgotPassModal] = useState(false)

  return (
    <div className='login-card  '>
      <h2 className='text-center fw-bold'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='plain-input mt-3 '>
          <label for=''>Email</label>
          <br />
          <input
            type='text'
            placeholder='enter your email'
            onChange={(e) =>
              setAuthValue({ ...authValue, email: e.target.value })
            }
            value={authValue.email}
          />
        </div>
        <div className='plain-input mt-3 '>
          <label for=''>Password</label>
          <br />
          <input
            type='password'
            placeholder='enter your password'
            onChange={(e) =>
              setAuthValue({ ...authValue, password: e.target.value })
            }
            value={authValue.password}
          />
        </div>

        <button
          className=' primary-btn w-100 my-4 d-flex justify-content-center align-items-center'
          type='submit'
        >
          LOGIN{' '}
          <Spinner
            animation='border'
            size='sm'
            className={spin ? 'd-block ms-2' : 'd-none ms-2'}
          />
        </button>
      </form>

      <p
        className=' text-center mt-2'
        style={{ color: 'var(--primary_color)', cursor: 'pointer' }}
        onClick={() => setForgotPassModal(true)}
      >
        Forgot password?
      </p>

      <ForgotPassGetOTPModal
        show={forgotPassModal}
        handleClose={() => setForgotPassModal()}
      />
    </div>
  )
}

export default Login
