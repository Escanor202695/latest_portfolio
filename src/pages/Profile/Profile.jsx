import React from 'react'
import { useState } from 'react'
import { EditProfileModal } from '../../components/Modals/EditProfileModal'
import ResetPassword from '../../components/Modals/ResetPassword/ResetPassword'
import './Profile.scss'

const Profile = () => {
  const [edit, setEdit] = useState(false)
  const [resetPassword, setResetPassword] = useState(false)

  return (
    <div className='profile-page'>
      <h3>User Profile</h3>
      <h5 className='mt-4'>Your Details</h5>
      <div className='profile-card'>
        <div className='d-flex justify-content-between align-items-center '>
          <div>
            <h6 className='pe-5 '>User Name</h6>
            <h6 className='pe-5'>Phone</h6>
            <h6 className='pe-5'>Email</h6>
            <h6 className='pe-5'>Role</h6>
          </div>
          <div>
            <h6 className='ps-5 fw-normal'>Mohammad Lee</h6>
            <h6 className='ps-5 fw-normal'>01783092354</h6>
            <h6 className='ps-5 fw-normal'>mohammadlee@email.com</h6>
            <h6 className='ps-5 fw-normal'>Admin</h6>
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
      <EditProfileModal show={edit} handleClose={() => setEdit()} />
      <ResetPassword
        show={resetPassword}
        handleClose={() => setResetPassword()}
      />
    </div>
  )
}

export default Profile
