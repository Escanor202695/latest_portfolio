import React from 'react'
import { Modal } from 'react-bootstrap'
import demoImg from '../../../assets/images/demoLogoImg.png'
import uploadBtn from '../../../assets/icons/upload.svg'
//comment
const EditStoreModal = ({ show, handleClose, data }) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Edit Store</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Store Brand Icon / Logo</h6>
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
            <label for=''>Store Name</label>
            <br />
            <input
              type='text'
              value={data?.name}
              placeholder='Search something'
            />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Manager / Owner Name</label>
            <br />
            <input
              type='text'
              value={data?.ownerName}
              placeholder='Search something'
            />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Manager / Owner Phone</label>
            <br />
            <input
              type='text'
              value={data?.ownerPhone}
              placeholder='Search something'
            />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Manager / Owner Email</label>
            <br />
            <input
              type='text'
              value={data?.ownerEmail}
              placeholder='Search something'
            />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Address / Location</label>
            <br />
            <input
              type='text'
              value={data?.address}
              placeholder='Search something'
            />
          </div>
          <div className='plain-textarea my-3'>
            <label for=''>Tags</label>
            <br />
            <textarea rows='3' cols=''></textarea>
            {/* <span className='m-1'>tag 1</span>
        <span className='m-1'>tag 1</span> */}
          </div>
          <div className='plain-dropdown '>
            <label for=''>Type</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                primary{' '}
              </option>
              <option value='2'> secondary</option>
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

export default EditStoreModal
