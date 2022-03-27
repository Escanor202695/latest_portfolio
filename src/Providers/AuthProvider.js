import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext({
  user: {},
  setUser: () => { },
  adFolderPreviousId: '',
  setAdFolderPreviousId: () => { },
})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [adFolderPreviousId, setAdFolderPreviousId] = useState('')

  const login = React.useCallback((u) => {
    setUser(u)
  }, []);

  const setFolderPreviousId = React.useCallback((u) => {
    setAdFolderPreviousId(u)
  }, []);

  React.useEffect(() => {
    const token = localStorage.getItem('menu_token')
    if (token) {
      setUser({ _id: token })
    } else {
      setUser({})
    }
  }, [])

  console.log(adFolderPreviousId);

  return (
    <AuthContext.Provider value={{ user, setUser: login, setAdFolderPreviousId: setFolderPreviousId, adFolderPreviousId }} >
      {children}
    </AuthContext.Provider >
  )
}
export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
