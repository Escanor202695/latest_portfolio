import React from 'react'
import { ROUTENAME } from '../constants'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Home from '../pages/Home/Home'
import { AdminManagement } from '../pages/AdminManagement'
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1rem' }}>
        <Routes>
          <Route path={ROUTENAME.HOME} element={<Home />} />
          <Route
            path={ROUTENAME.ADMINMANAGEMENT}
            element={<AdminManagement />}
          />
          <Route
            path={ROUTENAME.STOREFRONTMANAGEMENT}
            element={<h1>STOREFRONTMANAGEMENT</h1>}
          />
          <Route
            path={ROUTENAME.ADDMANAGEMENT}
            element={<h1>ADMINMANAGEMENT</h1>}
          />

          <Route path={ROUTENAME.NOTFOUND} element={<h1>Not Found!</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
