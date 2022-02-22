import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import InputRange from 'react-input-range'
import {
  CreateScreenEnd,
  GetAllCateEnd,
  GetThemeEnd,
} from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'
import { GiCancel } from 'react-icons/gi'

const CreateNewScreen = ({ show, handleClose, store, loadStoreScreen }) => {
  const [rangeValue, setRangeValue] = useState({
    value: { min: 0, max: 0 },
  })
  const [themes, setThemes] = useState({})
  const [newScreenData, setNewScreenData] = useState({
    theme_id: '',
    category_names: [],
    screen_name: '',
    screen_type: 'click-n-collect',
  })
  const [spinner, setSpinner] = useState(false)
  const [allCate, setAllCate] = useState([])

  useEffect(() => {
    getAllTheme()
    getAllCate()
  }, [])

  const getAllCate = async () => {
    try {
      const res = await axios.get(GetAllCateEnd, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (res.status === 200) {
        setAllCate(res?.data?.data)
      } else throw new Error(res?.data?.msg || 'Try again later!')
    } catch (error) {}
  }

  const getAllTheme = async () => {
    try {
      const res = await axios.get(GetThemeEnd, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (res.status === 200) {
        setThemes(res?.data?.data)
      } else throw new Error(res?.data?.msg || 'Try again later!')
    } catch (error) {}
  }

  const handleCreate = async () => {
    setSpinner(true)
    const mergedData = {
      ...newScreenData,
      store_id: store?._id,
      product_count: rangeValue?.value?.max - rangeValue?.value?.min,
    }
    if (!mergedData?.screen_name) {
      Toast('err', 'Screen name is required')
      setSpinner(false)
      return
    }
    if (mergedData?.category_names.length === 0) {
      Toast('err', 'Category is required')
      setSpinner(false)
      return
    }
    if (!mergedData?.theme_id) {
      Toast('err', 'Theme is required')
      setSpinner(false)
      return
    }
    if (mergedData?.product_count < 1) {
      Toast('err', 'Product count can not be 0')
      setSpinner(false)
      return
    }
    try {
      const res = await axios.post(
        CreateScreenEnd,
        { ...mergedData },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )

      if (res.status === 200) {
        setSpinner(false)
        Toast('success', 'Screen created successfully')
        handleClose()
        loadStoreScreen()
        setNewScreenData({
          theme_id: '',
          category_names: [],
          screen_name: '',
          screen_type: 'click-n-collect',
        })
        setRangeValue({
          value: { min: 0, max: 0 },
        })
      } else throw new Error(res?.data?.msg || 'Try again later!')
    } catch (error) {
      setSpinner(false)
      Toast('err', error.response?.data?.msg || 'Try again later!')
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newCate = newScreenData?.category_names
      newCate.push(event.target.value)
      setNewScreenData({
        ...newScreenData,
        category_names: newCate,
      })
    }
  }

  const removeCate = (item) => {
    const newCate = newScreenData?.category_names.filter((c) => c !== item)
    setNewScreenData({
      ...newScreenData,
      category_names: newCate,
    })
  }

  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>
          Create New Screen for {store?.name}{' '}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='my-3'>
          <div className='plain-input my-3'>
            <label for=''> Screen Name*</label>
            <br />
            <input
              type='text'
              placeholder='Screen Name'
              onChange={(e) =>
                setNewScreenData({
                  ...newScreenData,
                  screen_name: e.target.value,
                })
              }
            />
          </div>
          <div className='screen-types my-3'>
            <p className='fw-bold mb-2'>Screen Type*</p>
            <button
              className={
                newScreenData?.screen_type === 'click-n-collect'
                  ? 'primary-btn-light me-2 '
                  : 'btn-white-bg me-2'
              }
              onClick={() => {
                setNewScreenData({
                  ...newScreenData,
                  screen_type: 'click-n-collect',
                })
              }}
            >
              Click-n-Collect
            </button>
            <button
              className={
                newScreenData?.screen_type === 'click-n-collect'
                  ? 'btn-white-bg me-2'
                  : 'primary-btn-light me-2'
              }
              onClick={() => {
                setNewScreenData({
                  ...newScreenData,
                  screen_type: 'category-screen',
                })
              }}
            >
              Category Screen
            </button>
          </div>
          <div className='plain-dropdown my-3'>
            <label for=''>Product Count*</label>
            <InputRange
              maxValue={2000}
              minValue={0}
              value={rangeValue.value}
              onChange={(value) => setRangeValue({ value })}
              style={{ padding: '0px 10px' }}
            />
          </div>
          {/* <div className='plain-input my-3'>
            <label for=''> Category*</label>
            <br />
            <input
              type='text'
              placeholder='enter category name'
              onKeyDown={(e) => {
                handleKeyDown(e)
              }}
            />
          </div>
          <div className='mt-3 d-flex justify-content-start align-items-center flex-wrap'>
            {newScreenData?.category_names?.map((c, idx) => (
              <span
                key={idx}
                style={{ backgroundColor: '#e1e1e1', borderRadius: '4px' }}
                className=' py-2 px-3  me-2 mt-2 '
              >
                {c}{' '}
                <GiCancel
                  className='ms-2'
                  onClick={() => removeCate(c)}
                  style={{ cursor: 'pointer' }}
                />
              </span>
            ))}
          </div> */}

          <div className='plain-dropdown mt-3'>
            <label for=''>Category*</label>
            <select
              onChange={(e) =>
                setNewScreenData({
                  ...newScreenData,
                  category_names: [e.target.value],
                })
              }
            >
              <option value='' hidden>
                not selected
              </option>
              {allCate?.map((c, idx) => (
                <option value={c} key={idx}>
                  {' '}
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className='plain-dropdown mt-4'>
            <label for=''>Layout Theme*</label>
            <select
              onChange={(e) =>
                setNewScreenData({
                  ...newScreenData,
                  theme_id: e.target.value,
                })
              }
            >
              <option hidden>no theme selected</option>
              {themes.length > 0 &&
                themes.map((theme, idx) => (
                  <option key={idx} value={theme?._id}>
                    {theme?.name}
                  </option>
                ))}
            </select>
          </div>

          {/* <div className='plain-input my-3'>
            <label for=''>Android ID (TV-Stick)</label>
            <br />
            <input type='text' placeholder='input something' />
          </div> */}
          {/* <div className='plain-input my-3'>
            <label for=''>Screen ID</label>
            <br />
            <input type='number' placeholder='12323213' />
          </div> */}
          <div className='plain-input my-3'>
            <label for=''>Screen Password*</label>
            <br />
            <input
              type='text'
              placeholder='ads@33TqRt'
              // onChange={(e) =>
              //   setNewScreenData({
              //     ...newScreenData,
              //     theme_id: e.target.value,
              //   })
              // }
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn' onClick={handleCreate}>
          Create Theme {spinner && <Spinner animation='border' size='sm' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateNewScreen
