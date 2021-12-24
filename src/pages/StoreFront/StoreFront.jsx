import React, { useContext, useState } from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'
import './StoreFront.scss'
import plus from '../../assets/icons/plus.svg'
import Screens from '../../components/Screens/Screens'
import { Breadcrumb, Modal } from 'react-bootstrap'
import demoImg from '../../assets/images/demoLogoImg.png'
import uploadBtn from '../../assets/icons/upload.svg'
import { EditScheduleModal } from '../../components/Modals/EditScheduleModal'
import { StoreContext } from '../../context/StoreContext'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { EditStoreModal } from '../../components/Modals/EditStoreModal'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import AdCard from '../../components/AdCard/AdCard'
import { AddNewAdModal } from '../../components/Modals/AddNewAdModal'

const StoreFront = () => {
  const [show, setShow] = React.useState(false)
  const [selectedBtn, setSelectedBtn] = React.useState(true)
  const [newStoreModal, setNewStoreModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  let navigate = useNavigate()

  const [editInfoModal, setEditInfoModal] = useState(false)
  const [rangeValue, setRangeValue] = useState({
    value: { min: 500, max: 1000 },
  })
  const store = useContext(StoreContext)
  console.log(store)
  console.log(store[0]?.tags[0])

  const [adnewAdd, setAdnewAdd] = useState(false)

  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => navigate('/storefront-management')}>
            Storefront Management
          </Breadcrumb.Item>
          <Breadcrumb.Item active>storefront</Breadcrumb.Item>
        </Breadcrumb>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fw-bold'> {store[0].name} </h3>
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
              <h6>{store[0]?.name}</h6>
              <h6>{store[0]?.type}</h6>
              <h6>{store[0]?.ownerName}</h6>
              <h6>{store[0]?.ownerPhone}</h6>
              <h6>{store[0]?.ownerEmail}</h6>
              <h6>{store[0]?.address}</h6>
              <h6>
                {store[0]?.tags.length > 0
                  ? store[0]?.tags.map((dt, idx) => (
                      <span
                        key={idx}
                        style={{
                          color: 'black',
                          backgroundColor: '#e0e0e0',
                          padding: ' .3rem 1rem',
                          marginRight: '.7rem',
                          borderRadius: '4px',
                        }}
                      >
                        {dt}
                      </span>
                    ))
                  : 'N/A'}
              </h6>
            </div>
          </div>
          <button
            className='primary-btn-light'
            onClick={() => setEditInfoModal(true)}
          >
            Edit Info
          </button>
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
            <button
              className='primary-btn d-flex justify-content-center align-items-center'
              onClick={() => setAdnewAdd(true)}
            >
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
            <AdCard />
          </div>
        </section>
      </div>
      <AddNewAdModal show={adnewAdd} handleClose={() => setAdnewAdd()} />

      <EditScheduleModal show={editModal} hide={() => setEditModal()} />
      <EditStoreModal
        show={editInfoModal}
        handleClose={() => setEditInfoModal()}
        data={store[0]}
      />

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
                <option value='2'> Green</option>
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
                <option value='2'> Bond</option>
              </select>
            </div>

            <div className='plain-input my-3'>
              <label for=''>Android ID (TV-Stick)</label>
              <br />
              <input type='text' placeholder='input something' />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Screen ID</label>
              <br />
              <input type='number' placeholder='12323213' />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Screen Password</label>
              <br />
              <input type='text' placeholder='ads@33TqRt' />
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
