import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { AdminEdit } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const EditProfileModal = ({ show, handleClose, data, getAdminInfo }) => {
  const [spinner, setSpinner] = useState(false)
  const [adminData, setAdminData] = useState({})

  useEffect(() => {
    setAdminData({
      name: data?.name,
      phone: data?.phone,
    })
  }, [data])

  const handleSubmit = async () => {
    setSpinner(true)

    if (adminData.name === '') {
      Toast('err', 'Please enter your name')
      setSpinner(false)

      return
    }
    if (adminData.phone === '') {
      Toast('err', 'Please enter your phone')
      setSpinner(false)

      return
    }
    try {
      const response = await axios.put(AdminEdit, adminData, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      // console.log(response)
      if (response.status === 200) {
        Toast('success', 'User Updated updated!')
        handleClose()
        setSpinner(false)
        getAdminInfo()
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      handleClose()
      setSpinner(false)
      getAdminInfo()
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

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
              value={adminData?.phone}
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

export default EditProfileModal
