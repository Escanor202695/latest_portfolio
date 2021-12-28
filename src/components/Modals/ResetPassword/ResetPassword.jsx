import React from 'react'
import { Modal } from 'react-bootstrap'

const ResetPassword = ({ show, handleClose }) => {
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
            <input type='password' placeholder='' value='Mohammad Lee' />
          </div>

          <div className='plain-input my-3'>
            <label for=''>New Password</label>
            <br />
            <input type='password' placeholder='' value='' />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn' onClick={handleClose}>
          Update Password
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default ResetPassword
