import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import demoImg from '../../../assets/images/demoLogoImg.png'
import { AdEditEnd, FileUploadEnd } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const EditAdModal = ({ show, handleClose, ad, loadAllFolders, folderID }) => {
  const [photoSpinner, setPhotoSpinner] = useState(false)
  const [spinner, setSpinner] = useState(false)

  const [data, setData] = useState({
    folder_id: '',
    name: '',
    description: '',
    link: '',
    type: 'photo',
  })

  useEffect(() => {
    setData({
      folder_id: ad?.folder_id || '',
      name: ad?.name,
      description: ad?.description,
      link: ad?.link,
      type: ad?.type,
    })
  }, [ad])
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
        setData({ ...data, link: res.data?.files[0]?.path })
        setPhotoSpinner(false)
        Toast('success', 'File uploaded successfully')
      }
    } catch (error) {
      setPhotoSpinner(false)
    }
  }

  const handleEditAd = async () => {
    setSpinner(true)
    if (!data?.name) {
      Toast('err', 'Please insert folder name')
      setSpinner(false)
      return
    }
    if (!data?.link) {
      Toast('err', 'Media file must be provided')
      setSpinner(false)
      return
    }
    if (!data?.type) {
      Toast('err', 'Type must be provided')
      setSpinner(false)
      return
    }

    try {
      const response = await axios.put(
        AdEditEnd,
        { id: ad?._id, ...data },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )

      if (response.status === 200) {
        Toast('success', 'AD Updated!')
        handleClose()
        setSpinner(false)
        setData({
          folder_id: '',
          name: '',
          description: '',
          link: '',
          type: 'photo',
        })
        loadAllFolders(folderID)
      } else throw new Error(response.data?.msg || 'Try again later')
    } catch (error) {
      setSpinner(false)

      Toast('err', error.response?.data?.msg)
    }
  }
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Edit AD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-start align-items-end'>
          {data?.type === 'photo' ? (
            <img
              src={data?.link || demoImg}
              alt=''
              height='100'
              width='200'
              className='me-4'
            />
          ) : (
            <div className='mx-3'>
              <ReactPlayer
                url={data?.link || demoImg}
                width='200px'
                height='100px'
                controls={true}
              />
            </div>
          )}

          <Form.Group className='' controlId='formBasicEmail'>
            <Form.Label>
              {data?.type}*
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
              value={data?.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Description</label>
            <br />
            <input
              type='text'
              placeholder='enter details'
              value={data?.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </div>

          <div className='plain-dropdown my-3'>
            <label for=''>File Type*</label>
            <br />
            <select
              className=''
              onChange={(e) => setData({ ...data, type: e.target.value })}
            >
              <option value='photo' selected>
                Photo
              </option>
              <option value='video'>Video</option>
            </select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn' onClick={() => handleEditAd()}>
          Save Changes{' '}
          {spinner && <Spinner animation='border' size='sm' className='ms-2' />}
        </button>
      </Modal.Footer>
    </Modal>
    // <Modal show={show} onHide={handleClose} size='lg'>
    //   <Modal.Header closeButton style={{ border: 'none' }}>
    //     <Modal.Title style={{ fontSize: '22px' }}>Edit AD</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <div className='mb-3'>
    //       <div className='plain-input my-3'>
    //         <label for=''>Ad Name* </label>
    //         <br />
    //         <input
    //           type='text'
    //           placeholder='enter name'
    //           value={data?.name}
    //           onChange={(e) => setData({ ...data, name: e.target.value })}
    //         />
    //       </div>
    //       <div className='plain-input my-3'>
    //         <label for=''>Description</label>
    //         <br />
    //         <input
    //           type='text'
    //           placeholder='enter details'
    //           value={data?.description}
    //           onChange={(e) =>
    //             setData({ ...data, description: e.target.value })
    //           }
    //         />
    //       </div>
    //     </div>
    //   </Modal.Body>
    //   <Modal.Footer style={{ border: 'none' }}>
    //     <button className='primary-btn-light' onClick={handleClose}>
    //       Close
    //     </button>
    //     <button className='primary-btn' onClick={() => handleAdEdit()}>
    //       Save Changes{' '}
    //       {spinner && <Spinner animation='border' size='sm' className='ms-2' />}
    //     </button>
    //   </Modal.Footer>
    // </Modal>
  )
}

export default EditAdModal
