import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import { StoreEdit } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const EditScheduleModal = ({ show, hide, loadStoreData, storeData }) => {
  const [duration, setDuration] = useState(0)
  const [interval, setIntervall] = useState(0)
  const [spinner, setSpinner] = useState(false)
  useEffect(() => {
    setDuration(storeData?.ad_timing?.duration)
    setIntervall(storeData?.ad_timing?.interval)
  }, [storeData])

  const handleSubmit = async () => {
    if (!interval) {
      Toast('err', 'Interval can not be zero')
      return
    }
    if (!duration) {
      Toast('err', 'Duration can not be zero')
      return
    }
    setSpinner(true)

    try {
      const res = await axios.put(
        StoreEdit,
        {
          id: storeData?._id,
          ad_timing: {
            duration: duration,
            interval: interval,
          },
        },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )

      if (res.status === 200) {
        Toast('success', 'Schedule updated successfully')
        hide()
        setSpinner(false)
        loadStoreData()
      } else
        throw new Error(
          res?.data?.msg || 'Something went wrong! Try again later.'
        )
    } catch (error) {
      setSpinner(false)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  return (
    <Modal show={show} onHide={hide} size='md'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Edit Schedule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='my-3'>
          <Form.Label className='fw-bold'>Duration Of Each AD</Form.Label>
          <Form.Range
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            max={500}

          />
          <div className='plain-input my-3'>
            <input type='number' placeholder=' ' value={duration} />
            <span
              style={{
                position: 'relative',
                color: 'dimgray',
                left: '85%',
                top: '-35px',
              }}
            >
              seconds
            </span>
          </div>
          <Form.Label className='fw-bold'>Interval Between Ads</Form.Label>
          <Form.Range
            value={interval}
            onChange={(e) => setIntervall(e.target.value)}
            style={{ color: 'black' }}
            max={1000}
          />
          <div className='plain-input my-3'>
            <input type='number' placeholder='' value={interval} />
            <span
              style={{
                position: 'relative',
                color: 'dimgray',
                left: '85%',
                top: '-35px',
              }}
            >
              seconds
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='primary-btn-light' onClick={hide}>
          Close
        </button>
        <button className='primary-btn' onClick={() => handleSubmit()}>
          Save Schedule{' '}
          {spinner && <Spinner className='ms-2' animation='border' size='sm' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditScheduleModal
