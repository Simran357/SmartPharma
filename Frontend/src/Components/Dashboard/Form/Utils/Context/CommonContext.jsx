import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from '../AxiosInstance'

export const contextProvide = createContext()
const CommonContext = ({ children }) => { 
  const [auth, setAuth] = useState("")
  const [userRoles,setUserRoles] = useState("")

      useEffect(() => {
    axiosInstance.get("/registerroute/me")
      .then((res) => {
        console.log("res",res?.data)
        setAuth(res?.data?.user?.userId );
        setUserRoles(res?.data?.user?.role)
      })  
      .catch(() => {
        setAuth("");
        setUserRoles("")
      });
  }, []);
  console.log("auth in context",auth)
   return (
    <contextProvide.Provider value={{auth ,setAuth,userRoles,setUserRoles}}>
      {children}
    </contextProvide.Provider>
  )
}
export default CommonContext