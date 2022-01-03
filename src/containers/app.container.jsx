import React from 'react'
import App from './App'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import Providers from '../Providers'

const AppContainer = () => {
  return (
    <Providers>
      <ToastContainer />
      <App />
    </Providers>
  )
}

export default AppContainer
