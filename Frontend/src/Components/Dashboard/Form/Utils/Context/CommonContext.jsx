import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from '../AxiosInstance'

export const contextProvide = createContext()
const CommonContext = ({ children }) => { 
  const [auth, setAuth] = useState("")
  const [userRoles,setUserRoles] = useState("")

      useEffect(() => {
    axiosInstance.get("/registerroute/me")
      .then((res) => {
        setAuth(res?.user?.userId);
        setUserRoles(res?.user?.role)
      })  
      .catch(() => {
        setAuth("");
      });
  }, []);
   return (
    <contextProvide.Provider value={{auth ,setAuth,userRoles}}>
      {children}
    </contextProvide.Provider>
  )
}
export default CommonContext