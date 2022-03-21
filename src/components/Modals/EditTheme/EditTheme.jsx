import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import demoImg from '../../../assets/images/demoLogoImg.png'
import { EditThemeEnd, FileUploadEnd } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'
import '../CreateThemeModal/ThemeStyle.scss'

const EditTheme = ({ show, handleClose, getAllTheme, data }) => {
  const [photoSpinner, setPhotoSpinner] = useState(false)
  const [spinner, setSpinner] = useState(false)
  const [themeData, setThemeData] = useState({
    id: '',
    name: '',
    primary_color: '',
    primary_light_color: '',
    secondary_color: '',
    secondary_light_color: '',
    text_color: '',
    text_light_color: '',
    gray_one_color: '',
    gray_two_color: '',
    gray_three_color: '',
    sativa_color: '',
    indica_color: '',
    blend_color: '',
    hybrid_color: '',
    thc_color: '',
    cbd_color: '',
    background_image: '',
  })

  useEffect(() => {
    setThemeData({
      id: data?._id,
      name: data?.name,
      primary_color: data?.primary_color,
      primary_light_color: data?.primary_light_color,
      secondary_color: data?.secondary_color,
      secondary_light_color: data?.secondary_light_color,
      text_color: data?.text_color,
      text_light_color: data?.text_light_color,
      gray_one_color: data?.gray_one_color,
      gray_two_color: data?.gray_two_color,
      gray_three_color: data?.gray_three_color,
      sativa_color: data?.sativa_color,
      indica_color: data?.indica_color,
      blend_color: data?.blend_color,
      hybrid_color: data?.hybrid_color,
      thc_color: data?.thc_color,
      cbd_color: data?.cbd_color,
      background_image: data?.background_image,
    })
  }, [data])

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
        setThemeData({
          ...themeData,
          background_image: res.data?.files[0]?.path,
        })
        setPhotoSpinner(false)
        Toast('success', 'Photo uploaded successfully')
      }
    } catch (error) {
      setPhotoSpinner(false)
    }
  }

  const handleUpdateTheme = async () => {
    setSpinner(true)
    if (!themeData?.background_image) {
      Toast('err', 'Background image must be provided')
      setSpinner(false)
      return
    }
    if (!themeData?.name) {
      Toast('err', 'Theme name must be provided')
      setSpinner(false)
      return
    }
    try {
      const res = await axios.put(EditThemeEnd, themeData, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (res.status === 200) {
        Toast('success', 'Theme updated successfully!')
        getAllTheme()
        setSpinner(false)
        setThemeData({
          name: '',
          primary_color: '',
          primary_light_color: '',
          secondary_color: '',
          secondary_light_color: '',
          text_color: '',
          text_light_color: '',
          gray_one_color: '',
          gray_two_color: '',
          gray_three_color: '',
          sativa_color: '',
          indica_color: '',
          blend_color: '',
          hybrid_color: '',
          thc_color: '',
          cbd_color: '',
          background_image: '',
        })
        handleClose()
      } else
        throw new Error(
          res?.data?.msg || 'Something went wrong, try again later!'
        )
    } catch (error) {
      Toast(
        'err',
        error?.response?.data?.msg || 'Something went wrong, try again later'
      )
      setSpinner(false)
      handleClose()
    }
  }

  return (
    <Modal show={show} onHide={handleClose} size='xl'>
      <Modal.Header style={{ border: 'none' }}>
        <Modal.Title> Edit Theme </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-secondary'>
        <div className='d-flex justify-content-start align-items-end'>
          <img
            src={themeData?.background_image || demoImg}
            alt=''
            height='140'
            width='240'
            className='me-4'
          />

          <Form.Group className='' controlId='formBasicEmail'>
            <Form.Label>
              BackGround Image*(Content Aspect Ratio recommended 16:9)
              {photoSpinner && (
                <Spinner className='ms-1' animation='border' size='sm' />
              )}
            </Form.Label>
            <Form.Control type='file' onChange={(e) => handleImageUpload(e)} />
          </Form.Group>
        </div>
        <div className='plain-input mt-3 '>
          <label for=''>Theme Name*</label>
          <br />
          <input
            type='text'
            placeholder='enter theme name'
            onChange={(e) =>
              setThemeData({ ...themeData, name: e.target.value })
            }
            value={themeData?.name}
          />
        </div>

        <div className='my-3 custom-color-picker'>
          <h5 className='fw-bold mb-3'>Choose Theme Color</h5>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gridGap: '10px',
            }}
          >
            <div className=''>
              <Form.Label>primary color</Form.Label>
              <Form.Control
                type='color'
                id='primary_color'
                defaultValue='#558f55'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, primary_color: e.target.value })
                }
              />
            </div>
            <div>
              <Form.Label>primary light color</Form.Label>
              <Form.Control
                type='color'
                id='primary_light_color'
                defaultValue='#dfecdf'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({
                    ...themeData,
                    primary_light_color: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Form.Label>secondary color</Form.Label>
              <Form.Control
                type='color'
                id='secondary_color'
                defaultValue='#f4f4f4'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({
                    ...themeData,
                    secondary_color: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Form.Label>secondary light color</Form.Label>
              <Form.Control
                type='color'
                id='secondary_light_color'
                defaultValue='#f4f4f4'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({
                    ...themeData,
                    secondary_light_color: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Form.Label>text color</Form.Label>
              <Form.Control
                type='color'
                id='text_color'
                defaultValue='#563d7c'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, text_color: e.target.value })
                }
              />
            </div>
            <div>
              <Form.Label>text light color</Form.Label>
              <Form.Control
                type='color'
                id='text_light_color'
                defaultValue='#696969'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({
                    ...themeData,
                    text_light_color: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Form.Label>gray one color</Form.Label>
              <Form.Control
                type='color'
                id='gray_one_color'
                defaultValue='#333333'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, gray_one_color: e.target.value })
                }
              />
            </div>
            <div>
              <Form.Label>gray two color</Form.Label>
              <Form.Control
                type='color'
                id='gray_two_color'
                defaultValue='#666666'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, gray_two_color: e.target.value })
                }
              />
            </div>
            <div>
              <Form.Label>gray three color</Form.Label>
              <Form.Control
                type='color'
                id='gray_three_color'
                defaultValue='#999999'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({
                    ...themeData,
                    gray_three_color: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Form.Label>sativa color </Form.Label>
              <Form.Control
                type='color'
                id='sativa_color'
                defaultValue='#77ca59'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, sativa_color: e.target.value })
                }
              />
            </div>
            <div>
              <Form.Label>indica color</Form.Label>
              <Form.Control
                type='color'
                id='indica_color'
                defaultValue='#ca8259'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, indica_color: e.target.value })
                }
              />
            </div>{' '}
            <div>
              <Form.Label>blend color</Form.Label>
              <Form.Control
                type='color'
                id='blend_color'
                defaultValue='#ba59ca'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, blend_color: e.target.value })
                }
              />
            </div>
            <div>
              <Form.Label>hybrid color</Form.Label>
              <Form.Control
                type='color'
                id='hybrid_color'
                defaultValue='#59afca'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, hybrid_color: e.target.value })
                }
              />
            </div>
            <div>
              <Form.Label>thc color </Form.Label>
              <Form.Control
                type='color'
                id='thc_color'
                defaultValue='#59afca'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, thc_color: e.target.value })
                }
              />
            </div>
            <div>
              <Form.Label>cbd color</Form.Label>
              <Form.Control
                type='color'
                id='cbd_color'
                defaultValue='#59afca'
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, cbd_color: e.target.value })
                }
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-3 mb-2 p-2'>
              <Form.Label>text color</Form.Label>
              <Form.Control
                type='color'
                id='text_color'
                defaultValue={themeData?.text_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, text_color: e.target.value })
                }
              />
            </div>

            <div className='col-3 mb-2 p-2'>
              <Form.Label>text light color</Form.Label>
              <Form.Control
                type='color'
                id='text_light_color'
                defaultValue={themeData?.text_light_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({
                    ...themeData,
                    text_light_color: e.target.value,
                  })
                }
              />
            </div>
            <div className='col-3 mb-2 p-2'>
              <Form.Label>gray one color</Form.Label>
              <Form.Control
                type='color'
                id='gray_one_color'
                defaultValue={themeData?.gray_one_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, gray_one_color: e.target.value })
                }
              />
            </div>
            <div className='col-3 mb-2 p-2'>
              <Form.Label>gray two color</Form.Label>
              <Form.Control
                type='color'
                id='gray_two_color'
                defaultValue={themeData?.gray_two_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, gray_two_color: e.target.value })
                }
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-3 mb-2 p-2'>
              <Form.Label>gray three color</Form.Label>
              <Form.Control
                type='color'
                id='gray_three_color'
                defaultValue={themeData?.gray_three_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({
                    ...themeData,
                    gray_three_color: e.target.value,
                  })
                }
              />
            </div>
            <div className='col-3 mb-2 p-2'>
              <Form.Label>sativa color </Form.Label>
              <Form.Control
                type='color'
                id='sativa_color'
                defaultValue={themeData?.sativa_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, sativa_color: e.target.value })
                }
              />
            </div>
            <div className='col-3 mb-2 p-2'>
              <Form.Label>indica color</Form.Label>
              <Form.Control
                type='color'
                id='indica_color'
                defaultValue={themeData?.indica_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, indica_color: e.target.value })
                }
              />
            </div>{' '}
            <div className='col-3 mb-2 p-2'>
              <Form.Label>blend color</Form.Label>
              <Form.Control
                type='color'
                id='blend_color'
                defaultValue={themeData?.blend_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, blend_color: e.target.value })
                }
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-3 mb-2 p-2'>
              <Form.Label>hybrid color</Form.Label>
              <Form.Control
                type='color'
                id='hybrid_color'
                defaultValue={themeData?.hybrid_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, hybrid_color: e.target.value })
                }
              />
            </div>
            <div className='col-3 mb-2 p-2'>
              <Form.Label>thc color </Form.Label>
              <Form.Control
                type='color'
                id='thc_color'
                defaultValue={themeData?.thc_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, thc_color: e.target.value })
                }
              />
            </div>
            <div className='col-3 mb-2 p-2'>
              <Form.Label>cbd color</Form.Label>
              <Form.Control
                type='color'
                id='cbd_color'
                defaultValue={themeData?.cbd_color || '#FFFFFF'}
                title='Choose your color'
                onChange={(e) =>
                  setThemeData({ ...themeData, cbd_color: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light px-5' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn ' onClick={handleUpdateTheme}>
          Update Theme {spinner && <Spinner animation='border' size='sm' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditTheme
