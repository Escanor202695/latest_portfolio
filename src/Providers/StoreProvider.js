import React, { createContext, useContext, useState } from "react";
const StoreContext = createContext({})

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({})


  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  )
}
export default StoreProvider;
export const useStore = () => useContext(StoreContext);
