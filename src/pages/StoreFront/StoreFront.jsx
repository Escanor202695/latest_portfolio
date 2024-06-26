import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Breadcrumb, Spinner } from 'react-bootstrap'
import 'react-input-range/lib/css/index.css'
// import { StoreProvider } from '../../Providers'
import { useHistory, useParams } from 'react-router-dom'
import plus from '../../assets/icons/plus.svg'
import AdCard from '../../components/AdCard/AdCard'
import DashBoard from '../../components/DashBoard/DashBoard'
import AddStoreAd from '../../components/Modals/AddStoreAd/AddStoreAd'
import { CreateNewScreen } from '../../components/Modals/CreateNewScreen'
import { EditScheduleModal } from '../../components/Modals/EditScheduleModal'
import { EditStoreModal } from '../../components/Modals/EditStoreModal'
import Screens from '../../components/Screens/Screens'
import { GetScreenEnd, StoreAPI } from '../../constants/api.constants'
import Toast from '../../utils/Toast/Toast'
import './StoreFront.scss'

const StoreFront = () => {
  const [showCreateScreen, setShowCreateScreen] = React.useState(false)

  const [editModal, setEditModal] = useState(false)
  const handleClose = () => setShowCreateScreen(false)
  let history = useHistory()
  const [spinner, setSpinner] = useState(false)
  const [screenSpinner, setScreenSpinner] = useState(false)
  const [editInfoModal, setEditInfoModal] = useState(false)
  const [screenSearchKey, setScreenSearchKey] = useState('')
  const [adnewAdd, setAdnewAdd] = useState(false)

  const { id } = useParams()
  const [storeData, setStoreData] = useState({})

  useEffect(() => {
    loadStoreData()
  }, [])
  useEffect(() => {
    loadStoreScreen()
  }, [screenSearchKey])

  const loadStoreData = async () => {
    setSpinner(true)
    try {
      const response = await axios.get(StoreAPI + `?id=${id}`, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      if (response.status === 200) {
        setStoreData(response.data.data[0])
        setSpinner(false)
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      setSpinner(false)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }
  const [screens, setScreens] = useState([])

  const loadStoreScreen = async () => {
    setScreenSpinner(true)
    let url = GetScreenEnd + `?store_id=${id}`
    if (screenSearchKey) {
      url += `&filter=${screenSearchKey}`
    }
    try {
      const response = await axios.get(url, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      if (response.status === 200) {
        setScreens(response?.data?.data)
        setScreenSpinner(false)
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      setScreenSpinner(false)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <Breadcrumb>
          <Breadcrumb.Item
            onClick={() => history.push('/storefront-management')}
          >
            Storefront Management
          </Breadcrumb.Item>
          <Breadcrumb.Item active>storefront</Breadcrumb.Item>
        </Breadcrumb>
        <div className='d-flex justify-content-between align-items-center'>
          {/* <h3 className='fw-bold'> {store[0].name} </h3> */}
        </div>
        <h5 className='mt-4 fw-bold d-flex justify-content-start align-items-center'>
          Store Details
          {spinner && <Spinner animation='border' size='sm' className='ms-2' />}
        </h5>

        <section className='store-details d-flex justify-content-between align-items-start'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='me-5 custom-header'>
              <h6>Store name</h6>
              <h6>Store Type</h6>
              <h6>Store Manager / POC</h6>
              <h6>Store Phone</h6>
              <h6>Store Email</h6>
              <h6>Store Address</h6>
              <h6>Store Id</h6>
              <h6>Product Slider Interval</h6>
              <h6>Api Key</h6>

              <h6>Footer Text</h6>
              <h6>API Link</h6>
              <h6>Social Link(QR Link)</h6>
              <h6>Tags</h6>
            </div>
            <div className='ms-5'>
              <h6>{storeData?.name}</h6>
              <h6>{storeData?.type}</h6>
              <h6>{storeData?.manager}</h6>
              <h6>{storeData?.phone}</h6>
              <h6>{storeData?.email}</h6>
              <h6>{storeData?.address}</h6>
              <h6>{storeData?.short_id}</h6>
              <h6>{storeData?.product_slider_interval}</h6>
              <h6>{storeData?.api_key}</h6>

              <h6>{storeData?.footer || '_'}</h6>
              <a
                href={storeData?.link || '_'}
                className='d-block'
                target='_blank'
              >
                <h6> Go to link</h6>
              </a>
              <a
                href={storeData?.social_link || '_'}
                className='d-block'
                target='_blank'
              >
                <h6>Go to social link</h6>
              </a>
              <h6>
                {storeData?.tag?.length > 0
                  ? storeData?.tag.map((dt, idx) => (
                      <span
                        key={idx}
                        style={{
                          color: 'black',
                          backgroundColor: '#e0e0e0',
                          padding: ' .3rem 1rem',
                          marginRight: '.7rem',
                          borderRadius: '4px',
                        }}
                      >
                        {dt}
                      </span>
                    ))
                  : 'N/A'}
              </h6>
            </div>
          </div>
          <button
            className='primary-btn-light'
            onClick={() => setEditInfoModal(true)}
          >
            Edit Info
          </button>
        </section>
        <section className='my-5' style={{ minHeight: '10rem' }}>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='fw-bold'>
              Screens{' '}
              {screenSpinner && <Spinner animation='border' size='sm' />}
            </h5>
            <button
              className='primary-btn d-flex justify-content-center align-items-center'
              onClick={() => setShowCreateScreen(true)}
            >
              {' '}
              <img className='me-3' src={plus} alt='' /> Add New Screen
            </button>
          </div>

          <div className='custom-input mt-3 me-2 w-100'>
            <input
              type='text'
              placeholder='Search by
              screen name , unique id '
              onChange={(e) => setScreenSearchKey(e.target.value)}
            />
          </div>

          {!screenSpinner && (
            <div>
              {screens.length > 0 ? (
                screens.map((s, idx) => (
                  <Screens
                    screen={s}
                    key={idx}
                    loadStoreScreen={loadStoreScreen}
                    editEnable={true}
                  />
                ))
              ) : (
                <h3 className='text-center text-muted my-5 py-5'>No screens</h3>
              )}
            </div>
          )}
        </section>

        <section className='my-5'>
          <div className='d-flex justify-content-between align-items-start'>
            <div>
              <h5 className='fw-bold'>Advertisements</h5>
              <p>
                Ads are shown on all the screens after every certain “interval”
                & for a “duration”.
              </p>
            </div>
            <button
              className='primary-btn d-flex justify-content-center align-items-center'
              onClick={() => setAdnewAdd(true)}
            >
              {' '}
              <img className='me-3' src={plus} alt='' /> Add/Remove
            </button>
          </div>
          <div>
            <div className='d-flex justify-content-between align-items-center edit-schedule'>
              <h5>
                Ads will play every{' '}
                <span>{storeData?.ad_timing?.interval || 0} sec</span> for{' '}
                <span>{storeData?.ad_timing?.duration || 0} sec</span>
              </h5>
              <button
                className='primary-btn-light'
                onClick={() => setEditModal(true)}
              >
                EDIT SCHEDULE
              </button>
            </div>
            {storeData?.ads?.map((ad, idx) => (
              <AdCard key={idx} ad={ad} index={idx + 1} />
            ))}
          </div>
        </section>
      </div>
      <AddStoreAd
        show={adnewAdd}
        storeData={storeData}
        handleClose={() => setAdnewAdd()}
        loadStoreData={loadStoreData}
      />

      <EditScheduleModal
        show={editModal}
        hide={() => setEditModal()}
        loadStoreData={loadStoreData}
        storeData={storeData}
      />
      <EditStoreModal
        show={editInfoModal}
        handleClose={() => setEditInfoModal()}
        data={storeData}
        loadStoreData={loadStoreData}
      />
      <CreateNewScreen
        show={showCreateScreen}
        handleClose={handleClose}
        store={storeData}
        loadStoreScreen={() => loadStoreScreen()}
      />
    </div>
  )
}

export default StoreFront
