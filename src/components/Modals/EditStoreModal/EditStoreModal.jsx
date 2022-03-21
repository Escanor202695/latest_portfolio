import React, { useState, useEffect } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import demoImg from '../../../assets/images/demoLogoImg.png'
import uploadBtn from '../../../assets/icons/upload.svg'
import axios from 'axios'
import {
  DeleteStoreEnd,
  FileUploadEnd,
  StoreEdit,
} from '../../../constants/api.constants'
import { InputTag } from '../../Tag'
import Toast from '../../../utils/Toast/Toast'
import { useHistory } from 'react-router-dom'

const EditStoreModal = ({ show, handleClose, data, loadStoreData }) => {
  const [editSpinner, setEditSpinner] = useState(false)
  const [photoSpinner, setPhotoSpinner] = useState(false)
  const [confirmModalShow, setConfirmModalShow] = useState(false)
  const [deleteSpinner, setDeleteSpinner] = useState(false)
  const [storeData, setStoreData] = useState({
    id: '',
    name: '',
    manager: '',
    phone: '',
    email: '',
    address: '',
    link: '',
    social_link: '',
    footer: '',
    icon: '',
  })
  const [types, setTypes] = useState('')
  console.log(data)
  useEffect(() => {
    setStoreData({
      id: data?._id,
      name: data?.name,
      manager: data?.manager,
      phone: data?.phone,
      email: data?.email,
      address: data?.address,
      link: data?.link,
      social_link: data?.social_link,
      footer: data?.footer,
      icon: data?.icon,
    })
    setTypes(data?.type)
  }, [data])

  function handleInput(e) {
    if (e.target.name === 'types') {
      setTypes(e.target.value)
    } else {
      setStoreData({
        ...storeData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const [tags, setTags] = useState([])

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i))
  }

  const handleAddition = (tag) => {
    setTags([...tags, tag])
  }

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice()

    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)

    // re-render
    setTags(newTags)
  }

  const handleTagClick = (index) => {}

  async function postStoreData() {
    setEditSpinner(true)

    if (storeData.name === '') {
      Toast('err', 'Name cant be empty')
      setEditSpinner(false)
      return
    }
    if (storeData.manager === '') {
      Toast('err', 'Manager name cant be empty')
      setEditSpinner(false)
      return
    }
    if (storeData.phone === '') {
      Toast('err', 'Phone cant be empty')
      setEditSpinner(false)
      return
    }
    if (storeData.email === '') {
      Toast('err', 'Email cant be empty')
      setEditSpinner(false)
      return
    }
    if (storeData.address === '') {
      Toast('err', 'Address cant be empty')
      setEditSpinner(false)
      return
    }

    if (storeData.types === '') {
      Toast('err', 'Types cant be empty')
      setEditSpinner(false)
      return
    }
    if (storeData.link === '') {
      Toast('err', 'Link must be provided')
      setEditSpinner(false)
      return
    }

    const tagArray = [...data?.tag]
    tags.map((tag) => {
      return tagArray.push(tag.text)
    })

    const dataObj = {
      id: storeData.id,
      name: storeData.name,
      manager: storeData.manager,
      phone: storeData.phone,
      email: storeData.email,
      address: storeData.address,
      tag: tagArray,
      type: types,
      icon: storeData?.icon,
    }
    try {
      await axios
        .put(StoreEdit, dataObj, {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        })
        .then((response) => {
          if (response.status === 200) {
            Toast('success', 'Successfully Updated!')
            setEditSpinner(false)

            handleClose()
            loadStoreData()
            setStoreData({
              id: '',
              name: '',
              manager: '',
              phone: '',
              email: '',
              address: '',
            })
            setTags([])
            setTypes('Category')
          } else throw new Error(response?.data?.msg)
        })
    } catch (error) {
      setStoreData({
        id: '',
        name: '',
        manager: '',
        phone: '',
        email: '',
        address: '',
      })
      setTags([])
      setTypes('Category')
      handleClose()
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
      setEditSpinner(false)
    }
  }

  const history = useHistory()

  const handleStoreDelete = async () => {
    setDeleteSpinner(true)
    try {
      const response = await axios.delete(
        DeleteStoreEnd + `?_id=${storeData.id}`,
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )
      if (response.status === 200) {
        Toast('success', 'Successfully Deleted!')
        handleClose()
        history.push('/storefront-management')
        setDeleteSpinner(false)
      } else throw new Error(response?.data?.msg)
    } catch (error) {
      setDeleteSpinner(false)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
      handleClose()
    }
  }

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
        // setPhotoUrl(res.data?.files[0]?.path)
        setStoreData({ ...storeData, icon: res?.data?.files[0].path })

        setPhotoSpinner(false)
        Toast('success', 'Photo uploaded successfully')
      }
    } catch (error) {
      setPhotoSpinner(false)
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton style={{ border: 'none' }}>
          <Modal.Title style={{ fontSize: '22px' }}>
            Edit {storeData?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form onSubmit={handleSubmit}> */}
          <h6>Store Brand Icon / Logo*</h6>
          <div className='d-flex justify-content-start align-items-end'>
            <img
              src={storeData?.icon || demoImg}
              alt='demoImg'
              height='100'
              width='100'
              className='me-4'
            />

            <Form.Group className='' controlId='formBasicEmail'>
              <Form.Label>
                <strong>Image </strong> (aspect ratio should be 1:1. e.g. 512px
                x 512px)
                {photoSpinner && (
                  <Spinner className='ms-1' animation='border' size='sm' />
                )}
              </Form.Label>
              <Form.Control
                type='file'
                onChange={(e) => handleImageUpload(e)}
              />
            </Form.Group>
          </div>
          <div className='my-3'>
            <div className='plain-input my-3'>
              <label for=''>Store Name*</label>
              <br />
              <input
                type='text'
                placeholder='Please input store name'
                value={storeData.name}
                onChange={handleInput}
                name='name'
              />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Store Manager / POC*</label>
              <br />
              <input
                type='text'
                placeholder='Name of manager '
                value={storeData.manager}
                onChange={handleInput}
                name='manager'
              />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Store Phone*</label>
              <br />
              <input
                type='text'
                placeholder='Please input phone'
                value={storeData.phone}
                onChange={handleInput}
                name='phone'
              />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Store Email*</label>
              <br />
              <input
                type='text'
                placeholder='Please input email'
                value={storeData.email}
                onChange={handleInput}
                name='email'
              />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Address / Location*</label>
              <br />
              <input
                type='text'
                placeholder='Please input address'
                value={storeData.address}
                onChange={handleInput}
                name='address'
              />
            </div>
            <div className='plain-textarea my-3'>
              <label for=''>Tags*</label>
              <br />
              <InputTag
                tags={tags}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                handleTagClick={handleTagClick}
              />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Type*</label>
              <br />
              <input
                type='text'
                placeholder='Please input store type'
                value={types}
                onChange={(e) => setTypes(e.target.value)}
                name='address'
              />
            </div>
            <div className='plain-input my-3'>
              <label for=''>Footer Text</label>
              <br />
              <input
                type='text'
                placeholder='Please input your address'
                value={storeData.footer}
                onChange={(e) =>
                  setStoreData({ ...storeData, footer: e.target.value })
                }
                name='footer'
              />
            </div>

            <div className='plain-input my-3'>
              <label for=''>QR Link</label>
              <br />
              <input
                type='text'
                placeholder='Please input your address'
                value={storeData.social_link}
                onChange={(e) =>
                  setStoreData({ ...storeData, social_link: e.target.value })
                }
                name='social_link'
              />
            </div>

            <div className='plain-input my-3'>
              <label for=''>API Link*</label>
              <br />
              <input
                type='text'
                placeholder='Please input your address'
                value={storeData.link}
                onChange={(e) =>
                  setStoreData({ ...storeData, link: e.target.value })
                }
                name='social_link'
              />
            </div>
          </div>

          {/* </form> */}
        </Modal.Body>
        <Modal.Footer>
          {' '}
          <button
            className='danger-btn-light d-flex justify-content-center align-items-center'
            onClick={() => {
              handleClose()
              setConfirmModalShow(true)
            }}
          >
            Delete{' '}
          </button>
          <button className='primary-btn-light' onClick={handleClose}>
            Close
          </button>
          <button
            className='primary-btn d-flex justify-content-center align-items-center '
            onClick={() => postStoreData()}
            type='submit'
          >
            Save Changes{' '}
            {editSpinner && (
              <Spinner className='ms-2' animation='border' size='sm' />
            )}
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={confirmModalShow} onHide={() => setConfirmModalShow(false)}>
        <Modal.Header style={{ border: 'none' }}>
          <Modal.Title className='text-danger '>Caution!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-secondary'>
          Are you sure you want to Delete Theme? This can't be undone.
        </Modal.Body>
        <Modal.Footer style={{ border: 'none' }}>
          <button
            className='primary-btn-light '
            onClick={() => setConfirmModalShow(false)}
          >
            No
          </button>
          <button className='primary-btn ' onClick={handleStoreDelete}>
            Yes {deleteSpinner && <Spinner animation='border' size='sm' />}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditStoreModal
