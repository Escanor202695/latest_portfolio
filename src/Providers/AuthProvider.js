import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext({
  user: {},
  setUser: () => { },
})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const login = React.useCallback((u) => {
    setUser(u)
  }, []);

  React.useEffect(() => {
    const token = localStorage.getItem('menu_token')
    if (token) {
      setUser({ _id: token })
    } else {
      setUser({})
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser: login }} >
      {children}
    </AuthContext.Provider >
  )
}
export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
