import React, { useEffect, useState } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import demoImg from '../../../assets/images/demoLogoImg.png'
import axios from 'axios'
import {
  AdCreateEnd,
  FileUploadEnd,
  FolderCreateEnd,
} from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const AddNewAdModal = ({ show, handleClose, folderId, loadAllFolders }) => {
  const [photoSpinner, setPhotoSpinner] = useState(false)
  const [spinner, setSpinner] = useState(false)
  const [photoUrl, setPhotoUrl] = useState('')
  const [data, setData] = useState({
    folder_id: '',
    name: '',
    description: '',
    link: '',
    type: 'video',
  })

  const handleImageUpload = async (e) => {
    setPhotoSpinner(true)
    const file = e.target.files[0]

    const formData = new FormData()
    formData.append('files', file)

    try {
      const res = await axios.post(FileUploadEnd, formData, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      if (res.status === 200) {
        setPhotoUrl(res.data?.files[0]?.path)
        setPhotoSpinner(false)
        Toast('success', 'Photo uploaded successfully')
      }
    } catch (error) {
      setPhotoSpinner(false)
      setPhotoUrl(null)
    }
  }

  const handleCreateNewAd = async () => {
    setSpinner(true)
    if (!data?.name) {
      Toast('err', 'Please insert folder name')
      setSpinner(false)
      return
    }
    if (!photoUrl) {
      Toast('err', 'Photo must be provided')
      setSpinner(false)
      return
    }
    try {
      const response = await axios.post(
        AdCreateEnd,
        {
          folder_id: folderId || '',
          name: data?.name,
          description: data?.description,
          link: photoUrl,
        },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )

      if (response.status === 200) {
        Toast('success', 'AD Created!')
        handleClose()
        setSpinner(false)
        setPhotoUrl(null)
        setData({
          folder_id: '',
          name: '',
          description: '',
          link: '',
        })
        loadAllFolders(folderId)
      } else throw new Error(response.data?.msg || 'Try again later')
    } catch (error) {
      setSpinner(false)
      // setPhotoUrl(null)
      // setData({
      //   folder_id: '',
      //   name: '',
      //   description: '',
      //   link: '',
      // })
      Toast('err', error.response?.data?.msg)
      // handleClose()
    }
  }

  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Create New AD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-start align-items-end'>
          <img
            src={photoUrl || demoImg}
            alt=''
            height='100'
            width='100'
            className='me-4'
          />

          <Form.Group className='' controlId='formBasicEmail'>
            <Form.Label>
              Photo*
              {photoSpinner && (
                <Spinner className='ms-1' animation='border' size='sm' />
              )}
            </Form.Label>
            <Form.Control type='file' onChange={(e) => handleImageUpload(e)} />
          </Form.Group>
        </div>
        <div className='my-3'>
          <div className='plain-input my-3'>
            <label for=''>Ad Name* </label>
            <br />
            <input
              type='text'
              placeholder='enter name'
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Description</label>
            <br />
            <input
              type='text'
              placeholder='enter details'
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </div>

          <div className='plain-dropdown my-3'>
            <label for=''>File Type</label>
            <br />
            <select
              className=''
              onChange={(e) => setData({ ...data, type: e.target.value })}
            >
              <option value='photo'>Photo</option>
              <option value='video' selected>
                Video
              </option>
            </select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn' onClick={() => handleCreateNewAd()}>
          Save Changes{' '}
          {spinner && <Spinner animation='border' size='sm' className='ms-2' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddNewAdModal
