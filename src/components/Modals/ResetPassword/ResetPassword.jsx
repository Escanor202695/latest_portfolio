import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { ChangePasswordEnd } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const ResetPassword = ({ show, handleClose }) => {
  const [spinner, setSpinner] = useState(false)
  const [pass, setPass] = useState('')
  const [newPass, setNewPass] = useState('')

  const handleSubmit = async () => {
    setSpinner(true)

    if (pass === '' || newPass === '') {
      Toast('err', 'Password cant be empty')
      setSpinner(false)
      return
    }

    if (newPass.length < 5) {
      Toast('err', 'At Least 5 characters required for password')
      setSpinner(false)
      return
    }

    try {
      const response = await axios.put(
        ChangePasswordEnd,
        {
          password: pass,
          new_password: newPass,
        },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )
      // console.log(response)
      if (response.status === 200) {
        Toast('success', 'Password updated!')
        handleClose()
        setSpinner(false)
        setPass('')
        setNewPass('')
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      setPass('')
      setNewPass('')
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
        <Modal.Title style={{ fontSize: '22px' }}>Reset Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='mb-3'>
          <div className='plain-input my-3'>
            <label for=''>Current Password</label>
            <br />
            <input
              type='password'
              value={pass}
              placeholder='input current password'
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className='plain-input my-3'>
            <label for=''>New Password</label>
            <br />
            <input
              type='password'
              placeholder='minimum length 5 characters'
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            {newPass.length > 0 && newPass.length < 5 && (
              <p className='text-danger'>minimum password length is 5</p>
            )}
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

export default ResetPassword
