import { Select } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Pagination, Spinner, Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import plus from '../../assets/icons/plus.svg'
import uploadBtn from '../../assets/icons/upload.svg'
import demoImg from '../../assets/images/demoLogoImg.png'
import DashBoard from '../../components/DashBoard/DashBoard'
import StoreFronManagementModal from '../../components/Modals/StoreFrontManagementModal/StoreFronManagementModal'
import {
  GetAllStoreAPI,
  GetAllTagUrl,
  GetAllTypesUrl,
} from '../../constants/api.constants'
import detectAdBlock from '../../utils/DetectAdBlocker/DetectAdBlocker'
import Toast from '../../utils/Toast/Toast'
import './StoreFrontManagement.scss'

const { Option } = Select

const StoreFrontManagement = () => {
  const [show, setShow] = useState(false)
  const [spin, setSpin] = useState(false)
  const [allTags, setAllTags] = useState([])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const history = useHistory()
  // const [store, setStore] = useContext(StoreProvider)
  const goToStore = (id) => {
    history.push(`/storefront/${id}`)
  }
  const [totalDoc, setTotalDoc] = useState(0)

  const [allStore, setAllStore] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [searchTag, setSearchTag] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [searchType, setSearchType] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [allTypes, setAllTypes] = useState([])
  const [sort, setSort] = useState('')
  useEffect(() => {
    detectAdBlock()
  }, [])

  useEffect(() => {
    loadAllTags()
  }, [searchTag])
  useEffect(() => {
    loadAllTypes()
  }, [searchType])

  useEffect(() => {
    loadStoreData()
  }, [page, search, selectedTag, selectedType, sort])

  const loadStoreData = async () => {
    setSpin(true)
    let url = GetAllStoreAPI + `?page=${page}`
    if (search.length > 0) {
      url += `&filter=${search}`
      setPage(1)
    }
    if (selectedTag.length > 0) {
      url += `&tag=${selectedTag}`
      setPage(1)
    }
    if (selectedType.length > 0) {
      url += `&type=${selectedType}`
      setPage(1)
    }
    if (sort.length > 0) {
      url += `&sort=${sort}`
    }
    try {
      const response = await axios.get(url, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (response.status === 200) {
        setAllStore(response.data.data)

        setTotalDoc(response?.data?.total_document)
        setSpin(false)
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
    } catch (error) {
      setSpin(false)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  const loadAllTags = async () => {
    setSpin(true)
    let url = GetAllTagUrl
    if (searchTag.length > 0) {
      url += `?filter=${searchTag}`
    }
    try {
      const response = await axios.get(url, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (response.status === 200) {
        setAllTags(response.data?.data)
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
      setSpin(false)
    } catch (error) {
      setSpin(false)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  const loadAllTypes = async () => {
    setSpin(true)
    let url = GetAllTypesUrl
    if (searchType.length > 0) {
      url += `?filter=${searchType}`
    }
    try {
      const response = await axios.get(url, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (response.status === 200) {
        setAllTypes(response.data?.data)
      } else
        throw new Error(
          response?.data?.msg || ' Something went wrong! Try again later.'
        )
      setSpin(false)
    } catch (error) {
      setSpin(false)
      Toast(
        'err',
        error.response?.data?.msg || 'Something went wrong! Try again later.'
      )
    }
  }

  let items = []
  let totalPage = 0
  if (totalDoc < 10) totalPage = 1
  else totalPage = Math.ceil(totalDoc / 10)
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number == page}>
        {number}
      </Pagination.Item>
    )
  }

  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fw-bold'>Storefront Management</h3>
          <button
            className='primary-btn d-flex justify-content-center align-items-center '
            onClick={handleShow}
          >
            <img className='me-3' src={plus} alt='' /> Create New Store
          </button>
        </div>

        <div className='mt-4 plain-input me-2'>
          <label for=''>Search Store</label>
          <br />
          <input
            type='text'
            placeholder='search by name, email, location, phone etc.'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className='d-flex justify-content-between align-items-center mt-3'>
          <div className='custom-dropdown '>
            <label for=''>Sort By</label>
            <select onChange={(e) => setSort(e.target.value)}>
              <option hidden>no selected</option>
              <option value='name_ascending'>Name (a to z)</option>
              <option value='name_descending'> Name (z to a)</option>
              <option value='time_descending'>Time (new to old)</option>
              <option value='time_ascending' selected>
                Time(old to new)
              </option>
            </select>
          </div>
          <div className='ms-2 custom-dropdown'>
            <label style={{ marginBottom: '0.7rem' }}>Types</label>
            <br />

            <Select
              className=''
              suffixIcon=''
              style={{ minWidth: '100%' }}
              showSearch
              autoFocus={false}
              optionFilterProp='children'
              onChange={(s) => setSelectedType(s)}
              onSearch={(s) => setSearchType(s)}
              filterOption={false}
            >
              {' '}
              <option value=''>See all</option>
              {allTypes?.map((t, idx) => (
                <option key={idx} value={t?._id?.type}>
                  {t?._id?.type}
                </option>
              ))}
            </Select>
          </div>
          {/* <div className='custom-dropdown ms-2'>
            <label for=''>Type</label>
            <select>
              <option value='1' style={{ border: 'none' }}>
                {' '}
                Type A
              </option>
              <option value='2'> Type B</option>
            </select>
          </div> */}
          {/* <div className='custom-dropdown ms-2'>
            <label for=''>Time</label>
            <select>
              <option value='3'> Time (new to old)</option>
              <option value='3'> Time (old to new)</option>
            </select>
          </div> */}
          <div className='ms-2 custom-dropdown'>
            <label style={{ marginBottom: '0.7rem' }}>Tags</label>
            <br />

            <Select
              className=''
              suffixIcon=''
              style={{ minWidth: '100%' }}
              showSearch
              autoFocus={false}
              optionFilterProp='children'
              onChange={(s) => setSelectedTag(s)}
              onSearch={(s) => setSearchTag(s)}
              filterOption={false}
            >
              <option value=''>See all</option>
              {allTags?.map((t, idx) => (
                <option key={idx} value={t?._id?.tag}>
                  {t?._id?.tag}
                </option>
              ))}
            </Select>
          </div>
          {/* <div className='custom-dropdown ms-2'>
            <label for=''>Tags</label>
            <select onChange={(e) => setSearchTag(e.target.value)}>
              <option value='' hidden>
                {' '}
                not selected
              </option>
              {allTags?.map((t, idx) => (
                <option value={t?._id?.tag}>{t?._id?.tag}</option>
              ))}
            </select>
          </div> */}
        </div>

        {spin && (
          <div className='d-flex justify-content-center align-items-center my-5'>
            <Spinner animation='border' style={{ color: '#558f55' }} />
          </div>
        )}

        {!spin ? (
          <Table
            striped
            bordered
            hover
            responsive
            borderless={true}
            className='my-5 text-start'
          >
            <thead>
              <tr>
                <th>Store</th>
                <th>Owner</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {allStore?.map((dt, idx) => (
                <tr key={idx} onClick={() => goToStore(dt?._id)}>
                  <td> {dt.name} </td>
                  <td>{dt.manager}</td>
                  <td>{dt.phone}</td>
                  <td>{dt.email}</td>
                  <td>{dt.address}</td>
                  <td>{dt.type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !spin && (
            <h2 className='text-center my-5 text-secondary'>No Data Found!</h2>
          )
        )}

        {!spin && (
          <div className='d-flex justify-content-center align-items-center my-5'>
            <Pagination
              onClick={(e) => {
                setPage(e.target.innerText)
              }}
            >
              {items}
            </Pagination>
          </div>
        )}
      </div>

      <StoreFronManagementModal
        show={show}
        handleClose={handleClose}
        demoImg={demoImg}
        uploadBtn={uploadBtn}
        loadStoreData={loadStoreData}
      />
    </div>
  )
}

export default StoreFrontManagement
