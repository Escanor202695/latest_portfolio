import React from 'react'
import AuthProvider from './AuthProvider'
import StoreProvider from './StoreProvider'

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <StoreProvider>
        {children}
      </StoreProvider>
    </AuthProvider>
  )
}

export default Providers
