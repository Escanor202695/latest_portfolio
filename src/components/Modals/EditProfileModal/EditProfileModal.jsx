import React from 'react'
import { Modal } from 'react-bootstrap'

const EditProfileModal = ({ show, handleClose }) => {
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
              value='Mohammad Lee'
            />
          </div>

          <div className='plain-input my-3'>
            <label for=''>Phone</label>
            <br />
            <input
              type='text'
              placeholder='Search something'
              value='01783092354'
            />
          </div>

          <div className='plain-input my-3'>
            <label for=''>Email</label>
            <br />
            <input
              type='text'
              placeholder='Search something'
              value='mohammadlee@email.com'
              disabled
            />
          </div>

          <div className='plain-dropdown '>
            <label for=''>Role </label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                Admin
              </option>
              <option value='2' selected>
                {' '}
                Super admin{' '}
              </option>
            </select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn' onClick={handleClose}>
          Update Changes
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditProfileModal
