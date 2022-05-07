import 'antd/dist/antd.css'
import React, { createContext, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import { ROUTENAME } from '../constants'
import AdManagement from '../pages/AdManagement/AdManagement'
import { AdminManagement } from '../pages/AdminManagement'
import Login from '../pages/Authentication/Login'
import PrivateRoute from '../pages/Authentication/PrivateRoute'
import { ForgotPassReset } from '../pages/ForgotPassReset'
import Home from '../pages/Home/Home'
import StoreHome from '../pages/Home/StoreHome'
import { NotFound } from '../pages/NotFound'
import Profile from '../pages/Profile/Profile'
import { StoreFront } from '../pages/StoreFront'
import StoreFrontManagement from '../pages/StoreFrontManagement/StoreFrontManagement'
import ThemeManagement from '../pages/ThemeManagement/ThemeManagement'
import { useAuth } from '../Providers/AuthProvider'
import detectAdBlock from '../utils/DetectAdBlocker/DetectAdBlocker'
export const UserContext = createContext()

function App() {
  const { user } = useAuth()

  useEffect(() => {
    detectAdBlock()
  }, [])

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
            path={ROUTENAME.FORGOTPASSRESET}
            component={ForgotPassReset}
          />

          {/* <Route path={ROUTENAME.LOGIN} component={Login} exact /> */}
          <Route path={ROUTENAME.STOREHOME} exact>
            <StoreHome />
          </Route>
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
          {/* <PrivateRoute exact path={ROUTENAME.GLOBALSETTINGS}>
            <GlobalSettings />
          </PrivateRoute> */}
          <PrivateRoute exact path={ROUTENAME.THEMEMANAGEMENT}>
            <ThemeManagement />
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
