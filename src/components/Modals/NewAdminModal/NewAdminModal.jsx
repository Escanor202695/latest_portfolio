import axios from 'axios'
import React, { useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { CreateAdmin } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const NewAdminModal = ({ show, handleClose, loadAllAdmin }) => {
  const [spinner, setSpinner] = useState(false)
  const [data, setData] = useState({
    email: '',
    name: '',
    role: 'manager',
    phone: '',
    password: '',
  })
  const [passRetype, setPassReType] = useState('')

  const handleSubmit = async () => {
    if (data.name === '') {
      Toast('err', 'Please enter your name')
      setSpinner(false)
      return
    }
    if (data.email === '') {
      Toast('err', 'Please enter a valid email')
      setSpinner(false)

      return
    }
    if (data.phone === '') {
      Toast('err', 'Please enter phone number')
      return
    }

    if (data.password === '') {
      Toast('err', 'Please enter a valid password')
      return
    }
    if (data.role === '') {
      Toast('err', 'Please enter role')
      return
    }

    if (passRetype !== data.password) {
      Toast('err', 'Password and confirm password are not same')
      setSpinner(false)

      return
    }
    setSpinner(true)

    try {
      const response = await axios.post(CreateAdmin, data)

      if (response.status === 200) {
        Toast('success', 'Admin Created!')
        handleClose()
        setSpinner(false)
        loadAllAdmin()
        setData({
          email: '',
          name: '',
          role: 'manager',
          phone: '',
          password: '',
        })
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      // handleClose()
      setSpinner(false)

      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title>Add New Admin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {' '}
        <div className='plain-input me-2'>
          <label for=''>Full Name</label>
          <br />
          <input
            type='text'
            placeholder='please enter your name'
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className='plain-input me-2 mt-2'>
          <label for=''>Email</label>
          <br />
          <input
            type='email'
            placeholder='email@email.com'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className='plain-input me-2 mt-2'>
          <label for=''>Phone</label>
          <br />
          <input
            type='text'
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <div className='plain-dropdown  mt-2'>
          <label for=''>Role</label>
          <select onChange={(e) => setData({ ...data, role: e.target.value })}>
            <option value='manager'>manager</option>
            <option value='admin'>admin</option>
            <option value='super_admin'>super admin</option>{' '}
          </select>
        </div>
        <div className='plain-input me-2 mt-2'>
          <label for=''>Password</label>
          <br />
          <input
            type='password'
            placeholder='minimum length 5'
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {data.password.length > 0 && data.password.length < 5 && (
            <p className='text-danger'> at least 5 characters required!</p>
          )}
        </div>
        <div className='plain-input me-2 mt-2'>
          <label for=''>Re-Type Password</label>
          <br />
          <input
            type='password'
            placeholder='re-type your password'
            onChange={(e) => setPassReType(e.target.value)}
          />
          {passRetype.length > 0 && passRetype !== data.password && (
            <p className='text-danger'>password not matched!</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light ' onClick={handleClose}>
          Cancel
        </button>
        <button
          className='primary-btn d-flex justify-content-between align-items-center'
          onClick={() => handleSubmit()}
        >
          Add Admin{' '}
          <Spinner
            className={spinner ? 'd-block ms-2' : 'd-none ms-2'}
            animation='border'
            size='sm'
          />
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default NewAdminModal
