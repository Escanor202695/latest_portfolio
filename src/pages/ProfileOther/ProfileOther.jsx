import axios from 'axios'
import React, { Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { EditProfileModal } from '../../components/Modals/EditProfileModal'
import ResetPassword from '../../components/Modals/ResetPassword/ResetPassword'
import { GetAdminApi } from '../../constants/api.constants'
import Toast from '../../utils/Toast/Toast'
import './ProfileOther.scss'
const ProfileOther = () => {
  const [edit, setEdit] = useState(false)
  const [resetPassword, setResetPassword] = useState(false)
  const { id } = useParams()
  const [data, setData] = useState({})
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    loadAdmin()
  }, [id])

  const loadAdmin = async () => {
    const url = GetAdminApi + `?id=${id}`
    setSpinner(true)
    try {
      const response = await axios.get(url, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      console.log(response)
      if (response.status === 200) {
        setData(response.data.data)
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

  return (
    <div className='profile-page'>
      <h3 className=' d-flex justify-content-start align-items-center'>
        User Profile
        {spinner && <Spinner animation='border' className='ms-2' size='md' />}
      </h3>
      {!spinner && (
        <div>
          <h5 className='mt-4'>User Details</h5>
          <div className='profile-card'>
            <div className='d-flex justify-content-between align-items-center '>
              <div>
                <h6 className='pe-5 fw-bold'>User Name</h6>
                <h6 className='pe-5 fw-bold'>Phone</h6>
                <h6 className='pe-5 fw-bold'>Email</h6>
                <h6 className='pe-5 fw-bold'>Effective Role</h6>
                <h6 className='pe-5 fw-bold'>Roles</h6>
              </div>
              <div>
                <h6 className='ps-5 fw-normal'> {data[0]?.name}</h6>
                <h6 className='ps-5 fw-normal'>{data[0]?.phone}</h6>
                <h6 className='ps-5 fw-normal'>{data[0]?.email}</h6>
                <h6 className='ps-5 fw-normal'>{data[0]?.effective_role}</h6>
                <h6 className='ps-5 fw-normal'>
                  {data[0]?.role.map((dt, idx) => (
                    <span key={idx}>{dt}, </span>
                  ))}
                </h6>
              </div>
            </div>

            <div>
              <button
                className='primary-btn-light d-block w-100 mb-3 px-5'
                onClick={() => setEdit(true)}
              >
                Edit Profile Info
              </button>
              <button
                className='primary-btn-light d-block w-100 px-5'
                onClick={() => setResetPassword(true)}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      )}
      <EditProfileModal
        show={edit}
        handleClose={() => setEdit()}
        data={data}
        loadAdmin={loadAdmin}
      />
      <ResetPassword
        show={resetPassword}
        handleClose={() => setResetPassword()}
      />
    </div>
  )
}

export default ProfileOther
