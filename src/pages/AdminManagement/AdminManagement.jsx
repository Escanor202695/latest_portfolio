import React, { useEffect, useState } from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'
import plus from '../../assets/icons/plus.svg'
import './AdminManagement.scss'
import { Dropdown, Table } from 'react-bootstrap'
import threedot from '../../assets/icons/threedot.svg'
import fakeAdmin from './AdminsFakedata'
import HideShowToggle from '../../components/HideShowToggle/HideShowToggle'
import { NewAdminModal } from '../../components/Modals/NewAdminModal'
import { AdminDetailsModal } from '../../components/Modals/AdminDetailsModal'

const AdminManagement = () => {
  const [searchKey, setSearchKey] = useState('')
  const [adminToShow, setAdminToShow] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [showDetails, setShowDetails] = useState(false)
  const closeDetails = () => setShowDetails(false)
  const details = () => setShowDetails(true)

  const [detailsData, setDetailsData] = useState({})
  const handleDetailsData = (data) => {
    setDetailsData(data)
    details()
  }

  useEffect(() => {
    if (searchKey === '') {
      setAdminToShow(fakeAdmin)
    } else {
      filterAdmin()
    }
  }, [searchKey])

  const filterAdmin = () => {
    let returnValue = fakeAdmin?.filter(
      (dt) =>
        dt.name.toUpperCase().includes(searchKey.toUpperCase()) ||
        dt.email.toUpperCase().includes(searchKey.toUpperCase())
    )
    setAdminToShow(returnValue)
  }

  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fw-bold'>Admin Management</h3>
          <button
            className='primary-btn d-flex justify-content-center align-items-center '
            onClick={handleShow}
          >
            <img className='me-3' src={plus} alt='' /> New Admin
          </button>
        </div>

        <div className='d-flex justify-content-between align-items-center mt-4'>
          <div className='custom-input me-2'>
            <label for=''>Search Admin</label>
            <br />
            <input
              type='text'
              placeholder='search by name, email etc.'
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
          <div className='custom-dropdown ms-2'>
            <label for=''>Show</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                All admins
              </option>
              <option value='2'> Super admins</option>
              <option value='3'> Only admins</option>
            </select>
          </div>
        </div>
        {adminToShow.length > 0 ? (
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
                <th>password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {adminToShow.map((admin, idx) => (
                <tr key={idx}>
                  <td
                    onClick={() => handleDetailsData(admin)}
                    style={{ cursor: 'pointer' }}
                  >
                    {' '}
                    {admin.name}
                  </td>
                  <td
                    onClick={() => handleDetailsData(admin)}
                    style={{ cursor: 'pointer' }}
                  >
                    {admin.email}
                  </td>
                  <td
                    onClick={() => handleDetailsData(admin)}
                    style={{ cursor: 'pointer' }}
                  >
                    {admin.phone}
                  </td>
                  <td
                    onClick={() => handleDetailsData(admin)}
                    style={{ cursor: 'pointer' }}
                  >
                    {admin.role}
                  </td>
                  <td className=''>
                    <HideShowToggle password={admin.password} />
                  </td>
                  <td className=' text-center'>
                    <Dropdown drop='start' style={{ cursor: 'pointer' }}>
                      <Dropdown.Toggle
                        variant='transparent'
                        id='dropdown-basic'
                      >
                        <img src={threedot} alt='' className='' />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='mt-4'>
                        <Dropdown.Item href='#/action-1'>
                          visit profile
                        </Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>
                          reset password
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h3 className='text-secondary my-5 text-center'>No Admin Found!</h3>
        )}
      </div>
      <NewAdminModal show={show} handleClose={handleClose} />
      <AdminDetailsModal
        show={showDetails}
        handleClose={closeDetails}
        data={detailsData}
      />
    </div>
  )
}

export default AdminManagement
