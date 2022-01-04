import React, { useEffect, useState } from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'
import plus from '../../assets/icons/plus.svg'
import './AdminManagement.scss'
import { Dropdown, Spinner, Table } from 'react-bootstrap'
import threedot from '../../assets/icons/threedot.svg'
import fakeAdmin from './AdminsFakedata'
import HideShowToggle from '../../components/HideShowToggle/HideShowToggle'
import { NewAdminModal } from '../../components/Modals/NewAdminModal'
import { AdminDetailsModal } from '../../components/Modals/AdminDetailsModal'
import { useHistory } from 'react-router-dom'
import { GetAdminApi } from '../../constants/api.constants'
import axios from 'axios'
import Toast from '../../utils/Toast/Toast'
import Pagination from 'react-bootstrap/Pagination'

const AdminManagement = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  let history = useHistory()
  const [allAdmins, setAllAdmins] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [page, setPage] = useState(1)
  const [spinner, setSpinner] = useState(false)
  const [totalDoc, setTotalDoc] = useState(0)
  const [role, setRole] = useState('')
  const [detailsDataModal, setDetailsDataModal] = useState(false)
  const closeDetails = () => setDetailsDataModal(false)
  const [detailsData, setDetailsData] = useState({})

  useEffect(() => {
    loadAllAdmin()
  }, [page, searchKey, role])

  const loadAllAdmin = async () => {
    setSpinner(true)
    let url = GetAdminApi + `?page=${page}`
    if (searchKey.length > 0) {
      url += `&filter=${searchKey}`
    }
    if (role.length > 0) {
      url += `&role=${role}`
    }
    try {
      const response = await axios.get(url, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      console.log(response)
      if (response.status === 200) {
        setAllAdmins(response.data.data)
        setTotalDoc(response.data.total_document)
        setSpinner(false)
      } else
        throw new Error(
          response?.data?.msg || 'Cant load admins data, try again later'
        )
    } catch (error) {
      setSpinner(false)
      console.log(error)
      Toast(
        'err',
        error.response?.data?.msg || 'Cant load admins data, try again later'
      )
    }
  }

  const visitProfile = (admin) => {
    history.push(`/profile/${admin._id}`)
  }

  let items = []
  let totalPage = 0
  if (totalDoc < 10) totalPage = 1
  else totalPage = totalDoc / 10
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number == page}>
        {number}
      </Pagination.Item>
    )
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
            <select onChange={(e) => setRole(e.target.value)}>
              <option value=''>not selected</option>
              <option value='manager'>manager</option>
              <option value='admin'>admin </option>
              <option value='super_admin'>super admin </option>
            </select>
          </div>
        </div>
        {spinner && (
          <div className='d-flex justify-content-center align-items-center my-5'>
            <Spinner animation='border' style={{ color: '#558f55' }} />
          </div>
        )}
        {!spinner && allAdmins.length > 0 ? (
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
                {/* <th>password</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allAdmins.map((admin, idx) => (
                <tr key={idx}>
                  <td
                    onClick={() => {
                      setDetailsData(admin)
                      setDetailsDataModal(true)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {' '}
                    {admin.name}
                  </td>
                  <td
                    onClick={() => {
                      setDetailsData(admin)
                      setDetailsDataModal(true)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {admin.email}
                  </td>
                  <td
                    onClick={() => {
                      setDetailsData(admin)
                      setDetailsDataModal(true)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {admin.phone}
                  </td>
                  <td
                    onClick={() => {
                      setDetailsData(admin)
                      setDetailsDataModal(true)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {admin.role}
                  </td>
                  {/* <td className=''>
                    <HideShowToggle password={admin.password} />
                  </td> */}
                  <td className=' text-center'>
                    <Dropdown drop='start' style={{ cursor: 'pointer' }}>
                      <Dropdown.Toggle
                        variant='transparent'
                        id='dropdown-basic'
                      >
                        <img src={threedot} alt='' className='' />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='mt-4'>
                        <Dropdown.Item onClick={() => visitProfile(admin)}>
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
          !spinner && (
            <h3 className='text-secondary my-5 text-center'>No Admin Found!</h3>
          )
        )}
        {!spinner && (
          <div className='d-flex justify-content-center align-items-center my-5'>
            <Pagination
              onClick={(e) => {
                setPage(e.target.innerText)
              }}
            >
              {items}
            </Pagination>
          </div>
        )}
      </div>

      <NewAdminModal
        show={show}
        handleClose={handleClose}
        loadAllAdmin={() => loadAllAdmin()}
      />
      <AdminDetailsModal
        show={detailsDataModal}
        handleClose={closeDetails}
        data={detailsData}
      />
    </div>
  )
}

export default AdminManagement
