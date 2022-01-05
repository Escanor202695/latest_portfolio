import React, { createContext } from 'react'
import { ROUTENAME } from '../constants'
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
import { useAuth } from '../Providers/AuthProvider'
import { useEffect } from 'react'
import axios from 'axios'
import { GetThemeEnd } from '../constants/api.constants'
import { ForgotPassReset } from '../pages/ForgotPassReset'
export const UserContext = createContext()

function App() {
  const { user } = useAuth()
  const token = localStorage.getItem('menu_token')

  useEffect(() => {
    if (token) {
      getTheme(token)
    }
  }, [token])

  const getTheme = async (token) => {
    try {
      const response = await axios.get(GetThemeEnd, {
        headers: {
          menuboard: token,
        },
      })
      console.log(response)
      if (response.status === 200) {
        Object.keys(response.data.data[0]).map((key) => {
          const value = response.data.data[0][key]
          document.documentElement.style.setProperty(`--${key}`, value)
        })
      } else throw new Error(response?.data?.msg)
    } catch (error) {
      // Toast('err', error.response?.data?.msg)
    }
  }

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
          {user?._id ? (
            <Redirect from='/login' to='/' />
          ) : (
            <Route exact path={ROUTENAME.LOGIN} component={Login} />
          )}
          <Route
            exact
            path={ROUTENAME.FROGOTPASSRESET}
            component={ForgotPassReset}
          />

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
