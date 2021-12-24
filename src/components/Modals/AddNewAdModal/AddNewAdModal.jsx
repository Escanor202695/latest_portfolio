import React from 'react'
import { Modal } from 'react-bootstrap'
import demoImg from '../../../assets/images/demoLogoImg.png'
import uploadBtn from '../../../assets/icons/upload.svg'

const AddNewAdModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>
          Create New Advertisement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Images</h6>
        <div className='d-flex justify-content-start align-items-end'>
          <img
            src={demoImg}
            alt='demoImg'
            height='100'
            width='100'
            className='me-4'
          />
          <button className='upload-btn d-flex justify-content-between align-items-center'>
            <span>Upload</span>
            <img
              className='mx-2'
              src={uploadBtn}
              alt=''
              width='24'
              height='24'
            />{' '}
          </button>
        </div>
        <div className='my-3'>
          <div className='plain-input my-3'>
            <label for=''>Product Manufacturer</label>
            <br />
            <input type='text' placeholder='Search something' />
          </div>

          <div className='plain-dropdown '>
            <label for=''>Product Type</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                type 1
              </option>
              <option value='2'> type 2</option>
              <option value='3'> type 3</option>
            </select>
          </div>

          <div className='plain-dropdown mt-3'>
            <label for=''>Ad Type</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                type 1
              </option>
              <option value='2'> type 2</option>
              <option value='3'> type 3</option>
            </select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn' onClick={handleClose}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddNewAdModal
