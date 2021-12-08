import React from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavigationBar } from '../components/NavigationBar'

const AppContainer = () => {
  return (
    <React.Fragment>
      {/*wrapping provider */}
      <NavigationBar />
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1rem' }}>
        <App />
      </div>
    </React.Fragment>
  )
}

export default AppContainer
