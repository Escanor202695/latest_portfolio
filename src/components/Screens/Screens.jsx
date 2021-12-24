import React, { useState } from 'react'
import screenImg from '../../assets/images/screen-img.png'
import threedot from '../../assets/icons/threedot.svg'
import Frame from '../../assets/images/Frame.png'
import './Screens.scss'
import BoardView from '../../assets/images/BoardView.png'
import { Dropdown, Modal } from 'react-bootstrap'
import { EditScreenModal } from '../Modals/EditScreenModal'

const Screens = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [editScreen, setEditScreen] = useState(false)

  const goToScreen = (dt) => {
    setEditScreen(true)
  }

  return (
    <div className='my-3 d-flex justify-content-between align-items-start screen-section'>
      <div className=' d-flex justify-content-between align-items-start '>
        <div>
          <img src={screenImg} alt='' className='me-3' />
          <img
            src={Frame}
            alt=''
            style={{
              position: 'relative',
              right: '10rem',
              top: '.2rem',
              cursor: 'pointer',
            }}
            onClick={() => handleShow(true)}
          />
        </div>
        <div className='ms-3 screen-right'>
          <h6 className='fw-bold'>Screen 01:SCR 2323</h6>
          <h6>Category Screens</h6>
          <h6>
            Categories: CategoryName, CategoryName, CategoryName, CategoryName,{' '}
          </h6>
          <h6>Theme: ThemeName</h6>
          <h6>Android ID</h6>
        </div>
      </div>
      <div>
        <Dropdown drop='start' style={{ cursor: 'pointer' }}>
          <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
            <img src={threedot} alt='' className='' />
          </Dropdown.Toggle>

          <Dropdown.Menu className='mt-4'>
            <Dropdown.Item onClick={() => goToScreen()}>
              Edit Screen
            </Dropdown.Item>
            <Dropdown.Item href=''>show details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <img
          src={threedot}
          alt=''
          onClick={() => setEditScreen(true)}
          style={{ cursor: 'pointer' }}
        /> */}
      </div>
      <Modal show={show} onHide={handleClose} size='xl' centered>
        <img src={BoardView} alt='' />
      </Modal>
      <EditScreenModal show={editScreen} handleClose={() => setEditScreen()} />
    </div>
  )
}

export default Screens
