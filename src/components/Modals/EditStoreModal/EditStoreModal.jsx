import React, { useState, useEffect } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import demoImg from '../../../assets/images/demoLogoImg.png'
import uploadBtn from '../../../assets/icons/upload.svg'
import axios from 'axios'
import { DeleteStoreEnd, StoreEdit } from '../../../constants/api.constants'
import { InputTag } from '../../Tag'
import Toast from '../../../utils/Toast/Toast'
import { useHistory } from 'react-router-dom'

const EditStoreModal = ({ show, handleClose, data, loadStoreData }) => {
  const [editSpinner, setEditSpinner] = useState(false)

  const [storeData, setStoreData] = useState({
    id: '',
    name: '',
    manager: '',
    phone: '+88',
    email: '',
    address: '',
  })

  useEffect(() => {
    setStoreData({
      id: data?._id,
      name: data?.name,
      manager: data?.manager,
      phone: data?.phone,
      email: data?.email,
      address: data?.address,
    })
  }, [data])

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
  let emptyObj = []
  const dbData = data.tag

  // if (dbData.length !== 0) {
  //   for (var i = 0; i < dbData.length; i++) {
  //     let tmpEmptyObj = {
  //       id: dbData[i],
  //       text: dbData[i],
  //     }
  //     emptyObj.push(tmpEmptyObj)
  //   }
  // }
  const [tags, setTags] = useState(emptyObj)

  // useEffect(() => {
  //   const obj = {
  //     id: 'Thailand',
  //     text: 'Thailand',
  //   }
  //   setTags({
  //     ...tags,
  //     obj,
  //   })
  // }, [data])

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

    const tagArray = []
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
              phone: '+88',
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
        phone: '+88',
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
  const [deleteSpinner, setDeleteSpinner] = useState(false)

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
                placeholder='Name of manager '
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
                placeholder='Please input phone'
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
                placeholder='Please input email'
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
                placeholder='Please input address'
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
          {' '}
          <button
            className='danger-btn-light d-flex justify-content-center align-items-center'
            onClick={() => handleStoreDelete()}
          >
            Delete{' '}
            {deleteSpinner && (
              <Spinner className='ms-2' animation='border' size='sm' />
            )}
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
    </>
  )
}

export default EditStoreModal
