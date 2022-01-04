import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { AdminEdit, ChangeRole } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'
const EditOthersProfileModal = ({ show, handleClose, data, loadAdmin }) => {
  console.log(data)
  const [spinner, setSpinner] = useState(false)
  const [adminData, setAdminData] = useState({
    name: '',
    phone: null,
  })
  console.log(adminData)
  const [role, setRole] = useState(data?.effective_role)

  const updateRole = async () => {
    try {
      const response = await axios.put(
        ChangeRole,
        {
          id: data?._id,
          role: role,
        },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )
      if (response.status === 200) {
        Toast('success', 'Role Updated!')
        return true
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
      return error
    }
  }

  const handleSubmit = async () => {
    setSpinner(true)

    if (adminData.name === '') {
      Toast('err', 'Please enter your name')
      return
    }
    if (adminData.phone === '') {
      Toast('err', 'Please enter your phone')
      return
    }
    updateRole()
    try {
      const response = await axios.put(AdminEdit, adminData, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      console.log(response)
      if (response.status === 200) {
        Toast('success', 'Admin updated!')
        handleClose()
        setSpinner(false)
        loadAdmin()
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      handleClose()
      setSpinner(false)
      loadAdmin()
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }
  console.log(adminData)

  return (
    <Modal show={show} onHide={handleClose} size='md'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='mb-3'>
          <div className='plain-input my-3'>
            <label for=''>User Name</label>
            <br />
            <input
              type='text'
              placeholder='Search something'
              value={adminData.name}
              onChange={(e) =>
                setAdminData({ ...adminData, name: e.target.value })
              }
            />
          </div>

          <div className='plain-input my-3'>
            <label for=''>Phone</label>
            <br />
            <input
              type='text'
              placeholder='Search something'
              value={adminData.phone}
              onChange={(e) =>
                setAdminData({ ...adminData, phone: e.target.value })
              }
            />
          </div>

          <div className='plain-input my-3'>
            <label for=''>Email</label>
            <br />
            <input
              type='text'
              placeholder='Search something'
              value={data?.email}
              disabled
            />
          </div>

          <div className='plain-dropdown '>
            <label for=''>Role </label>
            <select onChange={(e) => setRole(e.target.value)}>
              <option
                value='manager'
                selected={data.effective_role === 'manager' ? true : false}
              >
                manager
              </option>
              <option
                value='admin'
                selected={data.effective_role === 'admin' ? true : false}
              >
                {' '}
                admin
              </option>
              <option
                value='super_admin'
                selected={data.effective_role === 'super_admin' ? true : false}
              >
                {' '}
                super admin{' '}
              </option>
            </select>
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
          Update Changes{' '}
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

export default EditOthersProfileModal
