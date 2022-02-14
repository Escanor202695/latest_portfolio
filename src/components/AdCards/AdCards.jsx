import React, { useEffect, useState } from 'react'
import screenImg from '../../assets/images/screen-img.png'
import threedot from '../../assets/icons/threedot.svg'
import './AdCards.scss'
import Frame from '../../assets/images/Frame.png'
import { Dropdown, Modal } from 'react-bootstrap'
import Menues from '../../assets/images/menus.png'
import { EditAdModal } from '../../components/Modals/EditAdModal'
import DeleteAdModal from '../Modals/DeleteAdModal/DeleteAdModal'

const AdCards = ({ ad, index, loadAllFolders }) => {
  const [show, setShow] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  const [adDetails, setAdDetails] = useState({
    description: '',
    folder_id: '',
    link: '',
    name: '',
    _id: '',
  })

  useEffect(() => {
    setAdDetails({
      description: ad?.description,
      folder_id: ad?.folder_id,
      link: ad?.link,
      name: ad?.name,
      _id: ad?._id,
    })
  }, [ad])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className='my-3 row ad-card mx-1'>
      <div
        className='col-6 d-flex justify-content-between align-items-center '
        style={{ borderRight: '2px solid #CCCCCC' }}
      >
        <h4 className='me-2'>{index}</h4>
        <div className='mx-3  preview-bg '>
          {/* <img src={screenImg} alt='' className='me-3' /> */}
          <img
            src={Frame}
            alt=''
            className=''
            onClick={() => handleShow(true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='pe-5'>
          <h6 className='fw-bold'> {adDetails.name} </h6>
          <h6 style={{ fontWeight: 'normal' }}>{adDetails.description}</h6>
          <h6 style={{ fontWeight: 'normal' }}>
            Filetype: Image, Ad Type: Lorem
          </h6>
        </div>
      </div>
      <div className='col-6 d-flex justify-content-between align-items-center'>
        <div className='mx-2  text-center '>
          <h3>43</h3>
          <p>Storefronts</p>
        </div>
        <div className='mx-2 text-center'>
          <h3>4543</h3>
          <p>Views / Per Day</p>
        </div>
        <div className='mx-2 text-center'>
          <h3>$2324.12</h3>
          <p>Ad Revenue</p>
        </div>
        <div style={{ height: '100%' }}>
          {/* <img src={threedot} alt='' /> */}
          <Dropdown drop='start' style={{ cursor: 'pointer' }}>
            <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
              <img src={threedot} alt='' className='' />
            </Dropdown.Toggle>

            <Dropdown.Menu className='mt-4'>
              <Dropdown.Item onClick={() => setEditModal(true)}>
                Edit Ad
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDeleteModal(true)}>
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size='xl' centered>
        <img src={adDetails.link || Menues} alt='' />
      </Modal>
      <EditAdModal
        show={editModal}
        handleClose={() => setEditModal()}
        ad={ad}
        folderID={ad?.folder_id}
        loadAllFolders={loadAllFolders}
      />
      <DeleteAdModal
        show={deleteModal}
        handleClose={() => setDeleteModal()}
        loadAllFolders={loadAllFolders}
        ad={ad}
        folderID={ad?.folder_id}
      />
    </div>
  )
}

export default AdCards
