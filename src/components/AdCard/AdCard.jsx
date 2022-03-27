import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import Frame from '../../assets/images/Frame.png'
import ScrnImg from '../../assets/images/screen-img.png'
import '../AdCards/AdCards.scss'

const AdCard = ({ ad, index }) => {
  const [show, setShow] = useState(false)
  const [showImgModal, setShowImgModal] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [adEdit, setAdEdit] = useState(false)

  return (
    <div className='my-3  ad-card mx-1'>
      <div className=' d-flex justify-content-start align-items-center '>
        <h4 className='me-2'>{index}</h4>
        {ad?.ad_id?.type === 'photo' ? (
          <div
            className='mx-3  preview-bg '
            style={{ backgroundImage: ` url("${ad?.ad_id?.link || ScrnImg}")` }}
          >
            <img
              src={Frame}
              alt=''
              className=''
              onClick={() => setShowImgModal(true)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ) : (
          <div className='mx-3'>
            <ReactPlayer
              url={ad?.ad_id?.link}
              width='200px'
              height='100px'
              controls={true}
            />
          </div>
        )}
        <div className='pe-5'>
          <h6 className='fw-bold'> {ad?.ad_id?.name} </h6>
          <h6 style={{ fontWeight: 'normal' }}>{ad?.ad_id?.description}</h6>
          <h6 style={{ fontWeight: 'normal' }}>Ad Type: {ad?.ad_id?.type}</h6>
        </div>
      </div>
      <Modal
        show={showImgModal}
        onHide={() => setShowImgModal(false)}
        size='xl'
        centered
      >
        <img src={ad?.ad_id?.link || ScrnImg} alt='' />
      </Modal>
    </div>

    // <div className='my-3 d-flex justify-content-between align-items-start screen-section'>
    //   <div className=' d-flex justify-content-between align-items-center '>
    //     <h5 className='me-2'>{index}. </h5>
    //     <img
    //       src={screenImg}
    //       alt=''
    //       className='me-3'
    //       width='240px'
    //       height='100px'
    //     />
    //     <img
    //       src={Frame}
    //       alt=''
    //       style={{
    //         position: 'relative',
    //         right: '10rem',
    //         top: '2.2rem',
    //         cursor: 'pointer',
    //       }}
    //       // onClick={() => handleShow(true)}
    //     />
    //     <div className='ms-3 screen-right'>
    //       <h6 className='fw-bold'>{ad?.ad_id?.name}</h6>
    //       <h6 style={{ color: 'dimgray' }}>{ad?.ad_id?.description}</h6>
    //     </div>
    //   </div>

    //   <Modal show={show} onHide={handleClose} size='xl' centered>
    //     <img src={AddScreen} alt='' />
    //   </Modal>
    //   <EditAdModal show={adEdit} handleClose={() => setAdEdit()} />
    // </div>
  )
}

export default AdCard
