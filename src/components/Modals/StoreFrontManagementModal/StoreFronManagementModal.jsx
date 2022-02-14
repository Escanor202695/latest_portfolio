import axios from 'axios'
import Toast from '../../../utils/Toast/Toast'
import React, { useEffect, useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { StoreCreate } from '../../../constants/api.constants'
import { InputTag } from '../../Tag'
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
  })

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

  function handleSubmit(e) {
    e.preventDefault()
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

    const dataObj = {
      name: storeData.name,
      manager: storeData.manager,
      phone: storeData.phone,
      email: storeData.email,
      address: storeData.address,
      tag: tagArray,
      type: types,
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
      setStoreData({
        name: '',
        manager: '',
        phone: '+88',
        email: '',
        address: '',
      })
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
      handleClose()
      setTypes('Category')
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
              src={demoImg}
              alt='demoImg'
              height='100'
              width='100'
              className='me-4'
            />
            <button className='upload-btn d-flex justify-content-between align-items-center'>
              <span>Upload</span>
              <img
                className='mx-2'
                src={uploadBtn}
                alt=''
                width='24'
                height='24'
              />{' '}
            </button>
          </div>
          <div className='my-3'>
            <div className='plain-input my-3'>
              <label for=''>Store Name</label>
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
              <label for=''>Manager / Owner Name</label>
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
              <label for=''>Manager / Owner Phone</label>
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
              <label for=''>Manager / Owner Email</label>
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
              <label for=''>Address / Location</label>
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
              <label for=''>Tags</label>
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
              <label for=''>Type</label>
              <select onChange={handleInput} name='types'>
                <option value='Category'> Catagory</option>
                <option value='Click-n-Collect'> Click-n-Collect</option>
              </select>
            </div>
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
