import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { EditProfileModal } from '../../components/Modals/EditProfileModal'
import ResetPassword from '../../components/Modals/ResetPassword/ResetPassword'
import { GetAdminProfileUrl } from '../../constants/api.constants'
import { useAuth } from '../../Providers/AuthProvider'
import Toast from '../../utils/Toast/Toast'
import './Profile.scss'

const Profile = () => {
  const [edit, setEdit] = useState(false)
  const [resetPassword, setResetPassword] = useState(false)
  const auth = useAuth()
  const [loadInfoSpinner, setLoadInfoSpinner] = useState(false)

  const [userData, setUserData] = useState({})

  useEffect(() => {
    getAdminInfo()
  }, [])

  const getAdminInfo = async () => {
    setLoadInfoSpinner(true)
    try {
      const response = await axios.get(GetAdminProfileUrl, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (response.status === 200) {
        setUserData(response.data.data)
        setLoadInfoSpinner(false)
      } else throw new Error(response?.data?.msg)
    } catch (error) {
      setLoadInfoSpinner(false)
      Toast('err', error.response?.data?.msg)
    }
  }
  const logout = () => {
    auth.setUser(null)
    localStorage.removeItem('menu_token')
  }
  return (
    <div className='profile-page'>
      <h3 className='d-flex justify-content-start align-items-center'>
        User Profile
        <Spinner
          className={loadInfoSpinner ? 'd-block ms-2' : 'd-none ms-2'}
          animation='border'
          size='md'
        />
      </h3>
      <h5 className='mt-4'>Your Details</h5>
      <div className='profile-card'>
        <div className='d-flex justify-content-between align-items-center '>
          <div>
            <h6 className='pe-5 '>User Name</h6>
            <h6 className='pe-5'>Phone</h6>
            <h6 className='pe-5'>Email</h6>
            <h6 className='pe-5'>Effective Role</h6>
            <h6 className='pe-5'>All Roles</h6>
          </div>
          <div>
            <h6 className='ps-5 fw-normal'> {userData?.name}</h6>
            <h6 className='ps-5 fw-normal'>{userData?.phone}</h6>
            <h6 className='ps-5 fw-normal'>{userData?.email}</h6>
            <h6 className='ps-5 fw-normal'>{userData?.effective_role}</h6>
            <h6 className='ps-5 fw-normal'>
              {userData?.role?.map((dt, idx) => (
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
      <button className='danger-btn-light my-3  px-5' onClick={() => logout()}>
        Log Out
      </button>
      <EditProfileModal
        show={edit}
        handleClose={() => setEdit()}
        data={userData}
        getAdminInfo={getAdminInfo}
      />
      <ResetPassword
        show={resetPassword}
        handleClose={() => setResetPassword()}
      />
    </div>
  )
}

export default Profile
