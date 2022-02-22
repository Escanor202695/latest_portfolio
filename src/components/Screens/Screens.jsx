import React, { useState } from 'react'
import screenImg from '../../assets/images/screen-img.png'
import threedot from '../../assets/icons/threedot.svg'
import Frame from '../../assets/images/Frame.png'
import './Screens.scss'
import BoardView from '../../assets/images/BoardView.png'
import { Dropdown, Modal } from 'react-bootstrap'
import { EditScreenModal } from '../Modals/EditScreenModal'
import { DeleteScreenModal } from '../Modals/DeleteScreenModal'

const Screens = ({ screen, loadStoreScreen }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleCloseForDeleteModal = () => setShowDeleteModal(false)

  const [editScreen, setEditScreen] = useState(false)

  const goToScreen = () => {
    setEditScreen(true)
  }

  return (
    <div className='my-3 d-flex justify-content-between align-items-start screen-section'>
      <div className=' d-flex justify-content-between align-items-start '>
        <div className='preview-bg '>
          {/* <img src={screenImg} alt='' className='me-3' /> */}
          <img
            src={Frame}
            alt=''
            style={{
              // position: 'relative',
              // right: '10rem',
              // top: '.2rem',
              cursor: 'pointer',
            }}
            // onClick={() => handleShow(true)}
          />
        </div>
        <div className='ms-3 screen-right'>
          <h6 className='fw-bold'>{screen?.screen_name}</h6>
          <h6>
            Categories:{' '}
            {screen?.category_names?.map((c, idx) =>
              idx !== 0 ? ', ' + c : c
            )}
          </h6>
          <h6>Theme: {screen?.theme_id?.name}</h6>
          <h6> Unique Id: {screen?.unique_id}</h6>
        </div>
      </div>
      <div>
        <Dropdown drop='start' style={{ cursor: 'pointer' }}>
          <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
            <img src={threedot} alt='' className='' />
          </Dropdown.Toggle>

          <Dropdown.Menu className='mt-4'>
            <Dropdown.Item className='fw-bold ' onClick={() => goToScreen()}>
              Edit Screen
            </Dropdown.Item>
            <Dropdown.Item
              className='fw-bold text-danger'
              onClick={() => setShowDeleteModal(true)}
            >
              Delete
            </Dropdown.Item>
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
      <EditScreenModal
        show={editScreen}
        handleClose={() => setEditScreen()}
        data={screen}
        loadStoreScreen={loadStoreScreen}
      />
      <DeleteScreenModal
        show={showDeleteModal}
        handleClose={handleCloseForDeleteModal}
        loadStoreScreen={loadStoreScreen}
        data={screen}
      />
    </div>
  )
}

export default Screens
