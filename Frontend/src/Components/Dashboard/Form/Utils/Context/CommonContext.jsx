import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from '../AxiosInstance'

export const contextProvide = createContext()
const CommonContext = ({ children }) => { 
  const [auth, setAuth] = useState()

      useEffect(() => {
    axiosInstance.get("/registerroute/me")
      .then(() => {
        setAuth(true);
      })  
      .catch(() => {
        setAuth(false);
      });
  }, []);
   return (
    <contextProvide.Provider value={{auth ,setAuth}}>
      {children}
    </contextProvide.Provider>
  )
}
export default CommonContext