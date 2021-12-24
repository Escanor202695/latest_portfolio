import React, { useState } from 'react'
import screenImg from '../../assets/images/screen-img.png'
import threedot from '../../assets/icons/threedot.svg'
import './AdCards.scss'
import Frame from '../../assets/images/Frame.png'
import { Dropdown, Modal } from 'react-bootstrap'
import Menues from '../../assets/images/menus.png'
import { EditAdModal } from '../../components/Modals/EditAdModal'
const AdCards = () => {
  const [show, setShow] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className='my-3 row ad-card '>
      <div
        className='col-6 d-flex justify-content-between align-items-center '
        style={{ borderRight: '2px solid #CCCCCC' }}
      >
        <h4 className='me-2'>1</h4>
        <div className='mx-3  preview-bg '>
          {/* <img src={screenImg} alt='' className='me-3' /> */}
          <img
            src={Frame}
            alt=''
            className=''
            onClick={() => handleShow(true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='pe-5'>
          <h6 className='fw-bold'>Advertisement Name</h6>
          <h6 style={{ fontWeight: 'normal' }}>
            Product Manufacturer, Manufacturer Type
          </h6>
          <h6 style={{ fontWeight: 'normal' }}>
            Filetype: Image, Ad Type: Lorem
          </h6>
        </div>
      </div>
      <div className='col-6 d-flex justify-content-between align-items-center'>
        <div className='mx-2  text-center '>
          <h3>43</h3>
          <p>Storefronts</p>
        </div>
        <div className='mx-2 text-center'>
          <h3>4543</h3>
          <p>Views / Per Day</p>
        </div>
        <div className='mx-2 text-center'>
          <h3>$2324.12</h3>
          <p>Ad Revenue</p>
        </div>
        <div style={{ height: '100%' }}>
          {/* <img src={threedot} alt='' /> */}
          <Dropdown drop='start' style={{ cursor: 'pointer' }}>
            <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
              <img src={threedot} alt='' className='' />
            </Dropdown.Toggle>

            <Dropdown.Menu className='mt-4'>
              <Dropdown.Item
                href='#/action-1'
                onClick={() => setEditModal(true)}
              >
                Edit Ad
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size='xl' centered>
        <img src={Menues} alt='' />
      </Modal>
      <EditAdModal show={editModal} handleClose={() => setEditModal()} />
    </div>
  )
}

export default AdCards
