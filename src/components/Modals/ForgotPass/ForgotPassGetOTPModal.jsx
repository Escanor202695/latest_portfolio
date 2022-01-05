import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {
  ChangePasswordEnd,
  ForgotPassGetOTPEnd,
} from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const ForgotPassGetOTPModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState('')
  const [spinner, setSpinner] = useState(false)
  let history = useHistory()

  const handleSubmit = async () => {
    setSpinner(true)

    if (email === '') {
      Toast('err', 'email cant be empty')
      setSpinner(false)
      return
    }

    try {
      const response = await axios.put(
        ForgotPassGetOTPEnd,
        {
          email: email,
        },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )
      console.log(response)
      if (response.status === 200) {
        Toast('success', 'OTP HAS BEEN SENT TO YOUR EMAIL!')
        handleClose()
        setSpinner(false)
        setEmail('')
        history.push('/forgot-pass-reset')
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      setEmail('')
      handleClose()
      setSpinner(false)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  return (
    <Modal show={show} onHide={handleClose} size='md'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='mb-3'>
          <div className='plain-input my-3'>
            <label for=''>Enter Your Email</label>
            <br />
            <input
              type='email'
              value={email}
              placeholder='abc@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button
          className='primary-btn d-flex justify-content-center align-items-center'
          onClick={() => handleSubmit()}
        >
          Update Password{' '}
          <Spinner
            animation='border'
            size='sm'
            className={spinner ? 'd-block ms-2' : 'd-none ms-2'}
          />
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default ForgotPassGetOTPModal
