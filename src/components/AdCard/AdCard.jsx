import React, { useState } from 'react'
import screenImg from '../../assets/images/screen-img.png'
import threedot from '../../assets/icons/threedot.svg'
import Frame from '../../assets/images/Frame.png'
import AddScreen from '../../assets/images/AddScreen.png'
import { Dropdown, Modal } from 'react-bootstrap'
import { EditAdModal } from '../Modals/EditAdModal'

const AdCard = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [adEdit, setAdEdit] = useState(false)

  return (
    <div className='my-3 d-flex justify-content-between align-items-start screen-section'>
      <div className=' d-flex justify-content-between align-items-start '>
        <img src={screenImg} alt='' className='me-3' />
        <img
          src={Frame}
          alt=''
          style={{
            position: 'relative',
            right: '10rem',
            top: '2.2rem',
            cursor: 'pointer',
          }}
          onClick={() => handleShow(true)}
        />
        <div className='ms-3 screen-right'>
          <h6 className='fw-bold'>Advertisement Name</h6>
          <h6>Product Manufacturer, Manufacturer Type</h6>
          <h6>Filetype: Image, Ad Type: Lorem</h6>
        </div>
      </div>
      <div>
        <Dropdown drop='start' style={{ cursor: 'pointer' }}>
          <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
            <img src={threedot} alt='' className='' />
          </Dropdown.Toggle>

          <Dropdown.Menu className='mt-4'>
            <Dropdown.Item onClick={() => setAdEdit(true)}>
              Edit Ad
            </Dropdown.Item>
            <Dropdown.Item href=''>show details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Modal show={show} onHide={handleClose} size='xl' centered>
        <img src={AddScreen} alt='' />
      </Modal>
      <EditAdModal show={adEdit} handleClose={() => setAdEdit()} />
    </div>
  )
}

export default AdCard
