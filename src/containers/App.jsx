import React, { useState } from 'react'
import { ROUTENAME } from '../constants'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Home from '../pages/Home/Home'
import { AdminManagement } from '../pages/AdminManagement'
import AdManagement from '../pages/AdManagement/AdManagement'
import StoreFrontManagement from '../pages/StoreFrontManagement/StoreFrontManagement'
import { StoreFront } from '../pages/StoreFront'
import { GlobalSettings } from '../pages/GlobalSettings'
import { NotFound } from '../pages/NotFound'
import { StoreContext } from '../context/StoreContext'
import Login from '../pages/Authentication/Login'

function App() {
  const [store, setStore] = useState({
    tags: [],
  })

  return (
    <StoreContext.Provider value={[store, setStore]}>
      <BrowserRouter>
        <NavigationBar />
        <div
          style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1rem' }}
        >
          <Routes>
            <Route path={ROUTENAME.HOME} element={<Login />} />
            <Route path={ROUTENAME.HOMEPAGE} element={<Home />} />

            <Route
              path={ROUTENAME.ADMINMANAGEMENT}
              element={<AdminManagement />}
            />
            <Route
              path={ROUTENAME.STOREFRONTMANAGEMENT}
              element={<StoreFrontManagement />}
            />
            <Route path={ROUTENAME.ADDMANAGEMENT} element={<AdManagement />} />
            <Route path={ROUTENAME.STOREFRONT} element={<StoreFront />} />
            <Route
              path={ROUTENAME.GLOBALSETTINGS}
              element={<GlobalSettings />}
            />
            <Route path={ROUTENAME.LOGIN} element={<Login />} />
            <Route path={ROUTENAME.NOTFOUND} element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StoreContext.Provider>
  )
}

export default App
