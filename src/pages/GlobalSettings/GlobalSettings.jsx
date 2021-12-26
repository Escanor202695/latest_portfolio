import React, { useState } from 'react'
import './GlobalSettings.scss'
import DashBoard from '../../components/DashBoard/DashBoard'
import Switch from 'react-switch'
import vertical from '../../assets/icons/threeVertical.svg'

const GlobalSettings = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className='row py-3'>
      <div className='col-3'>
        <DashBoard />
      </div>
      <div className='col-9'>
        <h3 className='fw-bold'>Global Settings</h3>

        <div className='global-settings mt-5 mb-3 d-flex justify-content-between align-items-start'>
          <div>
            <h5>Settings Name</h5>
            <p className='mt-3'>
              Setting Description, What effect this setting carries in the
              website. Lorem ipsum ut quia sunt. Nostrum ad repellat pariatur.
              Ut nam debitis deserunt eligendi est incidunt asperiores
            </p>
          </div>
          <Switch
            onColor='#558f55'
            uncheckedIcon={
              <div
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  fontSize: '14px',
                }}
              >
                OFF
              </div>
            }
            checkedIcon={
              <div
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  fontSize: '14px',
                }}
              >
                ON
              </div>
            }
            onChange={() => setChecked(!checked)}
            checked={checked}
          />
        </div>

        <div className='global-settings mb-3 d-flex justify-content-between align-items-start row'>
          <div className='col-8'>
            <h5>Global Value Name</h5>
            <p className='mt-3'>
              Setting Description, What effect this setting carries in the
              website. Lorem ipsum ut quia sunt. Nostrum ad repellat pariatur.
              Ut nam debitis deserunt eligendi est incidunt asperiores
            </p>
          </div>
          <div className='col-4'>
            <div className='plain-dropdown '>
              <select>
                <option value='1' style={{ border: 'none' }}>
                  value 1
                </option>
                <option value='2'> value 2</option>
              </select>
            </div>
            <button className='primary-btn-light w-100 mt-3 '>Edit</button>
          </div>
        </div>

        <div className='global-settings mb-3 d-flex justify-content-between align-items-start row'>
          <div className='col-8'>
            <h5>Global Value Name</h5>
            <p className='mt-3'>
              Setting Description, What effect this setting carries in the
              website. Lorem ipsum ut quia sunt. Nostrum ad repellat pariatur.
              Ut nam debitis deserunt eligendi est incidunt asperiores
            </p>
          </div>
          <div className='col-4'>
            <div className='plain-dropdown '>
              <select>
                <option value='1' style={{ border: 'none' }}>
                  value 1
                </option>
                <option value='2'> value 2</option>
              </select>
            </div>
            <button className='primary-btn w-100 mt-3 '>Save</button>
          </div>
        </div>

        <div className='global-settings mb-3 d-flex justify-content-between align-items-start row'>
          <div className='col-8'>
            <h5>Global Value Name</h5>
            <p className='mt-3'>
              Setting Description, What effect this setting carries in the
              website. Lorem ipsum ut quia sunt. Nostrum ad repellat pariatur.
              Ut nam debitis deserunt eligendi est incidunt asperiores
            </p>
          </div>
          <div className='col-4'>
            <div className='plain-dropdown '>
              <select>
                <option value='1' style={{ border: 'none' }}>
                  value 1
                </option>
                <option value='2'> value 2</option>
              </select>
            </div>
            <button className='primary-btn-light w-100 mt-3 '>Edit</button>
          </div>
        </div>

        <div className='global-settings mb-3 d-flex justify-content-between align-items-start row'>
          <div className='col-8'>
            <h5>Global Value Name</h5>
            <p className='mt-3'>
              Setting Description, What effect this setting carries in the
              website. Lorem ipsum ut quia sunt. Nostrum ad repellat pariatur.
              Ut nam debitis deserunt eligendi est incidunt asperiores
            </p>
          </div>
          <div className='col-4'>
            <div className='plain-dropdown '>
              <select>
                <option value='1' style={{ border: 'none' }}>
                  value 1
                </option>
                <option value='2'> value 2</option>
              </select>
            </div>
            <button className='primary-btn w-100 mt-3 '>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalSettings

/* <Switch
              className='custom-toggle'
              onColor='#558f55'
              uncheckedIcon={' off '}
              checkedIcon={
                <div
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  ON
                </div>
              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '34px',
                    width: '26px',
                    position: 'absolute',
                    left: '4px',
                    top: '-4px',
                  }}
                >
                  <svg
                    width='13'
                    height='12'
                    viewBox='0 0 13 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.699609 0.600037V11.4H2.49961V0.600037H0.699609ZM5.49961 0.600037V11.4H7.29961V0.600037H5.49961ZM10.2996 0.600037V11.4H12.0996V0.600037H10.2996Z'
                      fill='#DFECDF'
                    />
                  </svg>
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '34px',
                    width: '26px',
                    position: 'absolute',
                    left: '4px',
                    top: '-4px',
                  }}
                >
                  <svg
                    width='13'
                    height='12'
                    viewBox='0 0 13 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.699609 0.600037V11.4H2.49961V0.600037H0.699609ZM5.49961 0.600037V11.4H7.29961V0.600037H5.49961ZM10.2996 0.600037V11.4H12.0996V0.600037H10.2996Z'
                      fill='#DFECDF'
                    />
                  </svg>
                </div>
              }
              width={84}
              onChange={() => setChecked(!checked)}
              checked={checked}
            /> */
