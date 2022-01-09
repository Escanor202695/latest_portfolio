import React, { useEffect, useState } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import demoImg from '../../../assets/images/demoLogoImg.png'
import axios from 'axios'
import {
  FileUploadEnd,
  FolderCreateEnd,
} from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const AddNewFolderModal = ({ show, handleClose, parent, loadAllFolders }) => {
  const [photoSpinner, setPhotoSpinner] = useState(false)
  const [spinner, setSpinner] = useState(false)
  const [photoUrl, setPhotoUrl] = useState('')
  const [data, setData] = useState({
    parent_id: '',
    name: '',
    description: '',
    photo: '',
  })

  useEffect(() => {
    setData({ ...data, parent_id: parent })
  }, [parent])

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

  const handleFolderCreation = async () => {
    setSpinner(true)
    if (!data?.name) {
      Toast('err', 'Please insert folder name')
      setSpinner(false)
      return
    }
    try {
      const response = await axios.post(
        FolderCreateEnd,
        {
          parent_id: parent,
          name: data?.name,
          description: data?.description,
          photo: photoUrl,
        },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )
      console.log(response)
      if (response.status === 200) {
        Toast('success', 'Folder Created!')
        handleClose()
        setSpinner(false)
        setPhotoUrl(null)
        setData({ parent_id: '', name: '', description: '', photo: '' })
        loadAllFolders(parent)
      } else throw new Error(response.data?.msg || 'Try again later')
    } catch (error) {
      setSpinner(false)
      setPhotoUrl(null)
      setData({ parent_id: '', name: '', description: '', photo: '' })
      Toast('err', error.data?.msg)
      handleClose()
    }
  }

  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>
          Create New Folder
        </Modal.Title>
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
              Photo
              {photoSpinner && (
                <Spinner className='ms-1' animation='border' size='sm' />
              )}
            </Form.Label>
            <Form.Control type='file' onChange={(e) => handleImageUpload(e)} />
          </Form.Group>
        </div>
        <div className='my-3'>
          <div className='plain-input my-3'>
            <label for=''>Folder Name* </label>
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
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn' onClick={() => handleFolderCreation()}>
          Save Changes{' '}
          {spinner && <Spinner animation='border' size='sm' className='ms-2' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddNewFolderModal
