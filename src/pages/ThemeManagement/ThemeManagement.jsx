import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Pagination, Spinner } from 'react-bootstrap'
import DashBoard from '../../components/DashBoard/DashBoard'
import ThemeCard from '../../components/ThemeCard/ThemeCard'
import { GetThemeEnd } from '../../constants/api.constants'
import Toast from '../../utils/Toast/Toast'
import plus from '../../assets/icons/plus.svg'
import { CreateThemeModal } from '../../components/Modals/CreateThemeModal'

const ThemeManagement = () => {
  const [allThemes, setAllThemes] = useState([])
  const [page, setPage] = useState(1)
  const [documentCount, setDocumentCount] = useState(0)
  const [spinner, setSpinner] = useState(false)
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  useEffect(() => {
    getAllTheme()
  }, [search])

  const getAllTheme = async () => {
    setSpinner(true)
    let url = GetThemeEnd
    if (search.length > 0) {
      url += `?name=${search}`
    }
    try {
      const res = await axios.get(url, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })
      console.log(res)
      if (res.status === 200) {
        setAllThemes(res?.data?.data)
        setDocumentCount(res?.data?.total_document)
        setPage(res?.data?.page)
        setSpinner(false)
      } else throw new Error(res?.data?.msg || 'Try again later!')
    } catch (error) {
      Toast(
        'err',
        error.response?.data?.msg || 'Something wen wrong. Try again later!'
      )
      setSpinner(false)
    }
  }

  let items = []
  let totalPage = 0
  if (documentCount < 10) totalPage = 1
  else totalPage = documentCount / 10
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
        <div className='d-flex justify-content-between align-items-center mb-5'>
          <h3 className='fw-bold'>Theme Management</h3>
          <button
            className='primary-btn d-flex justify-content-center align-items-center '
            onClick={() => setShow(true)}
          >
            <img className='me-3' src={plus} alt='' /> Create New Theme
          </button>
        </div>
        <div className='custom-input w-100 me-2'>
          <label for=''>Search Admin</label>
          <br />
          <input
            type='text'
            placeholder='search theme by name'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='d-block'>
          {spinner ? (
            <div className='text-center my-5'>
              <Spinner animation='border' className='text-success' />
            </div>
          ) : allThemes?.length > 0 ? (
            allThemes.map((theme, idx) => (
              <ThemeCard
                theme={theme}
                key={idx}
                getAllTheme={() => getAllTheme()}
              />
            ))
          ) : (
            <h2 className='text-center text-muted my-5 py-5'>
              No Theme Found!
            </h2>
          )}
        </div>

        {!spinner && allThemes?.length > 0 && (
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

      <CreateThemeModal
        show={show}
        handleClose={handleClose}
        getAllTheme={() => getAllTheme()}
      />
    </div>
  )
}

export default ThemeManagement
