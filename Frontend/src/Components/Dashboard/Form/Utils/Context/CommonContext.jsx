import React, { createContext, useState } from 'react'

export const contextProvide = createContext()
const CommonContext = ({ children }) => {
  const [auth, setAuth] = useState()
  return (
    <contextProvide.Provider value={{auth ,setAuth}}>
      {children}
    </contextProvide.Provider>
  )
}

export default CommonContext