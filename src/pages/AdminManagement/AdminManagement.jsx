import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dropdown, Modal, Spinner, Table } from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import { useHistory } from 'react-router-dom'
import plus from '../../assets/icons/plus.svg'
import threedot from '../../assets/icons/threedot.svg'
import DashBoard from '../../components/DashBoard/DashBoard'
import { AdminDetailsModal } from '../../components/Modals/AdminDetailsModal'
import { NewAdminModal } from '../../components/Modals/NewAdminModal'
import { ResetOtherPassModal } from '../../components/Modals/ResetOtherPassModal'
import {
  AdminEdit,
  ChangeRole,
  GetAdminApi,
  UserDeleteEnd,
} from '../../constants/api.constants'
import Toast from '../../utils/Toast/Toast'
import './AdminManagement.scss'

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
      setPage(1)
    }
    if (role.length > 0) {
      url += `&role=${role}`
      setPage(1)
    }
    try {
      const response = await axios.get(url, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

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

      Toast(
        'err',
        error.response?.data?.msg || 'Cant load admins data, try again later'
      )
    }
  }

  const [individualData, setIndividualData] = useState({})
  const [othersProfileModal, setOthersProfileModal] = useState(false)
  const [userRole, setUserRole] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [editSpinner, setEditSpinner] = useState(false)
  const [deleteSpinner, setDeleteSpinner] = useState(false)

  const handleEditOthersModal = (admin) => {
    setIndividualData({
      name: admin.name,
      phone: admin.phone,
    })
    setUserEmail(admin.email)
    setUserRole({
      id: admin._id,
      role: admin.effective_role,
    })
    setOthersProfileModal(true)
  }

  const updateRole = async () => {
    try {
      const response = await axios.put(ChangeRole, userRole, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      if (response.status === 200) {
        // Toast('success', 'Role Updated!')
        return true
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
      return error
    }
  }

  const handleSubmit = async () => {
    setEditSpinner(true)

    if (individualData.name === '') {
      Toast('err', 'Please enter your name')
      setEditSpinner(false)

      return
    }
    if (individualData.phone === '') {
      Toast('err', 'Please enter your phone')
      setEditSpinner(false)
      return
    }
    updateRole()
    try {
      const response = await axios.put(AdminEdit, individualData, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (response.status === 200) {
        Toast('success', 'Admin updated!')
        setEditSpinner(false)
        loadAllAdmin()
        setOthersProfileModal(false)
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      setEditSpinner(false)
      setOthersProfileModal(false)
      loadAllAdmin()
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  const handleDelete = async (id) => {
    setDeleteSpinner(true)

    try {
      const response = await axios.delete(UserDeleteEnd + `?_id=${id}`, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (response.status === 200) {
        Toast('success', 'User Deleted!')
        handleClose()
        setDeleteSpinner(false)
        loadAllAdmin()
        setOthersProfileModal(false)
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      handleClose()
      setDeleteSpinner(false)
      setOthersProfileModal(false)
      loadAllAdmin()
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  const [showResetPassOther, setShowResetPassOther] = useState(false)
  const [changePassData, setChangePassData] = useState('')
  // pagination start

  let items = []
  let totalPage = 0
  if (totalDoc < 10) totalPage = 1
  else totalPage = Math.ceil(totalDoc / 10)
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number == page}>
        {number}
      </Pagination.Item>
    )
  }
  // pagination end

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
              <option value=''>All Roles</option>
              <option value='manager'>Manager</option>
              <option value='admin'>Admin </option>
              <option value='super_admin'>Super Admin </option>
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
                    {/* {admin.role.map((r, idx) => (idx !== 0 ? ', ' + r : r))} */}
                    {admin?.effective_role === 'super_admin'
                      ? 'Super Admin'
                      : admin?.effective_role === 'admin'
                      ? 'Admin'
                      : 'Ad Manager'}
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
                        <Dropdown.Item
                          onClick={() => {
                            handleEditOthersModal(admin)
                          }}
                        >
                          edit profile
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setShowResetPassOther(true)
                            setChangePassData(admin)
                          }}
                        >
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
      {/* <EditOthersProfileModal
        show={othersProfileModal}
        handleClose={() => setOthersProfileModal()}
        data={individualData}
        loadAdmin={() => loadAllAdmin()}
      /> */}
      <ResetOtherPassModal
        show={showResetPassOther}
        handleClose={() => setShowResetPassOther()}
        data={changePassData}
      />
      <Modal
        show={othersProfileModal}
        onHide={() => setOthersProfileModal(false)}
        size='md'
      >
        <Modal.Header closeButton style={{ border: 'none' }}>
          <Modal.Title style={{ fontSize: '22px' }}>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <div className='plain-input my-3'>
              <label for=''>User Name</label>
              <br />
              <input
                type='text'
                placeholder='Search something'
                value={individualData.name}
                onChange={(e) =>
                  setIndividualData({ ...individualData, name: e.target.value })
                }
              />
            </div>

            <div className='plain-input my-3'>
              <label for=''>Phone</label>
              <br />
              <input
                type='text'
                placeholder='Search something'
                value={individualData.phone}
                onChange={(e) =>
                  setIndividualData({
                    ...individualData,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            <div className='plain-input my-3'>
              <label for=''>Email</label>
              <br />
              <input
                type='text'
                placeholder='Search something'
                value={userEmail}
                disabled
              />
            </div>

            <div className='plain-dropdown '>
              <label for=''>Role </label>
              <select
                onChange={(e) =>
                  setUserRole({ ...userRole, role: e.target.value })
                }
              >
                <option
                  value='manager'
                  selected={userRole.role === 'manager' ? true : false}
                >
                  manager
                </option>
                <option
                  value='admin'
                  selected={userRole.role === 'admin' ? true : false}
                >
                  {' '}
                  admin
                </option>
                <option
                  value='super_admin'
                  selected={userRole.role === 'super_admin' ? true : false}
                >
                  {' '}
                  super admin{' '}
                </option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='danger-btn-light d-flex justify-content-center align-items-center'
            onClick={() => handleDelete(userRole.id)}
          >
            Delete
            <Spinner
              className={deleteSpinner ? 'd-block ms-2' : 'd-none ms-2'}
              animation='border'
              size='sm'
            />
          </button>
          <button
            className='primary-btn-light'
            onClick={() => setOthersProfileModal(false)}
          >
            Close
          </button>
          <button
            className='primary-btn d-flex justify-content-center align-items-center'
            onClick={() => handleSubmit()}
          >
            Update Changes{' '}
            <Spinner
              className={editSpinner ? 'd-block ms-2' : 'd-none ms-2'}
              animation='border'
              size='sm'
            />
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AdminManagement
