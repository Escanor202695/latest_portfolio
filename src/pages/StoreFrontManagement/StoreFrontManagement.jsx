import React, { useContext, useState } from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'
import plus from '../../assets/icons/plus.svg'
import './StoreFrontManagement.scss'
import { Dropdown, Modal, Table } from 'react-bootstrap'
import threedot from '../../assets/icons/threedot.svg'
import demoImg from '../../assets/images/demoLogoImg.png'
import uploadBtn from '../../assets/icons/upload.svg'
import StoresFakeData from './StoresFakeData'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const StoreFrontManagement = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  let navigate = useNavigate()
  const [store, setStore] = useContext(StoreContext)

  const goToStore = (dt) => {
    setStore(dt)
    navigate('/storefront')
  }

  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fw-bold'>Storefront Management</h3>
          <button
            className='primary-btn d-flex justify-content-center align-items-center '
            onClick={handleShow}
          >
            <img className='me-3' src={plus} alt='' /> Create New Store
          </button>
        </div>

        <div className='d-flex justify-content-between align-items-center mt-4'>
          <div className='custom-input me-2'>
            <label for=''>Search Store</label>
            <br />
            <input type='text' placeholder='search by name, email etc.' />
          </div>
          <div className='custom-dropdown ms-2'>
            <label for=''>Sort By</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                Name (a to z)
              </option>
              <option value='2'> Name (z to a)</option>
            </select>
          </div>
        </div>

        <div className='d-flex justify-content-between align-items-center mt-3'>
          <div className='custom-dropdown ms-2'>
            <label for=''>Type</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                primary
              </option>
              <option value='2'> secondary</option>
            </select>
          </div>
          <div className='custom-dropdown ms-2'>
            <label for=''>Time</label>
            <select>
              <option value='3'> Time (new to old)</option>
              <option value='3'> Time (old to new)</option>
            </select>
          </div>
          <div className='custom-dropdown ms-2'>
            <label for=''>Tags</label>
            <select>
              <option value='3'> all</option>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                most popular
              </option>
              <option value='2'>most unpopular </option>
            </select>
          </div>
          <div className='custom-dropdown ms-2'>
            <label for=''>Location</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                Dhaka
              </option>
              <option value='2'> Chattagram</option>
              <option value='3'> Sylet</option>
            </select>
          </div>
        </div>

        <Table
          striped
          bordered
          hover
          responsive
          borderless={true}
          className='my-5 text-start'
        >
          <thead>
            <tr>
              <th>Store</th>
              <th>Owner</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {StoresFakeData.map((dt, idx) => (
              <tr>
                <td onClick={() => goToStore(dt)}> {dt.name} </td>
                <td onClick={() => goToStore(dt)}>{dt.ownerName}</td>
                <td onClick={() => goToStore(dt)}>{dt.ownerPhone}</td>
                <td onClick={() => goToStore(dt)}>{dt.ownerEmail}</td>
                <td onClick={() => goToStore(dt)}>{dt.address}</td>
                <td onClick={() => goToStore(dt)}>{dt.type}</td>
                <td className='text-center'>
                  {/* <img src={threedot} alt='' className='' /> */}
                  <Dropdown drop='start' style={{ cursor: 'pointer' }}>
                    <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
                      <img src={threedot} alt='' className='' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='mt-4'>
                      <Dropdown.Item onClick={() => goToStore(dt)}>
                        visit store
                      </Dropdown.Item>
                      <Dropdown.Item href=''>show details</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
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

export default StoreFrontManagement
