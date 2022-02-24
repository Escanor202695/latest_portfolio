import React, { useEffect, useState } from 'react'
import { Form, Modal, Spinner } from 'react-bootstrap'
import demoImg from '../../../assets/images/demoLogoImg.png'
import axios from 'axios'
import {
  AdCreateEnd,
  AdGetEnd,
  FileUploadEnd,
  FolderCreateEnd,
  StoreEdit,
} from '../../../constants/api.constants'
import Toast from '../../../utils/Toast/Toast'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { MdDeleteForever } from 'react-icons/md'

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }))

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}
const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : '#eaeaea',
  borderRadius: '4px',

  // styles we need to apply on draggables
  ...draggableStyle,
})
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : '#f8f8f8',
  padding: grid,
  width: '50%',
  margin: '10px 0',
})

const AddStoreAd = ({ show, handleClose, storeData, loadStoreData }) => {
  console.log(storeData)

  const [state, setState] = useState([[], []])

  function onDragEnd(result) {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }
    const sInd = +source.droppableId
    const dInd = +destination.droppableId

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index)
      const newState = [...state]
      newState[sInd] = items
      setState(newState)
    } else {
      const result = move(state[sInd], state[dInd], source, destination)
      const newState = [...state]
      newState[sInd] = result[sInd]
      newState[dInd] = result[dInd]

      setState(newState)
    }
  }

  const [allAds, setAllAds] = useState([])
  const [spinner, setSpinner] = useState(false)
  const [searchKey, setSearchKey] = useState('')
  const [adSpinner, setAdSpinner] = useState(false)
  useEffect(() => {
    loadAllAds()
  }, [show, searchKey])

  const loadAllAds = async () => {
    console.log(state)

    setAdSpinner(true)
    let end = AdGetEnd
    if (searchKey) {
      end += `?name=${searchKey}`
    }

    try {
      const res = await axios.get(end, {
        headers: {
          menuboard: localStorage.getItem('menu_token'),
        },
      })

      if (res.status === 200) {
        setAllAds(res?.data?.data)
        console.log(res?.data?.data)
        let filteredArr = res?.data?.data

        for (let i of state[1]) {
          filteredArr = filteredArr.filter((d) => d?._id !== i?._id)
          console.log(filteredArr)
        }

        console.log(filteredArr)

        setState([filteredArr, state[1]])
        setAdSpinner(false)
      } else throw new Error(res?.data?.msg)
    } catch (error) {
      setAdSpinner(false)
    }
  }

  const handleSubmit = async () => {
    if (state[1].length === 0) {
      return
    }
    setSpinner(true)

    let newAddData = []
    state[1].map((d) => newAddData.push({ ad_link: d?._id }))
    let data = {
      ...storeData,
      id: storeData._id,
    }
    delete data?._id
    delete data?.short_id
    delete data?.password
    delete data?.__v

    try {
      const res = await axios.put(
        StoreEdit,
        {
          ...data,
          ads: newAddData,
        },
        {
          headers: {
            menuboard: localStorage.getItem('menu_token'),
          },
        }
      )

      if (res.status === 200) {
        Toast('success', 'Ads added successfully')
        setSpinner(false)
        loadStoreData()
        setAllAds([])
        setState([[], []])
        console.log(state)
        loadAllAds()
        handleClose()
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

  console.log(state)

  return (
    <Modal show={show} onHide={handleClose} size='xl'>
      <Modal.Header closeButton style={{ border: 'none' }}>
        <Modal.Title style={{ fontSize: '22px' }}>
          Add Advertisement To Store
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ overflowY: 'scroll', height: '80vh' }}>
        <div>
          {/* <button
            type='button'
            onClick={() => {
              setState([...state, []])
            }}
          >
            Add new group
          </button> */}
          {/* <button
            type='button'
            onClick={() => {
              setState([...state, getItems(1)])
            }}
          >
            Add new item
          </button> */}

          <div className='plain-input my-3'>
            <label for=''>Search </label>
            <br />
            <input
              type='text'
              placeholder='enter ad name'
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', width: '100%' }}>
            <DragDropContext onDragEnd={onDragEnd}>
              {state.map((el, ind) => (
                <Droppable key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                      {...provided.droppableProps}
                    >
                      <h5 className='mb-4 d-flex justify-content-start align-items-center'>
                        {ind === 0 ? `All Ad` : 'Added For Store'}
                        {ind === 0 && adSpinner && (
                          <Spinner
                            animation='border'
                            size='sm'
                            className='ms-2'
                          />
                        )}
                      </h5>
                      {el.map((item, index) => (
                        <Draggable
                          key={item._id}
                          draggableId={item._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <div
                                // style={{
                                //   display: 'flex',
                                //   justifyContent: 'space-between',
                                //   alignItems: 'center',
                                // }}
                                className='row justify-content-between align-items-center '
                              >
                                <div className='col-5 d-flex'>
                                  <h5>
                                    {index + 1}. {'  '}
                                  </h5>
                                  <div className='ms-2'>
                                    <h5>{item?.name}</h5>
                                    <h6
                                      style={{ color: 'var(--primary_color)' }}
                                    >
                                      {item?.folder_id?.name}
                                    </h6>
                                  </div>
                                </div>

                                <img
                                  className='col-4'
                                  src={item?.link}
                                  alt=''
                                  height='80px'
                                  width='100px'
                                />
                                {ind !== 0 && (
                                  // <button
                                  //   type='button'
                                  //   className='danger-btn-light'

                                  // >
                                  //   Remove
                                  // </button>
                                  <div className='col-1 mx-2 text-center'>
                                    <MdDeleteForever
                                      style={{
                                        height: '50px',
                                        width: '30px',
                                        cursor: 'pointer',
                                      }}
                                      className='text-danger'
                                      onClick={() => {
                                        const newState = [...state]
                                        newState[ind].splice(index, 1)
                                        newState[0].push(item)
                                        setState(newState)
                                      }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </DragDropContext>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <button className='primary-btn-light' onClick={handleClose}>
          Close
        </button>
        <button
          className='primary-btn d-flex justify-content-center align-items-center'
          onClick={() => handleSubmit()}
        >
          Save Changes{' '}
          {spinner && <Spinner className='ms-2' animation='border' size='sm' />}
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddStoreAd
