import axios from 'axios'
import React, { useState } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import { TiDelete } from 'react-icons/ti'
import { FileUploadEnd, StoreCreate } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

export default function StoreFronManagementModal({
  show,
  handleClose,
  demoImg,
  loadStoreData,
}) {
  const [editSpinner, setEditSpinner] = useState(false)
  const [storeData, setStoreData] = useState({
    name: '',
    manager: '',
    phone: '',
    email: '',
    address: '',
    footer: '',
    link: '',
    social_link: '',
    icon: '',
    tag: [],
    type: '',
    api_key: '2d108b5e-ec42-45cb-a0cf-c5f432ea637a',
  })
  const [photoSpinner, setPhotoSpinner] = useState(false)

  function handleInput(e) {
    setStoreData({
      ...storeData,
      [e.target.name]: e.target.value,
    })
  }

  const [tag, setTag] = useState('')

  async function postStoreData() {
    setEditSpinner(true)

    if (storeData.name === '') {
      Toast('err', 'Please enter store name')
      setEditSpinner(false)

      return
    }
    if (storeData.manager === '') {
      Toast('err', 'Please enter manager')
      setEditSpinner(false)

      return
    }
    if (storeData.phone === '') {
      Toast('err', 'Please enter your phone')
      setEditSpinner(false)
      return
    }
    if (storeData.email === '') {
      Toast('err', 'Please enter email')
      setEditSpinner(false)
      return
    }
    if (storeData.address === '') {
      Toast('err', 'Please enter address')
      setEditSpinner(false)
      return
    }
    if (storeData.tag === 0) {
      Toast('err', 'Please enter at least 1 tag')
      setEditSpinner(false)
      return
    }
    if (storeData.type.length === 0) {
      Toast('err', 'Please enter store type')
      setEditSpinner(false)
      return
    }
    if (storeData.link === '') {
      Toast('err', 'Please enter Social Link(QR Link) ')
      setEditSpinner(false)
      return
    }

    try {
      await axios
        .post(StoreCreate, storeData, {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setEditSpinner(false)
            Toast('success', 'Store Created!')
            handleClose()
            loadStoreData()
            setStoreData({
              name: '',
              manager: '',
              phone: '',
              email: '',
              address: '',
              footer: '',
              link: '',
              social_link: '',
              icon: '',
              tag: [],
              type: '',
              api_key: '2d108b5e-ec42-45cb-a0cf-c5f432ea637a',
            })
          } else throw new Error(response?.data?.msg)
        })
    } catch (error) {
      setEditSpinner(false)

      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (storeData?.tag.includes(event.target.value) === false) {
        setStoreData({
          ...storeData,
          tag: [...storeData.tag, event.target.value],
        })
        setTag('')
      }
    }
  }

  const handleDeleteTag = (tag) => {
    let newArr = storeData?.tag.filter((t) => tag !== t)

    setStoreData({ ...storeData, tag: newArr })
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton style={{ border: 'none' }}>
          <Modal.Title style={{ fontSize: '22px' }}>
            Create New Store
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              placeholder='Name of manager'
              value={storeData.manager}
              onChange={handleInput}
              name='manager'
            />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Store Manager Phone*</label>
            <br />
            <input
              type='text'
              placeholder='Please input your phone'
              value={storeData.phone}
              onChange={handleInput}
              name='phone'
            />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Store Manager Email*</label>
            <br />
            <input
              type='text'
              placeholder='Please input your email'
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
              placeholder='Please input your address'
              value={storeData.address}
              onChange={handleInput}
              name='address'
            />
          </div>

          <div className='plain-input my-3'>
            <label for=''>Tags*</label>
            <br />
            <input
              type='text'
              placeholder='Please input your tag'
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
          </div>
          <div className='d-flex justify-content-start align-items-center flex-wrap'>
            {storeData?.tag?.map((tag, idx) => (
              <span
                key={idx}
                className=' p-2  me-2 mb-2'
                style={{
                  color: 'black',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                }}
              >
                {tag}
                <TiDelete
                  style={{
                    marginLeft: '5px',
                    height: '20px',
                    width: '20px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleDeleteTag(tag)}
                />
              </span>
            ))}
          </div>

          <div className='plain-input my-3'>
            <label for=''>Type*</label>
            <br />
            <input
              type='text'
              placeholder='Please input store type'
              value={storeData.type}
              onChange={(e) =>
                setStoreData({ ...storeData, type: e.target.value })
              }
              name='address'
            />
          </div>

          <div className='plain-input my-3'>
            <label for=''>Footer Text</label>
            <br />
            <input
              type='text'
              placeholder='You can add your hours here'
              value={storeData.footer}
              onChange={(e) =>
                setStoreData({ ...storeData, footer: e.target.value })
              }
              name='footer'
            />
          </div>

          <div className='plain-input my-3'>
            <label for=''>Social Link(QR Link)</label>
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
            <label for=''>API Key*</label>
            <br />
            <input
              type='text'
              placeholder='Please input your api key'
              value={storeData?.api_key}
              onChange={handleInput}
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

          {/* </form> */}
        </Modal.Body>
        <Modal.Footer>
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
    </>
  )
}
