import React from 'react'
import { Modal } from 'react-bootstrap'

const NewAdminModal = ({ show, handleClose }) => {
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
            // onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <div className='plain-input me-2 mt-2'>
          <label for=''>Email</label>
          <br />
          <input
            type='email'
            placeholder='email@email.com'
            // onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <div className='plain-input me-2 mt-2'>
          <label for=''>Password</label>
          <br />
          <input
            type='password'
            placeholder='minimum length 8'
            // onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
        <div className='plain-input me-2 mt-2'>
          <label for=''>Re-Type Password</label>
          <br />
          <input
            type='password'
            placeholder='re-type your password'
            // onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light ' onClick={handleClose}>
          Cancel
        </button>
        <button className='primary-btn ' onClick={handleClose}>
          Add Admin
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default NewAdminModal
