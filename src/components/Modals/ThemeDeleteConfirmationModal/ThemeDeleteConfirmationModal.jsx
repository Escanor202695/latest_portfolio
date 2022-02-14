import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { DeleteThemeEnd } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const ThemeDeleteConfirmationModal = ({
  show,
  handleClose,
  getAllTheme,
  id,
  name,
}) => {
  const [spinner, setSpinner] = useState(false)
  const handleDeleteTheme = async () => {
    setSpinner(true)

    try {
      const res = await axios.delete(DeleteThemeEnd + `?_id=${id}`, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      if (res.status === 200) {
        Toast('success', 'Theme Deleted Successfully!')
        getAllTheme()
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
        Are you sure you want to Delete <span className='fw-bold'>{name}</span>{' '}
        Theme?
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light ' onClick={handleClose}>
          No
        </button>
        <button className='primary-btn ' onClick={handleDeleteTheme}>
          Yes {spinner && <Spinner animation='border' size='sm' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default ThemeDeleteConfirmationModal
