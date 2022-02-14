import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { DeleteScreenEnd } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const DeleteScreenModal = ({ show, handleClose, loadStoreScreen, data }) => {
  const [spinner, setSpinner] = useState(false)
  const handleDeleteScreen = async () => {
    setSpinner(true)

    try {
      const res = await axios.delete(DeleteScreenEnd + `?_id=${data?._id}`, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      if (res.status === 200) {
        Toast('success', 'Screen Deleted Successfully!')
        loadStoreScreen()
        handleClose()
      } else throw new Error(res?.data?.msg || 'Try again later')
    } catch (error) {
      setSpinner(false)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
      handleClose()
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header style={{ border: 'none' }}>
        <Modal.Title className='text-danger'> Caution! </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-secondary'>
        Are you sure you want to Delete{' '}
        <span className='fw-bold'>{data?.screen_name}</span> Screen?
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light ' onClick={handleClose}>
          No
        </button>
        <button className='primary-btn ' onClick={handleDeleteScreen}>
          Yes {spinner && <Spinner animation='border' size='sm' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteScreenModal
