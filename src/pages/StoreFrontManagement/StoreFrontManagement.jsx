import React, { useState } from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'
import plus from '../../assets/icons/plus.svg'
import './StoreFrontManagement.scss'
import { Modal, Table } from 'react-bootstrap'
import threedot from '../../assets/icons/threedot.svg'
import demoImg from '../../assets/images/demoLogoImg.png'
import uploadBtn from '../../assets/icons/upload.svg'

const StoreFrontManagement = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
            <label for=''>Search Admin</label>
            <br />
            <input type='text' placeholder='Search something' />
          </div>
          <div className='custom-dropdown ms-2'>
            <label for=''>Sort By</label>
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

        <div className='d-flex justify-content-between align-items-center mt-3'>
          <div className='custom-dropdown ms-2'>
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
          <div className='custom-dropdown ms-2'>
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
          <div className='custom-dropdown ms-2'>
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
          <div className='custom-dropdown ms-2'>
            <label for=''>Location</label>
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
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td className='d-flex justify-content-between align-items-center'>
                Mark <img src={threedot} alt='' className='' />{' '}
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td className='d-flex justify-content-between align-items-center'>
                Mark <img src={threedot} alt='' />{' '}
              </td>{' '}
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td className='d-flex justify-content-between align-items-center'>
                Mark <img src={threedot} alt='' />{' '}
              </td>{' '}
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td className='d-flex justify-content-between align-items-center'>
                Mark <img src={threedot} alt='' />{' '}
              </td>{' '}
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td className='d-flex justify-content-between align-items-center'>
                Mark <img src={threedot} alt='' />{' '}
              </td>{' '}
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td className='d-flex justify-content-between align-items-center'>
                Mark <img src={threedot} alt='' />{' '}
              </td>{' '}
            </tr>
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
              <span className='m-1'>tag 1</span>
              <span className='m-1'>tag 1</span>
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
