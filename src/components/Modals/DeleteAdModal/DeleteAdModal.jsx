import axios from 'axios'
import React, { useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { DeleteAdEnd } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const DeleteAdModal = ({ show, handleClose, ad, loadAllFolders }) => {
  const [spinner, setSpinner] = useState(false)

  const handleDeleteAd = async () => {
    setSpinner(true)
    try {
      const response = await axios.delete(DeleteAdEnd + `?_id=${ad?._id}`, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      if (response.status === 200) {
        Toast('success', 'Ad Deleted successfully!')
        loadAllFolders(ad?._id)
        setSpinner(false)
        handleClose()
      } else throw new Error(response.data?.msg || 'Try again later!')
    } catch (error) {
      Toast('err', error?.data?.msg)
      setSpinner(false)
      handleClose()
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Delete AD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are You sure to delete {ad?.name}?</h4>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light' onClick={handleClose}>
          Cancel
        </button>
        <button className='primary-btn' onClick={() => handleDeleteAd()}>
          Confirm{' '}
          {spinner && <Spinner animation='border' size='sm' className='ms-2' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteAdModal
