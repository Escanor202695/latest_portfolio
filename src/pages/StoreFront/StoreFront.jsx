import React, { useState } from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'
import './StoreFront.scss'
import plus from '../../assets/icons/plus.svg'
import Screens from '../../components/Screens/Screens'
import { Modal } from 'react-bootstrap'
import demoImg from '../../assets/images/demoLogoImg.png'
import uploadBtn from '../../assets/icons/upload.svg'
import { EditScheduleModal } from '../../components/Modals/EditScheduleModal'

const StoreFront = () => {
  const [show, setShow] = React.useState(false)
  const [selectedBtn, setSelectedBtn] = React.useState(true)
  const [newStoreModal, setNewStoreModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fw-bold'>Storefront Name</h3>
          <button
            className='primary-btn d-flex justify-content-center align-items-center '
            onClick={handleShow}
          >
            <img className='me-3' src={plus} alt='' /> Create New Store
          </button>
        </div>
        <h5 className='mt-4 fw-bold'>Store Details</h5>

        <section className='store-details d-flex justify-content-between align-items-start'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='me-5 custom-header'>
              <h6>Store name</h6>
              <h6>Store Type</h6>
              <h6>Manager</h6>
              <h6>Phone</h6>
              <h6>Email</h6>
              <h6>Address</h6>
              <h6>Tags</h6>
            </div>
            <div className='ms-5'>
              <h6>{'Store name'}</h6>
              <h6>{'Type name'}</h6>
              <h6>{'Mr X'}</h6>
              <h6>{'01783092354'}</h6>
              <h6>{'skza45@gmail.com'}</h6>
              <h6>{'Toronto, Ontario, Canada'}</h6>
              <h6>{'tag1, tag2, tag3'}</h6>
            </div>
          </div>
          <button className='primary-btn-light'>Edit Info</button>
        </section>
        <section className='my-5'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold'>Screens</h5>
            <button
              className='primary-btn d-flex justify-content-center align-items-center'
              onClick={handleShow}
            >
              {' '}
              <img className='me-3' src={plus} alt='' /> Add New Screen
            </button>
          </div>
          <div>
            <Screens />
            <Screens />
          </div>
        </section>

        <section className='my-5'>
          <div className='d-flex justify-content-between align-items-start'>
            <div>
              <h5 className='fw-bold'>Advertisements</h5>
              <p>
                Ads are shown on all the screens after every certain “interval”
                & for a “duration”.
              </p>
            </div>
            <button className='primary-btn d-flex justify-content-center align-items-center'>
              {' '}
              <img className='me-3' src={plus} alt='' /> Add New Ad
            </button>
          </div>
          <div>
            <div className='d-flex justify-content-between align-items-center edit-schedule'>
              <h5>
                Ads will play every <span>60 sec</span> for <span>10 sec</span>
              </h5>
              <button
                className='primary-btn-light'
                onClick={() => setEditModal(true)}
              >
                EDIT SCHEDULE
              </button>
            </div>
            <Screens />
          </div>
        </section>
      </div>

      <EditScheduleModal show={editModal} hide={() => setEditModal()} />

      <Modal
        show={newStoreModal}
        onHide={() => setNewStoreModal(false)}
        size='lg'
      >
        <Modal.Header closeButton style={{ border: 'none' }}>
          <Modal.Title style={{ fontSize: '22px' }}>
            Create New Store
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Store Brand Icon / Logo</h6>
          <div className='d-flex justify-content-start align-items-end'>
            <img
              src={demoImg}
              alt='demoImg'
              height='100'
              width='100'
              className='me-4'
            />
            <button className='upload-btn d-flex justify-content-between align-items-center'>
              <span>Upload</span>
              <img
                className='mx-2'
                src={uploadBtn}
                alt=''
                width='24'
                height='24'
              />{' '}
            </button>
          </div>
          <div className='my-3'>
            <div className='plain-input my-3'>
              <label for=''>Store Name</label>
              <br />
              <input type='text' placeholder='Search something' />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Manager / Owner Name</label>
              <br />
              <input type='text' placeholder='Search something' />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Manager / Owner Phone</label>
              <br />
              <input type='text' placeholder='Search something' />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Manager / Owner Email</label>
              <br />
              <input type='text' placeholder='Search something' />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Address / Location</label>
              <br />
              <input type='text' placeholder='Search something' />
            </div>
            <div className='plain-textarea my-3'>
              <label for=''>Tags</label>
              <br />
              <textarea rows='3' cols=''></textarea>
              {/* <span className='m-1'>tag 1</span>
              <span className='m-1'>tag 1</span> */}
            </div>
            <div className='plain-dropdown '>
              <label for=''>Show</label>
              <select>
                <option value='1' style={{ border: 'none' }}>
                  {' '}
                  value 1
                </option>
                <option value='2'> value 2</option>
                <option value='3'> value 3</option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='primary-btn-light'
            onClick={() => setNewStoreModal(false)}
          >
            Close
          </button>
          <button
            className='primary-btn'
            onClick={() => setNewStoreModal(false)}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton style={{ border: 'none' }}>
          <Modal.Title style={{ fontSize: '22px' }}>
            Create New Screen for Shop Name{' '}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='my-3'>
            <div className='plain-input my-3'>
              <label for=''> Screen Name</label>
              <br />
              <input type='text' placeholder='Screen Name' />
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
            <div className='plain-dropdown '>
              <label for=''>Layout Theme</label>
              <select>
                <option value='1' style={{ border: 'none' }}>
                  {' '}
                  value 1
                </option>
                <option value='2'> value 2</option>
                <option value='3'> value 3</option>
              </select>
            </div>
            <div className='plain-dropdown '>
              <label for=''>Categories of Products</label>
              <select>
                <option value='1' style={{ border: 'none' }}>
                  {' '}
                  value 1
                </option>
                <option value='2'> value 2</option>
                <option value='3'> value 3</option>
              </select>
            </div>
            <div className='plain-dropdown '>
              <label for=''>Product Count</label>
              <select>
                <option value='1' style={{ border: 'none' }}>
                  {' '}
                  value 1
                </option>
                <option value='2'> value 2</option>
                <option value='3'> value 3</option>
              </select>
            </div>
            <div className='plain-input my-3'>
              <label for=''>Android ID (TV-Stick)</label>
              <br />
              <input type='text' placeholder='Search something' />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Screen ID</label>
              <br />
              <input type='text' placeholder='Search something' />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Screen Password</label>
              <br />
              <input type='text' placeholder='Search something' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='primary-btn-light' onClick={handleClose}>
            Close
          </button>
          <button className='primary-btn' onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default StoreFront
