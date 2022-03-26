import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dropdown, Spinner } from 'react-bootstrap'
import { AiFillFolder, AiFillFolderAdd } from 'react-icons/ai'
import { FaArrowLeft } from 'react-icons/fa'
import plus from '../../assets/icons/plus.svg'
import threedot from '../../assets/icons/threedot.svg'
import { AdCards } from '../../components/AdCards'
import DashBoard from '../../components/DashBoard/DashBoard'
import { AddNewAdModal } from '../../components/Modals/AddNewAdModal'
import AddNewFolderModal from '../../components/Modals/AddNewFolderModal/AddNewFolderModal'
import DeleteFolderModal from '../../components/Modals/DeleteFolderModal/DeleteFolderModal'
import EditFolderModal from '../../components/Modals/EditFolderModal/EditFolderModal'
import { AdGetEnd, GetAllFoldersEnd } from '../../constants/api.constants'
import detectAdBlock from '../../utils/DetectAdBlocker/DetectAdBlocker'
import Toast from '../../utils/Toast/Toast'
import './AdManagement.scss'

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
  const [editFolder, setEditFolder] = useState(false)
  const [editFolderDetails, setEditFolderDetails] = useState({})
  const [deleteFolder, setDeleteFolder] = useState(false)
  const [deleteFolderDetails, setDeleteFolderDetails] = useState({})

  useEffect(() => {
    detectAdBlock()

    if (view === 'grid') {
      loadAllFolders(folderSearchId)
    } else {
      loadAllAds()
    }
  }, [folderSearchId, view])

  useEffect(() => {
    // setFolderSearchId(null)
    loadAllAds()
  }, [adSearchKey])

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
      let adGetUrl = AdGetEnd + `?all_ads=true`
      if (adSearchKey) {
        adGetUrl += `&name=${adSearchKey}`
        setView('list')
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

  const handleEditFolder = (folder) => {
    setEditFolderDetails(folder)
    setEditFolder(true)
  }

  const handleDeleteFolder = (folder) => {
    setDeleteFolderDetails(folder)
    setDeleteFolder(true)
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
              <option value='grid' selected={view === 'grid' ? true : false}>
                Grid view
              </option>
              <option value='list' selected={view === 'list' ? true : false}>
                List View (all ad)
              </option>
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
                    className='m-2 px-2 custom-folder d-flex  justify-content-between align-items-start'
                    style={{ cursor: 'pointer', width: '5.3rem' }}
                  >
                    <div
                      onClick={() => {
                        setPreviousSearchId(folderSearchId)
                        setFolderSearchId(folder?._id)
                      }}
                    >
                      <AiFillFolder
                        style={{
                          height: '3.5rem',
                          width: '3.5rem',
                        }}
                        color='#bad9ba'
                        title={folder?.name}
                      />
                      <p
                        className='m-0 text-center'
                        style={{
                          position: 'relative',
                          top: '-0.5rem',
                          maxWidth: '4rem',
                          overflowWrap: 'break-word',
                        }}
                      >
                        <small>{folder?.name}</small>
                      </p>
                    </div>
                    <Dropdown
                      drop='bottom'
                      style={{
                        cursor: 'pointer',
                        marginLeft: '-14px',
                        marginTop: '2px',
                        padding: '0px',
                      }}
                    >
                      <Dropdown.Toggle
                        variant='transparent'
                        id='dropdown-basic'
                      >
                        <img
                          src={threedot}
                          alt=''
                          style={{
                            transform: ' rotate(90deg)',
                            display: 'none',
                          }}
                        />{' '}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='mt-2'>
                        <Dropdown.Item onClick={() => handleEditFolder(folder)}>
                          Edit Folder{' '}
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDeleteFolder(folder)}
                        >
                          Delete Folder
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                ))}
              <div
                onClick={() => setAddNewFolder(true)}
                style={{ cursor: 'pointer' }}
                className='m-2 px-2'
              >
                <AiFillFolderAdd
                  style={{
                    height: '3.5rem',
                    width: '3.5rem',
                  }}
                  color='#bad9ba'
                  title='Add New Folder'
                />
              </div>
            </section>
            {ad.length > 0
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
              : !spinner && (
                  <h3 className='text-secondary my-5 py-5 text-center'>
                    No ad Found!
                  </h3>
                )}
          </div>
        )}
        {view === 'grid' && (
          <button
            className='primary-btn '
            style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
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
      <EditFolderModal
        show={editFolder}
        details={editFolderDetails}
        parentID={editFolderDetails?.parent_id}
        handleClose={() => setEditFolder()}
        loadAllFolders={loadAllFolders}
      />
      <DeleteFolderModal
        show={deleteFolder}
        folder={deleteFolderDetails}
        folderID={deleteFolderDetails?.parent_id}
        handleClose={() => setDeleteFolder()}
        loadAllFolders={loadAllFolders}
      />
    </div>
  )
}

export default AdManagement
