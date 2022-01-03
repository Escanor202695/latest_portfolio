import React from 'react'
import { Modal } from 'react-bootstrap'
const AdminDetails = ({ show, handleClose, data }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header style={{ border: 'none' }}>
        <Modal.Title>Admin Details </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-secondary'>
        <div className='d-flex justify-content-between align-items-center '>
          <h4 className='fw-bold'>Name: </h4>
          <h4>{data.name}</h4>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className='fw-bold'>Email: </h4>
          <h4>{data.email}</h4>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className='fw-bold'>Phone: </h4>
          <h4>{data.phone}</h4>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className='fw-bold'>Role: </h4>
          <h4>{data.role}</h4>
        </div>
        {/* <div className='d-flex justify-content-between align-items-center'>
          <h4 className='fw-bold'>Password: </h4>
          <h4>{data.password}</h4>
        </div> */}
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className='fw-bold'>Joining Date: </h4>
          <h4>23-12-2012</h4>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn ' onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default AdminDetails
