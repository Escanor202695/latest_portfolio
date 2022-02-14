import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { ChangeOthersPassEnd } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const ResetOtherPassModal = ({ show, handleClose, data }) => {
  const [spinner, setSpinner] = useState(false)
  const [myPass, setMyPass] = useState('')
  const [newPass, setNewPass] = useState('')

  const handleSubmit = async () => {
    setSpinner(true)

    if (myPass === '' || newPass === '') {
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
        ChangeOthersPassEnd,
        {
          id: data?._id,
          password: myPass,
          new_password: newPass,
        },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )

      if (response.status === 200) {
        Toast('success', 'Password updated!')
        handleClose()
        setSpinner(false)
        setMyPass('')
        setNewPass('')
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      setMyPass('')
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
        <Modal.Title style={{ fontSize: '22px' }}>
          Reset Password Of {data?.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='mb-3'>
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

          <div className='plain-input my-3'>
            <label for=''>Your Password</label>
            <br />
            <input
              type='password'
              value={myPass}
              placeholder='input current password'
              onChange={(e) => setMyPass(e.target.value)}
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

export default ResetOtherPassModal
