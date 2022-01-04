import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'

const EditScheduleModal = ({ show, hide }) => {
  const [duration, setDuration] = useState(0)
  const [interval, setInterval] = useState(0)
  return (
    <Modal show={show} onHide={hide} size='md'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Edit Schedule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='my-3'>
          <Form.Label className='fw-bold'>Duration Of Each AD</Form.Label>
          <Form.Range
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <div className='plain-input my-3'>
            <input type='text' placeholder=' ' value={duration} />
            <span
              style={{
                position: 'relative',
                color: 'dimgray',
                left: '85%',
                top: '-35px',
              }}
            >
              seconds
            </span>
          </div>
          <Form.Label className='fw-bold'>Interval Between Ads</Form.Label>
          <Form.Range
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
          />
          <div className='plain-input my-3'>
            <input type='text' placeholder='' value={interval} />
            <span
              style={{
                position: 'relative',
                color: 'dimgray',
                left: '85%',
                top: '-35px',
              }}
            >
              seconds
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='primary-btn-light' onClick={hide}>
          Close
        </button>
        <button className='primary-btn' onClick={hide}>
          Save Schedule
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditScheduleModal
