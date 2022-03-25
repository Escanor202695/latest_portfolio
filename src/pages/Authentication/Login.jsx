import axios from 'axios'
import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import ForgotPassGetOTPModal from '../../components/Modals/ForgotPass/ForgotPassGetOTPModal'
import {
  GetAdminProfileUrl,
  LogInUrl,
  StoreLogInUrl,
} from '../../constants/api.constants'
import { useAuth } from '../../Providers/AuthProvider'
import Toast from '../../utils/Toast/Toast'
import './Login.scss'

const Login = () => {
  let location = useLocation()
  let { from } = location.state || { from: { pathname: '/' } }
  let history = useHistory()
  const auth = useAuth()
  const [loginAs, setLoginAs] = useState('admin')

  const [spin, setSpin] = useState(false)
  const [authValue, setAuthValue] = useState({
    email: '',
    password: '',
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
    let url = LogInUrl
    if (loginAs === 'manager') {
      url = StoreLogInUrl
    }
    try {
      const response = await axios.post(url, {
        email: authValue.email,
        password: authValue.password,
      })
      const token = response.data.menuboard.token

      if (response.status === 200) {
        Toast('success', 'Successfully Logged In!')
        if (loginAs === 'admin') {
          localStorage.setItem('menu_token', token)
          getAdminInfo(token)
        } else {
          localStorage.setItem('store_token', token)
          localStorage.setItem(
            'store_info',
            JSON.stringify(response?.data?.menuboard?.store)
          )

          setSpin(false)
          history.push('/store')
        }
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      setSpin(false)

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
      <h2 className='text-center fw-bold'>
        Login {loginAs === 'admin' ? 'As Admin' : 'In Store'}
      </h2>
      {/* <div className='d-flex justify-content-between align-items-center'>
        <button
          className={
            loginAs === 'admin'
              ? 'primary-btn me-2 w-50'
              : 'primary-btn-light me-2 w-50'
          }
          onClick={() => setLoginAs('admin')}
        >
          Login as Admin
        </button>
        <button
          onClick={() => setLoginAs('manager')}
          className={
            loginAs === 'admin'
              ? 'primary-btn-light me-2 w-50'
              : 'primary-btn me-2 w-50'
          }
        >
          Login in Store
        </button>
      </div> */}

      <form onSubmit={handleSubmit}>
        <div className='plain-input mt-3 '>
          <label for=''> {loginAs === 'admin' ? 'User' : 'Store'} Email</label>
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
          <label for=''>
            {loginAs === 'admin' ? 'User' : 'Store'} Password
          </label>
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
        className=' text-center mt-2 '
        style={{
          color: 'var(--primary_color)',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
        onClick={() => setLoginAs(loginAs === 'admin' ? 'manager' : 'admin')}
      >
        Login {loginAs === 'admin' ? 'In Store' : 'As Admin'}
      </p>

      {loginAs === 'admin' && (
        <p
          className=' text-center mt-2'
          style={{
            color: 'var(--primary_color)',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() => setForgotPassModal(true)}
        >
          Forgot password?
        </p>
      )}
      <ForgotPassGetOTPModal
        show={forgotPassModal}
        handleClose={() => setForgotPassModal()}
      />
    </div>
  )
}

export default Login
