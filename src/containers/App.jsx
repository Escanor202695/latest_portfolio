import React, { createContext } from 'react'
import { ROUTENAME } from '../constants'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Home from '../pages/Home/Home'
import { AdminManagement } from '../pages/AdminManagement'
import AdManagement from '../pages/AdManagement/AdManagement'
import StoreFrontManagement from '../pages/StoreFrontManagement/StoreFrontManagement'
import { StoreFront } from '../pages/StoreFront'
import { GlobalSettings } from '../pages/GlobalSettings'
import { NotFound } from '../pages/NotFound'
import Login from '../pages/Authentication/Login'
import Profile from '../pages/Profile/Profile'
import PrivateRoute from '../pages/Authentication/PrivateRoute'
import Providers from '../Providers'
import { useAuth } from '../Providers/AuthProvider'
import { useEffect } from 'react'
import axios from 'axios'
import { GetAdminProfileUrl } from '../constants/api.constants'
import Toast from '../utils/Toast/Toast'
import { useState } from 'react'
export const UserContext = createContext()

function App() {
  const { user } = useAuth()
  // console.log(auth)
  // const token = localStorage.getItem('menu_token')

  // useEffect(() => {
  //   if (token) {
  //     getAdminInfo(token)
  //   }
  // }, [])

  // const getAdminInfo = async (token) => {
  //   try {
  //     const response = await axios.get(GetAdminProfileUrl, {
  //       headers: {
  //         menuboard: token,
  //       },
  //     })
  //     console.log(response)
  //     if (response.status === 200) {
  //       auth.setUser(response.data.data)
  //     } else throw new Error(response?.data?.msg)
  //   } catch (error) {
  //     Toast('err', error.response?.data?.msg)
  //   }
  // }

  return (
    <Router>
      <NavigationBar />
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1rem' }}>
        <Switch>
          {user._id ? (
            <Redirect from='/login' to='/' />
          ) : (
            <Route exact path={ROUTENAME.LOGIN} component={Login} />
          )}

          {/* <Route path={ROUTENAME.LOGIN} component={Login} exact /> */}
          <PrivateRoute path={ROUTENAME.HOME} exact>
            <Home />
          </PrivateRoute>

          <PrivateRoute exact path={ROUTENAME.ADMINMANAGEMENT}>
            <AdminManagement />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTENAME.STOREFRONTMANAGEMENT}>
            <StoreFrontManagement />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTENAME.ADDMANAGEMENT}>
            <AdManagement />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTENAME.STOREFRONT}>
            <StoreFront />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTENAME.GLOBALSETTINGS}>
            <GlobalSettings />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTENAME.PROFILE}>
            <Profile />
          </PrivateRoute>

          <Route path={ROUTENAME.NOTFOUND} component={NotFound} exact />
        </Switch>
      </div>
    </Router>
  )
}

export default App
