import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from '../AxiosInstance'

export const contextProvide = createContext()
const CommonContext = ({ children }) => { 
  const [auth, setAuth] = useState("")

      useEffect(() => {
    axiosInstance.get("/registerroute/me")
      .then((res) => {
        setAuth(res?.user?.userId);
      })  
      .catch(() => {
        setAuth("");
      });
  }, []);
   return (
    <contextProvide.Provider value={{auth ,setAuth}}>
      {children}
    </contextProvide.Provider>
  )
}
export default CommonContext