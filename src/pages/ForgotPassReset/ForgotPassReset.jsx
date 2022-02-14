import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { ForgotPassSetPassEnd } from '../../constants/api.constants'
import Toast from '../../utils/Toast/Toast'

const ForgotPassReset = () => {
  const [spin, setSpin] = useState(false)
  const [email, setEmail] = useState('')
  const [OTP, setOTP] = useState('')
  const [pass, setPass] = useState('')

  let history = useHistory()

  const handleSubmit = async () => {
    setSpin(true)

    if (email === '') {
      Toast('err', 'email cant be empty')
      setSpin(false)
      return
    }

    try {
      const response = await axios.put(
        ForgotPassSetPassEnd,
        {
          email: email,
          otp: OTP,
          password: pass,
        },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )

      if (response.status === 200) {
        Toast('success', 'New Password Set!')
        setSpin(false)
        setEmail('')
        history.push('/login')
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      setEmail('')
      setSpin(false)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  return (
    <div className='login-card  '>
      <h2 className='text-center fw-bold'>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className='plain-input mt-3 '>
          <label for=''>Email</label>
          <br />
          <input
            type='text'
            placeholder='enter your email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='plain-input mt-3 '>
          <label for=''>OTP</label>
          <br />
          <input
            type='text'
            placeholder='enter your OTP'
            onChange={(e) => setOTP(e.target.value)}
            value={OTP}
          />
        </div>
        <div className='plain-input mt-3 '>
          <label for=''>New Password</label>
          <br />
          <input
            type='password'
            placeholder='enter your password'
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>

        <button
          className=' primary-btn w-100 my-4 d-flex justify-content-center align-items-center'
          type='submit'
        >
          Reset Password{' '}
          <Spinner
            animation='border'
            size='sm'
            className={spin ? 'd-block ms-2' : 'd-none ms-2'}
          />
        </button>
      </form>
    </div>
  )
}

export default ForgotPassReset
