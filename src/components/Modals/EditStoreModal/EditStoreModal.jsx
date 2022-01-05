import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import demoImg from '../../../assets/images/demoLogoImg.png'
import uploadBtn from '../../../assets/icons/upload.svg'
import axios from 'axios'
import { StoreEdit } from '../../../constants/api.constants'
import { InputTag } from '../../Tag'

const EditStoreModal = ({ show, handleClose, data, loadStoreData }) => {
  // console.log(data._id)
  const [storeData, setStoreData] = useState({
    id: '',
    name: '',
    manager: '',
    phone: '',
    email: '',
    address: '',
  })
  console.log(storeData)

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
  console.log(dbData)
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
  // console.log(data.tag)
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

  const handleTagClick = (index) => {
    // console.log('The tag at index ' + index + ' was clicked');
  }

  async function postStoreData() {
    const tagArray = []
    tags.map((tag) => {
      console.log(tag)
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
      console.log(dataObj)
      await axios
        .put(StoreEdit, dataObj, {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        })
        .then((response) => {
          console.log(response)
          handleClose()
          loadStoreData()
        })
    } catch (error) {
      handleClose()
      console.log(error)
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
                placeholder='Search something'
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
                placeholder='Search something'
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
                placeholder='Search something'
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
                placeholder='Search something'
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
                placeholder='Search something'
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
          <button className='primary-btn-light' onClick={handleClose}>
            Close
          </button>
          <button
            className='primary-btn'
            onClick={() => postStoreData()}
            type='submit'
          >
            Save Changes
          </button>
          {/* </form> */}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  )
}

export default EditStoreModal
