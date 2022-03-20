import axios from 'axios'
import Toast from '../../../utils/Toast/Toast'
import React, { useEffect, useState } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import { FileUploadEnd, StoreCreate } from '../../../constants/api.constants'
import { InputTag } from '../../Tag'
import { useRef } from 'react'
export default function StoreFronManagementModal({
  show,
  handleClose,
  demoImg,
  uploadBtn,
  loadStoreData,
}) {
  const [editSpinner, setEditSpinner] = useState(false)
  const [storeData, setStoreData] = useState({
    name: '',
    manager: '',
    phone: '+88',
    email: '',
    address: '',
    footer: '',
    link: '',
    social_link: '',
    icon: '',
  })
  const [photoSpinner, setPhotoSpinner] = useState(false)

  const [types, setTypes] = useState('Category')

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

  // function handleSubmit(e) {
  //   e.preventDefault()
  // }

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

    const tagArray = []
    tags.map((tag) => {
      return tagArray.push(tag.text)
    })
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
    if (tagArray.length === 0) {
      Toast('err', 'Please enter at least 1 tag')
      setEditSpinner(false)
      return
    }
    if (storeData.link === '') {
      Toast('err', 'Please enter link')
      setEditSpinner(false)
      return
    }

    const dataObj = {
      name: storeData.name,
      manager: storeData.manager,
      phone: storeData.phone,
      email: storeData.email,
      address: storeData.address,
      tag: tagArray,
      type: types,
      footer: storeData.footer,
      social_link: storeData.social_link,
      link: storeData.link,
      api_key: '2d108b5e-ec42-45cb-a0cf-c5f432ea637a',
      icon: storeData?.icon,
    }
    try {
      await axios
        .post(StoreCreate, dataObj, {
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
              phone: '+88',
              email: '',
              address: '',
            })
            setTags([])
            setTypes('Category')
          } else throw new Error(response?.data?.msg)
        })
    } catch (error) {
      setEditSpinner(false)
      setTags([])
      // setStoreData({
      //   name: '',
      //   manager: '',
      //   phone: '+88',
      //   email: '',
      //   address: '',
      // })
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
      handleClose()
      setTypes('Category')
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
            Create New Store
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form onSubmit={handleSubmit}> */}
          <h6>Store Brand Icon / Logo</h6>
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
                BackGround Image*
                {photoSpinner && (
                  <Spinner className='ms-1' animation='border' size='sm' />
                )}
              </Form.Label>
              <Form.Control
                type='file'
                onChange={(e) => handleImageUpload(e)}
              />
            </Form.Group>
            {/* <button
              className='upload-btn d-flex justify-content-between align-items-center'
              onClick={(event) => {
                fileInputRef.current.click()
              }}
            >
              <span>Upload</span>
              <img
                className='mx-2'
                src={uploadBtn}
                alt=''
                width='24'
                height='24'
              />{' '}
            </button>
            <input
              type='file'
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={(event) => {
                
                setFiles(event.target.files[0])
              }}
            /> */}
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
              <label for=''>Manager / Owner Name*</label>
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
              <label for=''>Manager / Owner Phone*</label>
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
              <label for=''>Manager / Owner Email*</label>
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
            <div className='plain-dropdown '>
              <label for=''>Type*</label>
              <select onChange={handleInput} name='types'>
                <option value='Category'> Catagory</option>
                <option value='Click-n-Collect'> Click-n-Collect</option>
              </select>
            </div>
          </div>

          <div className='plain-input my-3'>
            <label for=''>Footer</label>
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
            <label for=''>Social Link</label>
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
            <label for=''>Link*</label>
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
