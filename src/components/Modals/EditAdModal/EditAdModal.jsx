import React, { useEffect, useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import axios from 'axios'
import { AdEditEnd } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const EditAdModal = ({ show, handleClose, ad, loadAllFolders, folderID }) => {
  const [spinner, setSpinner] = useState(false)
  const [data, setData] = useState({
    id: '',
    folder_id: '',
    name: '',
    description: '',
  })

  // console.log(ad)

  useEffect(() => {
    setData({
      id: ad?._id,
      folder_id: ad?.folder_id,
      name: ad?.name,
      description: ad?.description || '',
    })
  }, [ad])

  const handleAdEdit = async () => {
    setSpinner(true)
    if (!data?.name) {
      Toast('err', 'Please insert folder name')
      setSpinner(false)
      return
    }

    try {
      const response = await axios.put(
        AdEditEnd,

        data,
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )
      // console.log(response.data)
      if (response.status === 200) {
        Toast('success', 'AD updated!')
        handleClose()
        setSpinner(false)
        loadAllFolders(folderID)

        setData({
          id: '',
          folder_id: '',
          name: '',
          description: '',
        })
      } else throw new Error(response.data?.msg || 'Try again later')
    } catch (error) {
      setSpinner(false)
      setData({
        id: '',
        folder_id: '',
        name: '',
        description: '',
      })
      Toast('err', error.data?.msg)
      handleClose()
    }
  }

  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Edit AD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='mb-3'>
          <div className='plain-input my-3'>
            <label for=''>Folder Name* </label>
            <br />
            <input
              type='text'
              placeholder='enter name'
              value={data?.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className='plain-input my-3'>
            <label for=''>Description</label>
            <br />
            <input
              type='text'
              placeholder='enter details'
              value={data?.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn' onClick={() => handleAdEdit()}>
          Save Changes{' '}
          {spinner && <Spinner animation='border' size='sm' className='ms-2' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditAdModal
