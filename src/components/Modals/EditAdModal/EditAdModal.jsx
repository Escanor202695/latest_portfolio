import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { AdEditEnd } from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'

const EditAdModal = ({ show, handleClose, ad, loadAllFolders, folderID }) => {
  const [spinner, setSpinner] = useState(false)

  const [data, setData] = useState({
    folder_id: '',
    name: '',
    description: '',
    link: '',
    type: 'photo',
  })

  useEffect(() => {
    setData({
      folder_id: ad?.folder_id || '',
      name: ad?.name,
      description: ad?.description,
      type: ad?.type,
    })
  }, [ad])

  const handleEditAd = async () => {
    setSpinner(true)
    if (!data?.name) {
      Toast('err', 'Please insert folder name')
      setSpinner(false)
      return
    }

    if (!data?.type) {
      Toast('err', 'Type must be provided')
      setSpinner(false)
      return
    }

    try {
      const response = await axios.put(
        AdEditEnd,
        { id: ad?._id, ...data },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )

      if (response.status === 200) {
        Toast('success', 'AD Updated!')
        handleClose()
        setSpinner(false)
        setData({
          folder_id: '',
          name: '',
          description: '',
          link: '',
          type: 'photo',
        })
        loadAllFolders(folderID)
      } else throw new Error(response.data?.msg || 'Try again later')
    } catch (error) {
      setSpinner(false)

      Toast('err', error.response?.data?.msg)
    }
  }
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>Edit AD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='my-3'>
          <div className='plain-input my-3'>
            <label for=''>Ad Name* </label>
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

          <div className='plain-dropdown my-3'>
            <label for=''>File Type*</label>
            <br />
            <select
              className=''
              onChange={(e) => setData({ ...data, type: e.target.value })}
            >
              <option value='photo' selected>
                Photo
              </option>
              <option value='video'>Video</option>
            </select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button className='primary-btn' onClick={() => handleEditAd()}>
          Save Changes{' '}
          {spinner && <Spinner animation='border' size='sm' className='ms-2' />}
        </button>
      </Modal.Footer>
    </Modal>
    // <Modal show={show} onHide={handleClose} size='lg'>
    //   <Modal.Header closeButton style={{ border: 'none' }}>
    //     <Modal.Title style={{ fontSize: '22px' }}>Edit AD</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <div className='mb-3'>
    //       <div className='plain-input my-3'>
    //         <label for=''>Ad Name* </label>
    //         <br />
    //         <input
    //           type='text'
    //           placeholder='enter name'
    //           value={data?.name}
    //           onChange={(e) => setData({ ...data, name: e.target.value })}
    //         />
    //       </div>
    //       <div className='plain-input my-3'>
    //         <label for=''>Description</label>
    //         <br />
    //         <input
    //           type='text'
    //           placeholder='enter details'
    //           value={data?.description}
    //           onChange={(e) =>
    //             setData({ ...data, description: e.target.value })
    //           }
    //         />
    //       </div>
    //     </div>
    //   </Modal.Body>
    //   <Modal.Footer style={{ border: 'none' }}>
    //     <button className='primary-btn-light' onClick={handleClose}>
    //       Close
    //     </button>
    //     <button className='primary-btn' onClick={() => handleAdEdit()}>
    //       Save Changes{' '}
    //       {spinner && <Spinner animation='border' size='sm' className='ms-2' />}
    //     </button>
    //   </Modal.Footer>
    // </Modal>
  )
}

export default EditAdModal
