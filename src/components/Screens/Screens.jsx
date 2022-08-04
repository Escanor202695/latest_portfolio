import { useState } from 'react'
import { Dropdown, Modal } from 'react-bootstrap'
import threedot from '../../assets/icons/threedot.svg'
import Frame from '../../assets/images/Frame.png'
import ScrnImg from '../../assets/images/screen-img.png'
import { DeleteScreenModal } from '../Modals/DeleteScreenModal'
import { EditScreenModal } from '../Modals/EditScreenModal'
import './Screens.scss'

const Screens = ({ screen, loadStoreScreen, editEnable }) => {
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
        <div
          className='preview-bg '
          style={{
            backgroundImage: `url('${screen?.preview || ScrnImg}')`,
          }}
        >
          {screen?.preview ? (
            <img
              src={Frame}
              alt=''
              style={{
                // position: 'relative',
                // right: '10rem',
                // top: '.2rem',
                cursor: 'pointer',
              }}
              onClick={() => handleShow(true)}
            />
          ) : (
            <h6 className='fw-bold text-white'>No Preview</h6>
          )}
        </div>
        <div className='ms-3 screen-right'>
          <h6 className='fw-bold'>{screen?.screen_name}</h6>
          <h6>
            Categories:{' '}
            {screen?.category?.map((c, idx) =>
              idx !== 0
                ? ', ' +
                  c?.name +
                  `(${c?.product_count_end - c?.product_count_start})`
                : c?.name + `(${c?.product_count_end - c?.product_count_start})`
            )}
          </h6>
          <h6>Theme: {screen?.theme_id?.name}</h6>
          <h6> Unique Id: {screen?.unique_id}</h6>
        </div>
      </div>
      {editEnable && (
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
        </div>
      )}
      <Modal show={show} onHide={handleClose} size='xl' centered>
        <img src={screen?.preview} alt='' />
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
