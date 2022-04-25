import { Tooltip } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import demoImg from '../../../assets/images/demoLogoImg.png'
import { CreateThemeEnd, FileUploadEnd } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'
import './ThemeStyle.scss'

const CreateThemeModal = ({ show, handleClose, getAllTheme }) => {
  const [photoSpinner, setPhotoSpinner] = useState(false)
  const [spinner, setSpinner] = useState(false)
  const [photoUrl, setPhotoUrl] = useState('')
  const [themeData, setThemeData] = useState({
    name: '',
    primary_color: '#558f55',
    primary_light_color: '#dfecdf',
    secondary_color: '#f4f4f4',
    secondary_light_color: '#f4f4f4',
    text_color: '#202020',
    text_light_color: '#696969',
    gray_one_color: '#333333',
    gray_two_color: '#666666',
    gray_three_color: '#999999',
    sativa_color: '#77ca59',
    indica_color: '#ca8259',
    blend_color: '#ba59ca',
    hybrid_color: '#59afca',
    thc_color: '#59afca',
    cbd_color: '#59afca',
    background_image: '',
  })

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
        setThemeData({
          ...themeData,
          background_image: res.data?.files[0]?.path,
        })
        setPhotoSpinner(false)
        Toast('success', 'Photo uploaded successfully')
      }
    } catch (error) {
      setPhotoSpinner(false)
      setPhotoUrl(null)
    }
  }

  const handleCreateTheme = async () => {
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
      const res = await axios.post(CreateThemeEnd, themeData, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (res.status === 200) {
        Toast('success', 'Theme created successfully!')
        getAllTheme()
        setSpinner(false)
        setThemeData({
          name: '',
          primary_color: '#558f55',
          primary_light_color: '#dfecdf',
          secondary_color: '#f4f4f4',
          secondary_light_color: '#f4f4f4',
          text_color: '#202020',
          text_light_color: '#696969',
          gray_one_color: '#333333',
          gray_two_color: '#666666',
          gray_three_color: '#999999',
          sativa_color: '#77ca59',
          indica_color: '#ca8259',
          blend_color: '#ba59ca',
          hybrid_color: '#59afca',
          thc_color: '#59afca',
          cbd_color: '#59afca',
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
    }
  }

  return (
    <Modal show={show} onHide={handleClose} size='xl'>
      <Modal.Header style={{ border: 'none' }}>
        <Modal.Title>Create New Theme </Modal.Title>
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

          <Form.Group controlId='formBasicEmail'>
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
            <div>
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Primary color
                <Tooltip title='primary_color - Table cell text colors  - title, price, unit, thc, cbd '>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Primary light color{' '}
                <Tooltip title='primary_light_color - Table header row background color'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Secondary color{' '}
                <Tooltip title='secondary color'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Secondary light color{' '}
                <Tooltip title='secondary light color'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Text color{' '}
                <Tooltip title='text_color - Text Color for Store Name, Tag line '>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Text light color{' '}
                <Tooltip title='text_light_color - Text color for Footer and qr text'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Gray one color{' '}
                <Tooltip title=' gray one color'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Gray two color{' '}
                <Tooltip title=' gray two color'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Gray three color{' '}
                <Tooltip title=' gray three color'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Sativa color{' '}
                <Tooltip title='sativa_color -  Background color of Sativa Label'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Indica color{' '}
                <Tooltip title='indica_color - Background color of Indica Label'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Blend color{' '}
                <Tooltip title='blend_color - Background color of Hybrid Label'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Hybrid color{' '}
                <Tooltip title='hybrid_color - Background color of Blend Label'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Thc color{' '}
                <Tooltip title='thc color'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
              <Form.Label className='d-flex justify-content-start align-items-center'>
                Cbd color
                <Tooltip title='cbd color'>
                  <BsFillQuestionCircleFill className='ms-1' />
                </Tooltip>
              </Form.Label>
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
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light px-5' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn ' onClick={handleCreateTheme}>
          Create Theme {spinner && <Spinner animation='border' size='sm' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateThemeModal
