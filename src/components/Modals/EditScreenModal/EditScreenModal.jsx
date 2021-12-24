import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import InputRange from 'react-input-range'

const EditScreenModal = ({ show, handleClose }) => {
  const [selectedBtn, setSelectedBtn] = React.useState(true)
  const [rangeValue, setRangeValue] = useState({
    value: { min: 500, max: 1000 },
  })
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Edit Screen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='my-3'>
          <div className='plain-input my-3'>
            <label for=''> Screen Name</label>
            <br />
            <input type='text' placeholder='Screen Name' value={'screen 1'} />
          </div>
          <div className='screen-types my-3'>
            <p className='fw-bold mb-2'>Screen Type</p>
            <button
              className={
                selectedBtn ? 'primary-btn-light me-2 ' : 'btn-white-bg me-2'
              }
              onClick={() => setSelectedBtn(!selectedBtn)}
            >
              Category Screen
            </button>
            <button
              className={
                selectedBtn ? 'btn-white-bg me-2' : 'primary-btn-light me-2'
              }
              onClick={() => setSelectedBtn(!selectedBtn)}
            >
              Click-n-Collect
            </button>
          </div>
          <div className='plain-dropdown my-3'>
            <label for=''>Product Count</label>
            <InputRange
              maxValue={2000}
              minValue={0}
              value={rangeValue.value}
              onChange={(value) => setRangeValue({ value })}
              style={{ padding: '0px 10px' }}
            />
          </div>
          <div className='plain-dropdown mt-4'>
            <label for=''>Layout Theme</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                Blue
              </option>
              <option value='2' selected>
                {' '}
                Green
              </option>
              <option value='3'> Tomato</option>
            </select>
          </div>
          <div className='plain-dropdown mt-3'>
            <label for=''>Categories of Products</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                Stock
              </option>
              <option value='2' selected>
                {' '}
                Bond
              </option>
            </select>
          </div>

          <div className='plain-input my-3'>
            <label for=''>Android ID (TV-Stick)</label>
            <br />
            <input
              type='text'
              placeholder='input something'
              value='sad23123Ad'
            />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Screen ID</label>
            <br />
            <input type='text' placeholder='12323213' value='QRT352' />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Screen Password</label>
            <br />
            <input type='text' placeholder='ads@33TqRt' value='newP@ss12' />
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
export default EditScreenModal
