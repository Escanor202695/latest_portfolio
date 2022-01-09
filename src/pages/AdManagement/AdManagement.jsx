import React, { useEffect, useState } from 'react'
import DashBoard from '../../components/DashBoard/DashBoard'
import plus from '../../assets/icons/plus.svg'
import './AdManagement.scss'
import { AdCards } from '../../components/AdCards'
import { AddNewAdModal } from '../../components/Modals/AddNewAdModal'
import axios from 'axios'
import { AdGetEnd, GetAllFoldersEnd } from '../../constants/api.constants'
import Toast from '../../utils/Toast/Toast'
import { AiFillFolder, AiFillFolderAdd } from 'react-icons/ai'
import { FaArrowLeft } from 'react-icons/fa'
import { Spinner } from 'react-bootstrap'
import AddNewFolderModal from '../../components/Modals/AddNewFolderModal/AddNewFolderModal'

const AdManagement = () => {
  const [show, setShow] = useState(false)
  const [allFolders, setAllFolders] = useState([])
  const [folderSearchId, setFolderSearchId] = useState('')
  const [previousSearchId, setPreviousSearchId] = useState('')
  const [spinner, setSpinner] = useState(false)
  const [ad, setAd] = useState([])
  const [view, setView] = useState('grid')
  const [adSearchKey, setAdSearchKey] = useState('')
  const [addNewFolder, setAddNewFolder] = useState(false)

  useEffect(() => {
    if (view === 'grid') {
      loadAllFolders(folderSearchId)
    } else {
      loadAllAds()
    }
  }, [folderSearchId, adSearchKey, view])

  const loadAllFolders = async (id) => {
    setSpinner(true)
    try {
      let url = GetAllFoldersEnd
      if (folderSearchId) {
        url += `?parent_id=${id}`
      }

      const response = await axios.get(url, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      if (response.status === 200) {
        setAllFolders(response.data.data)
        // setSpinner(false)
      } else
        throw new Error(
          response?.data?.msg ||
            'Cant load folder at this time. Please try again later.'
        )
    } catch (error) {
      Toast('err', error.response?.data?.msg)
      // setSpinner(false)
    }

    try {
      let adGetUrl = AdGetEnd
      if (folderSearchId) {
        adGetUrl += `?folder_id=${folderSearchId}`
      }

      const response = await axios.get(adGetUrl, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      if (response.status === 200) {
        setAd(response.data.data)
        setSpinner(false)
      } else
        throw new Error(
          response?.data?.msg ||
            'Cant load Ad at this time. Please try again later.'
        )
    } catch (error) {
      Toast('err', error.response?.data?.msg)
      setSpinner(false)
    }
  }

  const loadAllAds = async () => {
    setSpinner(true)
    try {
      let adGetUrl = AdGetEnd
      if (adSearchKey) {
        adGetUrl += `?name=${adSearchKey}`
      }

      const response = await axios.get(adGetUrl, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      if (response.status === 200) {
        setAd(response.data.data)
        setSpinner(false)
      } else
        throw new Error(
          response?.data?.msg ||
            'Cant load Ad at this time. Please try again later.'
        )
    } catch (error) {
      Toast('err', error.response?.data?.msg)
      setSpinner(false)
    }
  }

  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        {' '}
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fw-bold'>Advertisement Management</h3>
          <button
            className='primary-btn d-flex justify-content-center align-items-center '
            onClick={() => setShow(true)}
          >
            <img className='me-3' src={plus} alt='' /> Upload New Ad
          </button>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-4'>
          <div className='custom-input me-2'>
            <label for=''>Search Adverts</label>
            <br />
            <input
              type='text'
              placeholder='Search by name etc'
              onChange={(e) => setAdSearchKey(e.target.value)}
            />
          </div>
          <div className='custom-dropdown ms-2'>
            <label for=''>View</label>
            <select onChange={(e) => setView(e.target.value)}>
              <option value='grid'>Grid view</option>
              <option value='list'>List View (all ad)</option>
            </select>
          </div>
        </div>
        {spinner && (
          <div className='text-center my-5'>
            <Spinner
              animation='border'
              style={{ color: 'var(--primary_color)' }}
            />
          </div>
        )}
        {!spinner && view === 'grid' && (
          <section>
            <section className=' d-flex justify-content-start align-items-start flex-wrap'>
              {allFolders.length > 0 &&
                allFolders.map((folder, idx) => (
                  <div
                    key={idx}
                    className='mx-2'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setPreviousSearchId(folderSearchId)
                      setFolderSearchId(folder?._id)
                    }}
                  >
                    <AiFillFolder
                      style={{
                        height: '7rem',
                        width: '7rem',
                        fontColor: 'blue',
                      }}
                      color='var(--primary_color)'
                      title={folder?.name}
                    />
                    <p
                      className='m-0 text-center'
                      style={{
                        position: 'relative',
                        top: '-1rem',
                      }}
                    >
                      {folder?.name}
                    </p>
                  </div>
                ))}
              <div
                onClick={() => setAddNewFolder(true)}
                style={{ cursor: 'pointer' }}
                className='mx-2'
              >
                <AiFillFolderAdd
                  style={{
                    height: '7rem',
                    width: '7rem',
                    fontColor: 'blue',
                  }}
                  color='var(--primary_color)'
                  title='Add New Folder'
                />
              </div>
            </section>
            {ad.length > 0 && folderSearchId
              ? ad.map((ad, idx) => (
                  <AdCards
                    index={idx + 1}
                    key={idx}
                    ad={ad}
                    loadAllFolders={loadAllFolders}
                    folderId={folderSearchId}
                  />
                ))
              : folderSearchId && (
                  <h3 className='text-secondary my-5 text-center'>
                    No ad Found!
                  </h3>
                )}
          </section>
        )}
        {view === 'list' && (
          <div>
            {!spinner && ad.length > 0
              ? ad.map((ad, idx) => (
                  <AdCards
                    key={idx}
                    index={idx + 1}
                    ad={ad}
                    loadAllFolders={loadAllFolders}
                    folderId={folderSearchId}
                  />
                ))
              : folderSearchId && (
                  <h3 className='text-secondary my-5 text-center'>
                    No ad Found!
                  </h3>
                )}
          </div>
        )}
        {view === 'grid' && (
          <button
            className='primary-btn '
            style={{ position: 'absolute', bottom: '2rem', right: '2rem' }}
            disabled={folderSearchId ? false : true}
            onClick={() =>
              setFolderSearchId(
                previousSearchId === folderSearchId ? '' : previousSearchId
              )
            }
          >
            <FaArrowLeft className='me-1' />
            Back
          </button>
        )}
      </div>
      <AddNewAdModal
        show={show}
        handleClose={() => setShow()}
        folderId={folderSearchId}
        loadAllFolders={loadAllFolders}
      />
      <AddNewFolderModal
        show={addNewFolder}
        handleClose={() => setAddNewFolder()}
        parent={folderSearchId}
        loadAllFolders={loadAllFolders}
      />
    </div>
  )
}

export default AdManagement
