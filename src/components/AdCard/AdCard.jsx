import React, { useState } from 'react'
import screenImg from '../../assets/images/screen-img.png'
import threedot from '../../assets/icons/threedot.svg'
import Frame from '../../assets/images/Frame.png'
import AddScreen from '../../assets/images/AddScreen.png'
import { Dropdown, Modal } from 'react-bootstrap'
import { EditAdModal } from '../Modals/EditAdModal'
import { useEffect } from 'react'

const AdCard = ({ ad, index }) => {
  console.log(ad)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [adEdit, setAdEdit] = useState(false)
  console.log(ad)

  return (
    <div className='my-3 d-flex justify-content-between align-items-start screen-section'>
      <div className=' d-flex justify-content-between align-items-center '>
        <h5 className='me-2'>{index}. </h5>
        <img
          src={ad?.ad_id?.link || screenImg}
          alt=''
          className='me-3'
          width='240px'
          height='100px'
        />
        {/* <img
          src={Frame}
          alt=''
          style={{
            position: 'relative',
            right: '10rem',
            top: '2.2rem',
            cursor: 'pointer',
          }}
          // onClick={() => handleShow(true)}
        /> */}
        <div className='ms-3 screen-right'>
          <h6 className='fw-bold'>{ad?.ad_id?.name}</h6>
          <h6 style={{ color: 'dimgray' }}>{ad?.ad_id?.description}</h6>
        </div>
      </div>
      {/* <div>
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
      </div> */}
      <Modal show={show} onHide={handleClose} size='xl' centered>
        <img src={AddScreen} alt='' />
      </Modal>
      <EditAdModal show={adEdit} handleClose={() => setAdEdit()} />
    </div>
  )
}

export default AdCard
