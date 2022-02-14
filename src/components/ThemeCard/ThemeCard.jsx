import React from 'react'
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'
import threedot from '../../assets/icons/threedot.svg'
import { useState } from 'react'
import { EditTheme } from '../Modals/EditTheme'
import { ThemeDeleteConfirmationModal } from '../Modals/ThemeDeleteConfirmationModal'
const ThemeCard = ({ theme, getAllTheme }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleCloseForDeleteModal = () => setShowDeleteModal(false)

  return (
    <div className=' my-3 row align-items-center ad-card mx-1 justify-content-between'>
      <div className='col-2'>
        <h4 className='me-1'>{theme?.name}</h4>
      </div>
      <div className='col-3 ms-2'>
        <img
          className='me-2'
          src={theme?.background_image}
          alt='background'
          height='100px'
          width='180px'
        />
      </div>
      <div className='col '>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(25px, 1fr))',
            gridGap: '16px',
            margin: '0px auto',
            width: '100%',
          }}
        >
          {Object.keys(theme)?.map(
            (key, idx) =>
              key !== 'background_image' &&
              key !== 'name' &&
              key !== '__v' &&
              key !== '_id' && (
                <OverlayTrigger overlay={<Tooltip>{key}</Tooltip>} key={idx}>
                  <span
                    style={{
                      height: '1.5rem',
                      width: '1.5rem',
                      backgroundColor: theme[key],
                      border: '1px solid gray',
                    }}
                    className='mx-3'
                  ></span>
                </OverlayTrigger>
              )
          )}
        </div>
      </div>

      <div className='col-1 ms-2'>
        <div style={{ height: '100%' }}>
          <Dropdown drop='start' style={{ cursor: 'pointer' }}>
            <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
              <img src={threedot} alt='' className='' />
            </Dropdown.Toggle>

            <Dropdown.Menu className='mt-4'>
              <Dropdown.Item className='fw-bold' onClick={() => setShow(true)}>
                Edit Theme
              </Dropdown.Item>
              <Dropdown.Item
                className='text-danger fw-bold'
                onClick={() => setShowDeleteModal(true)}
              >
                Delete{' '}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <EditTheme
        data={theme}
        show={show}
        handleClose={handleClose}
        getAllTheme={getAllTheme}
      />
      <ThemeDeleteConfirmationModal
        show={showDeleteModal}
        handleClose={handleCloseForDeleteModal}
        getAllTheme={getAllTheme}
        id={theme?._id}
        name={theme?.name}
      />
    </div>
  )
}

export default ThemeCard
