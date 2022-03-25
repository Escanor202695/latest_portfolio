import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import { GiCancel } from 'react-icons/gi'
import InputRange from 'react-input-range'
import demoImg from '../../../assets/images/demoLogoImg.png'
import {
  EditScreenEnd,
  FileUploadEnd,
  GetAllCateEnd,
  GetThemeEnd,
} from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const EditScreenModal = ({
  show,
  handleClose,
  store,
  loadStoreScreen,
  data,
}) => {
  const [catInfo, setCatInfo] = useState([])
  const [themes, setThemes] = useState({})
  const [newScreenData, setNewScreenData] = useState({
    theme_id: '',
    category_names: [],
    screen_name: '',
    screen_type: 'category-screen',
  })
  const [spinner, setSpinner] = useState(false)
  const [allCate, setAllCate] = useState([])
  const [photoUrl, setPhotoUrl] = useState('')
  const [photoSpinner, setPhotoSpinner] = useState(false)

  console.log(data)
  useEffect(() => {
    console.log(data?.screen_name)

    if (data?.category?.length) {
      let tempArr = []
      let tempcatInfo = []
      for (let i = 0; i < data?.category?.length; i++) {
        tempArr.push(data?.category[i]?.name)
        tempcatInfo.push({
          cat_name: data?.category[i]?.name,
          value: {
            max: data?.category[i]?.product_count_end,
            min: data?.category[i]?.product_count_start,
          },
        })
        if (data?.category?.length - 1 === i) {
          setNewScreenData({
            ...newScreenData,
            category_names: tempArr,
            screen_name: data?.screen_name,
            screen_type: data?.screen_type,
            theme_id: data?.theme_id?._id,
          })
          setCatInfo(tempcatInfo)
        }
      }
    } else {
      setNewScreenData({
        ...newScreenData,
        screen_name: data?.screen_name,
        screen_type: data?.screen_type,
        theme_id: data?.theme_id?._id,
      })
    }
  }, [data])

  console.log(newScreenData)

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

  const handleEdit = async () => {
    setSpinner(true)
    let mergedData = {
      screen_name: newScreenData.screen_name,
      screen_type: newScreenData.screen_type,
      theme_id: newScreenData.theme_id,
      store_id: store?._id,
    }

    let mergedCat = []
    for (const i of catInfo) {
      mergedCat.push({
        name: i?.cat_name,
        product_count_start: i?.value?.min,
        product_count_end: i?.value?.max,
      })
    }

    mergedData = {
      ...mergedData,
      id: data?._id,
      category: mergedCat,
      preview: photoUrl,
    }

    if (!mergedData?.screen_name) {
      Toast('err', 'Screen name is required')
      setSpinner(false)
      return
    }
    if (mergedData?.category.length === 0) {
      Toast('err', 'Category is required')
      setSpinner(false)
      return
    }
    if (!mergedData?.theme_id) {
      Toast('err', 'Theme is required')
      setSpinner(false)
      return
    }

    try {
      const res = await axios.put(
        EditScreenEnd,
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
          screen_type: 'category-screen',
        })
        setPhotoUrl('')
        setCatInfo([])
      } else throw new Error(res?.data?.msg || 'Try again later!')
    } catch (error) {
      setSpinner(false)
      Toast('err', error.response?.data?.msg || 'Try again later!')
    }
  }

  const removeCate = (item) => {
    const newCate = newScreenData?.category_names.filter((c) => c !== item)
    setNewScreenData({
      ...newScreenData,
      category_names: newCate,
    })
    const filteredCatInfo = catInfo?.filter((f) => f?.cat_name !== item)
    setCatInfo(filteredCatInfo)
  }

  const handleCate = (newCate) => {
    if (!newScreenData?.category_names.includes(newCate)) {
      let newArr = newScreenData?.category_names
      newArr.push(newCate)
      setNewScreenData({
        ...newScreenData,
        category_names: newArr,
      })
      setCatInfo([...catInfo, { cat_name: newCate, value: { max: 0, min: 0 } }])
    }
  }

  const handleProductCount = (value, c) => {
    let newArr = []
    let len = catInfo.length
    for (let i = 0; i < len; i++) {
      if (catInfo[i]?.cat_name !== c) newArr.push(catInfo[i])
      else {
        newArr.push({ cat_name: catInfo[i]?.cat_name, value: value })
      }

      if (i === len - 1) {
        setCatInfo(newArr)
      }
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
        setPhotoUrl(res.data?.files[0]?.path)
        setPhotoSpinner(false)
        Toast('success', 'File uploaded successfully')
      }
    } catch (error) {
      setPhotoSpinner(false)
      setPhotoUrl(null)
    }
  }

  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Edit Screen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='my-3'>
          <div className='d-flex justify-content-start align-items-end'>
            <img
              src={photoUrl || demoImg}
              alt=''
              height='100'
              width='200'
              className='me-4'
            />

            <Form.Group className='' controlId='formBasicEmail'>
              <Form.Label>
                Image
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
            <label for=''> Screen Name*</label>
            <br />
            <input
              type='text'
              placeholder='Screen Name'
              value={newScreenData?.screen_name}
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
            </button>{' '}
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
          </div>

          <div className='plain-dropdown mt-3'>
            <label for=''>Category*</label>
            <select onChange={(e) => handleCate(e.target.value)}>
              <option value='' hidden>
                not selected
              </option>
              {allCate?.map((c, idx) => (
                <option value={c} key={idx}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className='mt-3'>
            {newScreenData?.category_names?.map((c, idx) => (
              <div key={idx}>
                <div
                  style={{ backgroundColor: '#e1e1e1', borderRadius: '4px' }}
                  className=' py-2 px-3  me-2 mt-2 d-flex justify-content-between align-items-center'
                >
                  {c}{' '}
                  <GiCancel
                    className='ms-2'
                    onClick={() => removeCate(c)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className='plain-dropdown my-3'>
                  <label for=''>Product Count For {c}*</label>
                  <InputRange
                    maxValue={2000}
                    minValue={0}
                    value={catInfo?.find((f) => f?.cat_name === c)?.value}
                    // value={rangeValue?.value}
                    onChange={(value) => handleProductCount(value, c)}
                    style={{ padding: '0px 10px' }}
                  />
                </div>
              </div>
            ))}
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
                  <option
                    key={idx}
                    value={theme?._id}
                    selected={
                      data?.theme_id?.name === theme?.name ? true : false
                    }
                  >
                    {theme?.name}
                  </option>
                ))}
            </select>
          </div>

          <div className='plain-input my-3'>
            <label for=''>Screen Password*</label>
            <br />
            <input type='text' />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn' onClick={handleEdit}>
          Edit Screen {spinner && <Spinner animation='border' size='sm' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}
export default EditScreenModal
